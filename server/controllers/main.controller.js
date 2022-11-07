'use strict';
const packageSchema = require("../models/packages");
const { errorHttpHelper } = require("../helpers/errorHelper");
const emailer = require("../config/emailer");

class MainController {
    index(_req, res) {
        res.render("calculator_boxes");
    }

    getBox(_req, res) {
        packageSchema
            .find()
            .then((data)=> res.json(data))
            .catch((error)=> res.json({message: `Error ${error}`}));
    }

    getBoxId(req, res) {
        const { id } = req.params;
        boxes
            .findById(id)
            .then((data)=> res.json(data))
            .catch((error)=> res.json({message: `Error ${error}`}));
    }

    createBox(req, res) {
        try {
            const { type_box, alto, largo, ancho } =  req.body;
            let type_box_value;
            switch (type_box) {
                case '26_ects_C': 
                    type_box_value = 16.41;
                break;
                case '32_ects_C': 
                    type_box_value= 19.11;
                break;
                case '36_ects_BC': 
                    type_box_value= 23.54;
                break;
                case '48_ects_BC': 
                    type_box_value= 28.18;
                break;
                case '61_ects_BC': 
                    type_box_value= 34.88;
                break;
            }
    
            const boxes =  {
                type_box, 
                type_box_value,
                alto, 
                largo,
                ancho,
                costo_unitario_con_iva: priceWithIVA(type_box_value, parseFloat(alto), parseFloat(largo), parseFloat(ancho)),
                costo_unitario_sin_iva: priceWithoutIVA(type_box_value, parseFloat(alto), parseFloat(largo), parseFloat(ancho)),
                area: squareArea(parseFloat(alto), parseFloat(largo), parseFloat(ancho)),
                peso_volumetrico: volumetricWeight(parseFloat(alto), parseFloat(largo), parseFloat(ancho)),
                largo_pliego_cm: lengthTotalSheetCentimeters(parseFloat(largo), parseFloat(ancho)),
                ancho_pliego_cm: widthTotalSheetCentimeters(parseFloat(ancho), parseFloat(alto)),
                largo_pliego_mm: lengthTotalSheetMilimeters(parseFloat(largo), parseFloat(ancho)),
                ancho_pliego_mm: widthTotalSheetMilimeters(parseFloat(ancho), parseFloat(alto)),
                minimo_fabricacion: miniManufacturing(type_box_value, parseFloat(alto), parseFloat(largo), parseFloat(ancho))
            }

            // const valores = await packageSchema.create(boxes)
            // emailer.sendMail(valores)
            res.status(201).send({ boxes })
        }

        catch(error){
            errorHttpHelper(res, 'Error al crear la cotizacion')
        }

        function lengthTotalSheetCentimeters(largo, ancho) {
            const largo_total_pliego = ((largo * 2)+(ancho * 2)+ 6)
            return largo_total_pliego
        }
        
        function lengthTotalSheetMilimeters(largo, ancho) {
                const largo1_extra = 5
                const largo2_extra = 3
                const largo_ceja = 35
                const largo1_pliego = ((largo * 10) +  largo1_extra)
                const largo2_pliego = ((ancho * 10) + largo2_extra)
                const length_total_sheet_milimeters = ((largo1_pliego * 2 ) + (largo2_pliego * 2)) + largo_ceja
                if ( length_total_sheet_milimeters > 2900 ) {
                    return res.status(400).send({ error:"El largo del pliego debe de ser menor" });
                }else if (length_total_sheet_milimeters < 900 ) {
                    return res.status(400).send({ error:"El largo del pliego debe de ser mayor" });
                }else{
                    const data_length_total_sheet_milimeters = {
                        largo1_pliego,
                        largo2_pliego,
                        largo1_extra,
                        largo2_extra,
                        largo_ceja,
                        length_total_sheet_milimeters
                    }
                    return data_length_total_sheet_milimeters
                }
        }
        
        function widthTotalSheetMilimeters(ancho, alto) {
            const ancho1_pliego = ((alto * 10) +  9)
            const ancho2_pliego = ((ancho * 5) + 4)
            const width_total_sheet_milimeters = ancho1_pliego + (ancho2_pliego * 2)
            if ( width_total_sheet_milimeters > 1400 ) {
                return res.status(400).send({ error:"El ancho del pliego debe de ser menor" });

            }else if ( width_total_sheet_milimeters < 400 ) {
                return res.status(400).send({ error:"El ancho del pliego debe de ser mayor" });

            }else{
                const data_length_total_sheet_milimeters = {
                    ancho1_pliego,
                    ancho2_pliego,
                    width_total_sheet_milimeters
                }
                return data_length_total_sheet_milimeters
            }
        }
        
        function widthTotalSheetCentimeters(ancho, alto) {
            const ancho_total_pliego = ancho + alto + 3
            return ancho_total_pliego
        }
        
        function priceWithIVA(type_box_value, alto, largo, ancho) {
            var price_with_iva = ((((((largo * 10)* 2) + 10) + (((((ancho*10)*2)+6))+35)) * (((((alto*10)+9)+((alto*10)+8))/1000000) * type_box_value)) * 1.16);
            return price_with_iva.toFixed(2)
        }
        
        function priceWithoutIVA(type_box_value, alto, largo, ancho) {
            var price_without_iva = (((((largo * 10)* 2) + 10) + (((((ancho*10)*2)+6))+35)) * (((((alto*10)+9)+((alto*10)+8))/1000000) * type_box_value));
            return price_without_iva.toFixed(2)
        }
        
        function squareArea(alto, largo, ancho) {
            var square_area =(((((largo * 10)* 2) + 10) + (((((ancho*10)*2)+6))+35)) * ((((alto*10)+9)+((alto*10)+8)))/1000000);
            return square_area
        }
        
        function volumetricWeight(alto, largo, ancho) {
            var volumetric_weight = (largo * ancho * alto)/ 5000;
            return `${parseInt(volumetric_weight)}`
        }

        function miniManufacturing(type_box_value, alto, largo, ancho) {
            const area = squareArea(parseFloat(alto), parseFloat(largo), parseFloat(ancho)),
            margen = 0.20,
            costo_sin_iva =  priceWithoutIVA(type_box_value, parseFloat(alto), parseFloat(largo), parseFloat(ancho)),
            fabricacion_minimo_boxes = Math.ceil(1500 / area),
            fabricacion_minimo_boxes_menos_10_porciento = Math.ceil(fabricacion_minimo_boxes * 0.9),
            fabricacion_minimo_boxes_mas_10_porciento =  Math.ceil(fabricacion_minimo_boxes * 1.1),
            costo_total_sin_iva = (fabricacion_minimo_boxes * costo_sin_iva).toFixed(2),
            costo_total_con_iva = (costo_total_sin_iva * 1.16).toFixed(2),
            precio_total_con_iva = (costo_total_con_iva / (1 - margen)).toFixed(2),
            precio_total_con_iva_menos_10_porciento = precio_total_con_iva * 0.9,
            precio_total_con_iva_mas_10_porciento = precio_total_con_iva * 1.1,
            precio_unitario_con_iva = (precio_total_con_iva / fabricacion_minimo_boxes).toFixed(2)
        
            const data_minimum_manufacturing = {
                fabricacion_minimo_boxes,
                fabricacion_minimo_boxes_menos_10_porciento,
                fabricacion_minimo_boxes_mas_10_porciento,
                costo_total_sin_iva,
                costo_total_con_iva,
                precio_total_con_iva,
                precio_total_con_iva_menos_10_porciento,
                precio_total_con_iva_mas_10_porciento,
                precio_unitario_con_iva
            }
            return data_minimum_manufacturing
        }
    }

    async sendQuote(req, res) {
        try {
            const data =  req.body;
            const valores = await packageSchema.create(data)
            console.log(valores)
            emailer.sendMail(valores)
            res.status(201).send({ data })
        }
        catch(error) {
            console.log(error)
        }
    }

}

module.exports = new MainController();