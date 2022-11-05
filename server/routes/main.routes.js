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

router.get(
    `${prefix}quote`,
    controllers.main.confirmQuote
)

module.exports = router;