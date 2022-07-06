const express = require('express');
const { setTokenCookie, requireAuth, restoreUser } = require("../../utils/auth");
const { Image, Review, Spot, User } = require('../../db/models');
const sequelize = require('sequelize')
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const router = express.Router();



