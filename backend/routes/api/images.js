const express = require("express");
const {
  setTokenCookie,
  requireAuth,
  restoreUser,
} = require("../../utils/auth");
const { handleValidationErrors } = require("../../utils/validation");
const { Image, Review, Spot, User, Booking } = require("../../db/models");
const { check, Result } = require("express-validator");
const router = express.Router();
const { Op, Sequelize } = require("sequelize");

//add an image to a spot based on the Spot's id

router.post("/:spotId/image", requireAuth, async (req, res) => {
  const spotId = req.params.spotId;

  const spot = await Spot.findByPk(spotId, {
    where: {
      ownerId: req.user.id,
    },
  });

  if (!spot) {
    res.status(404);
    res.json({
      message: "Spot couldn't be found",
      statusCode: 404,
    });
  }

  if (spot !== req.user.id) {
    res.status(403);
    res.json({
      message: "Forbidden. Spot must belong to the current User",
      statusCode: 403,
    });
  }

  const { url } = req.body;

  const newImg = await Image.create({
    url,
    imageableId: spot.ownerId,
    imageableType: "Spot",
  });

  res.json(newImg);
});

//Add an Image to a Review based on the Review's id
router.post("/review/:reviewId", requireAuth, async (req, res) => {
  const reviewId = req.params.reviewId;
  const review = await Review.findByPk(reviewId);

  let allReviews = await Image.findAll({ where: { imageableType: "Review" } });

  if (allReviews.length > 10) {
    res.status(400);
    res.json({
      message: "Maximum number of images for this resource was reached",
      statusCode: 400,
    });
  }
  if (!review) {
    res.status(400);
    res.json({
      message: "Review couldn't be found",
      statusCode: 404,
    });
  }
  if (review.userId !== req.user.id) {
    res.json({
      message: "Forbidden",
      statusCode: 403,
    });
  }

  let { url } = req.body;
  const newImg = await Image.create({
    url,
    imageableId: review.userId,
    imageableType: "Review",
  });

  res.json(newImg);
});

//delete an image
router.delete("/:id", requireAuth, async (req, res) => {
  const images = await Image.findByPk(req.params.id);

  if (!images) {
    res.status(404);
    res.json({
      message: "Image couldn't be found",
      statusCode: 404,
    });
  }
  if (images.imageableId !== req.user.id) {
    res.status(403);
    res.json({
      message: "Forbidden",
      statusCode: 403,
    });
  }

  images.destroy();
  images.save();

  res.json({
    message: "Successfully deleted",
    statusCode: 200,
  });
});

module.exports = router;
