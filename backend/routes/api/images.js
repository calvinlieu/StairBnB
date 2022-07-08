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
const {Op, Sequelize} = require('sequelize')









module.exports = router