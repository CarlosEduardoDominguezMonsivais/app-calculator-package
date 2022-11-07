'use strict';
const router = require('express').Router();
const controllers = require('../controllers');
const { validateCreatePackage } = require('../validators/packages');
const prefix = '/';

router.get(
    `${prefix}`,
    controllers.main.index
)

router.post(
    `${prefix}`,
    validateCreatePackage,
    controllers.main.createBox
);

router.post(
    `${prefix}send`,
    controllers.main.sendQuote
)

module.exports = router;