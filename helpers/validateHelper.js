const { validationResult } = require('express-validator');

const validateResult = (req, res, next) => {
    try {
        validationResult(req).throw()
        return next()
    }catch(errors) {
        const valores = req.body
        const validaciones = errors.array()
        res.render('calculator_boxes', {validaciones:validaciones, valores: valores})
    }
}

module.exports = { validateResult }