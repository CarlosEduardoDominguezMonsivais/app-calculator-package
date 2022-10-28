const mongoose = require('mongoose');

const boxesSchema = mongoose.Schema({
    type_box: {
        type: String,
        required: true 
    },
    type_box_value: {
        type: Number,
        required: true
    },
    largo: {
        type: Number,
        required: true
    },
    ancho: {
        type: Number,
        required: true
    },
    alto: {
        type: Number,
        required: true
    },
    precio_con_iva: { 
        type: String,
        required: true
    },
    precio_sin_iva: { 
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    peso_volumetrico: { 
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Boxes', boxesSchema);