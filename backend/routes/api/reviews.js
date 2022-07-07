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

  res.json(review);
});

module.exports = router;
