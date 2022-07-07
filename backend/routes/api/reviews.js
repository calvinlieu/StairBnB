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

router.get("/user/:userId", requireAuth, async (req, res) => {
  const review = await User.findAll({
    where: { id: req.user.id },
    include: {
      model: Review,
      include: [{ model: Spot }, { model: Image }],
    },
  });

  res.json(review);
});
















module.exports = router;
