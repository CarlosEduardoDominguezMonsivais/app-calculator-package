const mongoose = require('mongoose');

// const countersSchema = mongoose.Schema({
//         _id : {
//             type: String,
//             default: "item_id"
//          },  
//         valor_secuencia: {
//             type: Number,
//             default: 0
//         }
//     })
// const Counters = mongoose.model('Counters', countersSchema);

// Counters.createCollection().then(function(collection) {
//   console.log('Collection is created!');
// });

const packageSchema = mongoose.Schema(
    {
        user: {
            name: {
                type: String,
                required: true
            },
            lastname: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            phone: {
                type: String,
                required: true
            },
            suburb: {
                type: String,
                required: true
            },
            street: {
                type: String,
                required: true
            },
            postal_code: {
                type: String,
                required: true
            }
        },

        quote: {
            date: {
                type: String,
                required: true 
            },
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
            alto_mm: {
                type: Number,
                required: true
            },
            largo_mm: {
                type: Number,
                required: true
            },
            ancho_mm: {
                type: Number,
                required: true
            },
            costo_unitario_con_iva: { 
                type: String,
                required: true
            },
            costo_unitario_sin_iva: { 
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
            },

            fabricacion: {
                type: Object,
                required: true
            }
        },

        // sku: {
        //     type: Number
        // }
    },
    {
        timestamps: true, //createAt, updateat
        versionKey: false
    }
)




module.exports = mongoose.model('Packages', packageSchema);

