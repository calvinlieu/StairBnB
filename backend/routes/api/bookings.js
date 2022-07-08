const express = require("express");
const {
  setTokenCookie,
  requireAuth,
  restoreUser,
} = require("../../utils/auth");
const { Image, Review, Spot, User, Booking } = require("../../db/models");
const { check, Result } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const router = express.Router();

//get all of the current user's bookings

router.get('/', requireAuth, async (req, res) => {
    const { id } = req.user;
    const bookings = await Booking.findAll({
       include: [
        {
            model: Spot,
            attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'price', 'previewImage']
        }
       ],
       where: { userId: id}
    })
    res.json(bookings)
})

//get all bookings for a spot based on the spot's id

router.get('/spot/:spotId', requireAuth, async (req, res) => {
    const { id } = req.user;
    const spotId = req.params.spotId;

    let currentBooking = await Spot.findByPk(spotId);

    if (!currentBooking) {
        res.status(404);
        res.json({
            message: "Spot couldn't be found",
            statusCode: 404
        })
    }

    if (currentBooking.ownerId !== id) {
        currentBooking = await Booking.findAll({
            where: { spotId },
            attributes: ['spotId', 'startDate', 'endDate']
        });
    } else {
        currentBooking = await Booking.findAll({
            where: { spotId },
            include: { model: User }
        })
    }

    res.json(currentBooking)

})

//create a booking from a spot based on the spot's id

router.post('/spot/:spotId', requireAuth, async (req, res) => {
    const {startDate, endDate } = req.body;
    const id = req.user.id;
    const spotId = req.params.spotId;

    const currentSpot = Spot.findByPk(spotId, {
        include: { model: Booking }
    });

    if (!currentSpot) {
        res.status(404);
        res.json({
            message: "Spot does not exist"
        })
    }

    if (endDate <= startDate) {
        res.status(400);
        res.json({
            message: "Validation error",
            statusCode: 400,
            errors: {
                endDate: "endDate cannot come before startDate"
            }
        })
    }

    const bookings = await Booking.findAll({
        where: {
            spotId: spotId,
            [Op.and]: [{
                startDate: {
                    [Op.gte]: endDate
                },
            }, {
                endDate: {
                    [Op.gte]: startDate
                }
            }],
        }
    })

    if (bookings.length) {
        res.status(403);
        res.json({
            "message": "Sorry, this spot is already booked for the specified dates",
            "statusCode": 403,
            "errors": {
              "startDate": "Start date conflicts with an existing booking",
              "endDate": "End date conflicts with an existing booking"
            }
          })
    }

    let newBooking = await Booking.create({
        startDate,
        endDate
    })

    res.json(newBooking)


})

module.exports = router;