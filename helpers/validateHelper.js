const { validationResult } = require('express-validator');

const validateResults = (req, res, next) => {
    try {
        validationResult(req).throw()
        return next()
    }catch(errors) {
        const valores = req.body
        const validaciones = errors.array()
        res.status(403);
        res.send({validaciones})
        // res.render('calculator_boxes', {validaciones:validaciones, valores: valores})
    }
}

module.exports =  validateResults 