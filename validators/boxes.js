const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');

const validateCreate = [
    check('largo')
    .custom(value => {
        if( value === null || value === undefined || value === ''){
            throw new Error('El largo no puede estar vacio');
        }else if (value >= 90 && value <= 290) {
            return value;
        }else{
            throw new Error('El largo minimo es de 90 cm y el maximo es de 290 cm');
        }
      }),
    check('ancho')
    .custom(value => {
        if( value === null || value === undefined || value === ''){
            throw new Error('El ancho no puede estar vacio');
        }else if (value >= 40 && value <= 140) {
            return value;
        }else{
            throw new Error('El ancho minimo es de 40 cm y el maximo es de 140 cm');
        }
      }),
    check('type_box')
    .exists()
    .not()
    .withMessage('Tiene que seleccionar un tipo de caja'),
    check('alto')
    .exists()
    .not()
    .isEmpty()
    .withMessage('La altura no puede estar vacia'),
    (req, res, next) => {
        validateResult(req, res, next);
    }
]

module.exports = { validateCreate };

