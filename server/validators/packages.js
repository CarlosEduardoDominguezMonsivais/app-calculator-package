const { check } = require('express-validator');
const  validateResults  = require('../helpers/validateHelper');

const validateCreatePackage = [
    // check('largo_pliego_mm.length_total_sheet_milimeters')
    // .custom(value => {
    //     if( value > 2900) {
    //         throw new Error('El largo del pliego debe de ser menor');
    //     } else if( value < 900) {
    //         throw new Error('El largo del pliego debe de ser mayor');
    //     }
    //     else {
    //         return value;
    //     }
    // }),
    // check('ancho_pliego_mm.width_total_sheet_milimeters')
    // .custom(value => {
    //     if( value > 1400) {
    //         throw new Error('El ancho del pliego debe de ser menor');
    //     } else if( value < 400) {
    //         throw new Error('El ancho del pliego debe de ser mayor');
    //     }
    //     else {
    //         return value;
    //     }
    // }),
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

