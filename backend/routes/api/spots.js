const express = require("express");
const sequelize = require("sequelize");
const {
  setTokenCookie,
  restoreUser,
  requireAuth,
} = require("../../utils/auth");
const { Booking, Review, Image, Spot, User } = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const user = require("../../db/models/user");

const router = express.Router();

//get all spots
router.get("/", async (req, res) => {
  let spots = await Spot.findAll();

  return res.json(spots);
});

//add query filters to get all spots

router.get("/", async (req, res) => {
  const pagination = {
    options: []
  }

})

//get all spots owned by the current user
router.get("/your-spots", requireAuth, async (req, res) => {
  const allSpots = await Spot.findAll({
    where: { ownerId: req.user.id },
  });

  res.json(allSpots);
});

//get details of a Spot from an id
router.get("/:id", async (req, res) => {
  const spots = await Spot.findByPk(req.params.id, {
    include: [
      {
        model: Review,
        attributes: [],
      },
      {
        model: Image,
        as: "images",
        attributes: ["url"],
      },
      {
        model: User,
        as: "Owner",
        attributes: ["id", "firstName", "lastName"],
      },
    ],
  });

  const reviewData = await Spot.findByPk(req.params.id, {
    include: {
      model: Review,
      attributes: [],
    },
    attributes: [
      [sequelize.fn("COUNT", sequelize.col("*")), "numReviews"],
      [sequelize.fn("AVG", sequelize.col("stars")), "avgStarRating"],
    ],
    raw: true,
  });

  if (!spots) {
    res.status(404);
    res.json({
      message: "Spot couldn't be found",
      statusCode: 404,
    });
  }
  const spotData = spots.toJSON();
  spotData.numReviews = reviewData.numReviews;
  spotData.avgStarRating = reviewData.avgStarRating;

  res.json(spotData);
});

//create a spot
router.post("/", requireAuth, async (req, res) => {
  const { address, city, state, country, lat, lng, name, description, price } = req.body;

  const error = {
    "message": "Validation Error",
    "statusCode": 400,
    "errors": {}
  }

  if (!address) error.errors.address = "Street address is required"
  if (!city) error.errors.city = "City is required"
  if (!state) error.errors.state = "State is required"
  if (!country) error.errors.country = "Country is required"
  if (!lat) error.errors.lat = "Latitude is not valid"
  if (!lng) error.errors.lng = "Longitude is not valid"
  if (!name) error.errors.name = "Name must be less than 50 characters"
  if (!description) error.errors.description = "Description is required"
  if (!price) error.errors.price = "Price per day is required"

  if (!address || !city || !state || !country || !lat || !lng || !name || !description || !price) {
    res.statusCode = 400;
    return res.json(error);
  }

  const spot = await Spot.create({
    ownerId: req.user.id,
    address,
    city,
    state,
    country,
    lat,
    lng,
    name,
    description,
    price
  });

  res.json(spot);
});

//edit a spot
router.put("/:spotId", requireAuth, async (req, res) => {
  const { spotId } = req.params;
  const { address, city, state, country, lat, lng, name, description, price } = req.body;
  const spot = await Spot.findByPk(spotId);

  if (!spot) {
    return res.status(404).json({
      "message": "Spot couldn't be found",
      "statusCode": 404
    })
  }

  const error = {
    "message": "Validation Error",
    "statusCode": 400,
    "errors": {}
  }

  if (!address) error.errors.address = "Street address is required"
  if (!city) error.errors.city = "City is required"
  if (!state) error.errors.state = "State is required"
  if (!country) error.errors.country = "Country is required"
  if (!lat) error.errors.lat = "Latitude is not valid"
  if (!lng) error.errors.lng = "Longitude is not valid"
  if (!name) error.errors.name = "Name must be less than 50 characters"
  if (!description) error.errors.description = "Description is required"
  if (!price) error.errors.price = "Price per day is required"

  if (!address || !city || !state || !country || !lat || !lng || !name || !description || !price) {
    res.statusCode = 400;
    return res.json(error);
  }

  spot.address = address
  spot.city = city
  spot.state = state
  spot.lat = lat
  spot.lng = lng
  spot.name = name
  spot.description = description
  spot.price = price

  await spot.save()
  res.json(spot);
});

//delete a spot
router.delete("/:spotId", requireAuth, async (req, res) => {
  const { spotId } = req.params;
  const currentSpot = await Spot.findByPk(spotId);

  if (!currentSpot) {
    res.status(404);
    res.json({
      message: "Spot couldn't be found",
      statusCode: 404,
    });
  }

  currentSpot.destroy();
  res.json({
    message: "Successfully deleted",
  });
});



module.exports = router;
