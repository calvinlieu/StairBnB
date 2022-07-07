const express = require("express");
const {
  setTokenCookie,
  requireAuth,
  restoreUser,
} = require("../../utils/auth");
const { Image, Review, Spot, User } = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const router = express.Router();

//Get all reviews of the current user

router.get("/current-user-review", requireAuth, async (req, res) => {
  const review = await Review.findAll({
    where: { id: req.user.id },
      include: [
        { model: Spot },
        { model: Image, as: 'images', attributes: ['url'] },
        { model: User, attributes: ["id", "firstName", "lastName"] },
      ],
    },
  );
  
  if (!review) {
    res.status(404);
    res.json({ message: "Spot does not exist"})
  }

  res.json(review);
});

//Get all reviews by a Spot's id
router.get('/spots/:spotId', async (req, res) => {
  const spotId = req.params.spotId;

  let currentSpot = await Spot.findByPk(spotId);

  if (!currentSpot) {
    return res.status(404).json({
      "message": "Spot could not be found",
      "statusCode": 404
    });
  }

  let reviews = await Review.findAll({
    where: {
      spotId: spotId,
    }
  });

  return res.json(reviews);
});

//Create a Review for a Spot based on the Spot's id

router.post('/:spotId/create', requireAuth, async (req, res) => {
  const spotId = req.params.spotId;
  const id = req.user.id;
  const { review, stars } = req.body;

  const currentSpot = await Spot.findOne({
    where: { id: spotId}
  });

  if (!currentSpot) {
    res.status(404);
    res.json({
      "message": "Spot couldn't be found",
      "statusCode": 404
    })
  }

  if (stars < 1 || stars > 5) {
    res.status(400);
    res.json({
      "message": "Validation error",
      "statusCode": 400,
      "errors": {
        "review": "Review text is required",
        "stars": "Stars must be an integer from 1 to 5",
      }
    })
  }
  if (review.length < 5) {
    res.status(400);
    res.json({
      "message": "Validation error",
      "statusCode": 400,
      "errors": {
        "review": "Review text is required",
        "stars": "Stars must be an integer from 1 to 5",
      }
    })
  }
  const currentUser = await Review.findOne({
    where: { userId: id, spotId: spotId }
  })

  if(currentUser) {
    res.status(403);
    res.json({
      "message": "User already has a review for this spot",
      "statusCode": 403
    })
  }

  const newReview = await Review.create({
    userId: id,
    spotId: spotId,
    review,
    stars,
  })

  res.json(newReview)
})

//edit a review
router.put('/reviewId', requireAuth, async(req, res) => {
  const params = req.body;
  const id = req.user.id;
  const reviewId = req.params.reviewId;

  const currentReview = await Review.findByPk(reviewId);

  if (currentReview.userId !== id ) {
    res.status(403);
    res.json({
      "message": "Authorization Error"
    })
  }

  if (stars < 1 || stars > 5) {
    res.status(400);
    res.json({
      "message": "Validation error",
      "statusCode": 400,
      "errors": {
        "review": "Review text is required",
        "stars": "Stars must be an integer from 1 to 5",
      }
    })
  }

  if (review.length < 5) {
    res.status(400);
    res.json({
      "message": "Validation error",
      "statusCode": 400,
      "errors": {
        "review": "Review text is required",
        "stars": "Stars must be an integer from 1 to 5",
      }
    })
  }
  review = await Review.update(params, {
    where: {
      id: reviewId
    }
  });
  review = await Review.findByPk(reviewId);

  res.json(review)

})


module.exports = router;
