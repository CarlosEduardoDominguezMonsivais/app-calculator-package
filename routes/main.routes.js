'use strict';
const router = require('express').Router();
const controllers = require('../controllers');
const { validateCreate } = require('../validators/boxes');
const prefix = '/';

router.get(
    `${prefix}`,
    controllers.main.index
)

router.post(
    `${prefix}`,
    validateCreate,
    controllers.main.createBox
);

router.get(
    `${prefix}quote`,
    controllers.main.confirmQuote
)

module.exports = router;