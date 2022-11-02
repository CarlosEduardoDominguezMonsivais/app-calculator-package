const mongoose = require('mongoose');

const boxeSchema = mongoose.Schema(
    {
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
        largo_pliego_cm: {
            type: Number,
            required: false
        },
        ancho_pliego_cm: {
            type: Number,
            required: false
        },
        largo_pliego_mm: {
            type: Object,
            required: true,
            // validate: {
            //     validator: (req) => {
            //         if (req.length_total_sheet_milimeters < 10) {
                        
            //         }
            //     },
            //     message: 'El largo del pliego es incorrecto'
            // }
        },
        ancho_pliego_mm: {
            type: Object,
            required: true
            // validate: {
            //     validator: (req) => {
            //         console.log(req)
            //     },
            //     message: 'Error_ancho_pliego_mm',
            // },
        }
    },
    {
        timestamps: true, //createAt, updateat
        versionKey: false
    }
)

module.exports = mongoose.model('Boxes', boxeSchema);