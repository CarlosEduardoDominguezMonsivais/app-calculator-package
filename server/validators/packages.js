const { check } = require('express-validator');
const  validateResults  = require('../helpers/validateHelper');

const validateCreatePackage = [
    check('type_box')
    .exists()
    .notEmpty()
    .withMessage('Tiene que seleccionar un tipo de caja'),
    check('alto')
    .exists()
    .notEmpty()
    .withMessage('El alto no puede estar vacio'),
    check('ancho')
    .exists()
    .notEmpty()
    .withMessage('El ancho no puede estar vacio'),
    check('largo')
    .exists()
    .notEmpty()
    .withMessage('El largo no puede estar vacio'),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
]

module.exports = { validateCreatePackage };

