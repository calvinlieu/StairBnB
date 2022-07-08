const express = require('express');
const sequelize = require('sequelize')
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { Booking, Review, Image, Spot, User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const user = require('../../db/models/user');

const router = express.Router();

//get all spots
router.get('/', async (req, res) => {
    let spots = await Spot.findAll();
    

    return res.json(spots);
});

//get all spots owned by the current user
router.get('/your-spots', requireAuth, async (req, res) => {
    const allSpots = await Spot.findAll({
        where: { ownerId: req.user.id }
    })

    res.json(allSpots);
})

//get details of a Spot from an id
router.get('/:id', async(req, res) => {
    const spots = await Spot.findByPk(req.params.id, {
        include: [
            {
                model: Image,
                as: 'images',
                attributes: ['url']
            },
            {
                model: User,
                as: 'Owner',
                attributes: ['id', 'firstName', 'lastName']
            }]
    });

    const reviewData = await Spot.findByPk(req.params.id, {
        include: {
            model: Review,
            attributes: []
        },
        attributes: [
            [sequelize.fn('COUNT', sequelize.col('*')), 'numReviews'],
            [sequelize.fn('AVG', sequelize.col('stars')), 'avgStarRating']
        ],
        raw: true
    })

    if (!spots) {
        res.status(404);
        res.json({
            message: "Spot couldn't be found",
            statusCode: 404
        })
    }
    const spotData = spots.toJSON();
    spotData.numReviews = reviewData.numReviews;
    spotData.avgStarRating = reviewData.avgStarRating;

    res.json(spotData);

})

//create a spot
router.post('/', requireAuth, async(req, res) => {
    spotParams = req.body;
    spotParams.ownerId = req.user.id;
  
    let spot = await Spot.create(spotParams);
    spot = await Spot.findByPk(spot.id);

    return res.json(spot);
})

//edit a spot
router.put('/:spotId', requireAuth, async (req, res) => {
  let spotId = req.params.spotId;
  let spotParams = req.body;
  let currentUserId = req.user.id;

  let spot = await Spot.findByPk(spotId);
  if (!spot || spot.ownerId !== currentUserId) {
    return res.status(404).json({
      "message": "Authorization required."
    });
  }

  try {
    spot = await Spot.update(spotParams, {
      where: {
        id: spotId
      }
    });
  } catch(error) {
    return res.status(400).json({
      "message": error.message
    });
  }
  spot = await Spot.findByPk(spotId);
  return res.json(spot);
});

//delete a spot
router.delete('/:spotId', requireAuth, async (req, res) => {
    const { spotId } = req.params;
    const currentSpot = await Spot.findByPk(spotId);


    if(!currentSpot) {
        res.status(404);
       res.json({
        message: "Spot couldn't be found",
        statusCode: 404
      })
    }
    
    currentSpot.destroy()
    res.json({
       message: "Successfully deleted",
     })
})





module.exports = router;