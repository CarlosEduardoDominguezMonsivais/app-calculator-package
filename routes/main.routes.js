'use strict';
const router = require('express').Router();
const controllers = require('../controllers');
const { validateCreate } = require('../validators/boxes');
const prefix = '/';

router.get(
    `${prefix}box/create`,
    controllers.main.index
)

router.get(
    `${prefix}boxes/`,
    controllers.main.getBox
)

router.post(
    `${prefix}box/create`,
    validateCreate,
    controllers.main.createBox
);

router.get(
    `${prefix}box/:id`,
    controllers.main.getBoxId
)

module.exports = router;