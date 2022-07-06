const express = require('express');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Booking, Review, Image, Spot } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

