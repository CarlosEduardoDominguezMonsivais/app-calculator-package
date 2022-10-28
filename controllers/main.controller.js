'use strict';
const boxesSchema = require("../models/boxes");
const emailer = require("../config/emailer");

class MainController {
    index(_req, res) {
        res.render("calculator_boxes");
    }

    getBox(_req, res) {
        boxesSchema
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
        const { type_box, alto, largo, ancho } =  req.body;
        console.log( type_box, alto, largo, ancho)
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

        const boxes =  boxesSchema({
            type_box, 
            type_box_value,
            alto, 
            largo,
            ancho,
            precio_con_iva: priceWithIVA(type_box_value, parseFloat(alto), parseFloat(largo), parseFloat(ancho)),
            precio_sin_iva: priceWithoutIVA(type_box_value, parseFloat(alto), parseFloat(largo), parseFloat(ancho)),
            area: squareArea(parseFloat(alto), parseFloat(largo), parseFloat(ancho)),
            peso_volumetrico: volumetricWeight(parseFloat(alto), parseFloat(largo), parseFloat(ancho))
        })
        
        boxes
            .save()
            .then((data)=> {
                emailer.sendMail(data)
                res.render('calculator_boxes', { valores: data })
            })
            .catch((error)=> res.json({message: `Error ${error}`}));
    }
}


function priceWithIVA(type_box_value, alto, largo, ancho) {
    var price_with_iva = ((((((largo * 10)* 2) + 10) + (((((ancho*10)*2)+6))+35)) * (((((alto*10)+9)+((alto*10)+8))/1000000) * type_box_value)) * 1.16);
    return `$ ${price_with_iva.toFixed(2)}`
}

function priceWithoutIVA(type_box_value, alto, largo, ancho) {
    var price_without_iva = (((((largo * 10)* 2) + 10) + (((((ancho*10)*2)+6))+35)) * (((((alto*10)+9)+((alto*10)+8))/1000000) * type_box_value));
    return `$ ${price_without_iva.toFixed(2)}`
}

function squareArea(alto, largo, ancho) {
    var square_area =(((((largo * 10)* 2) + 10) + (((((ancho*10)*2)+6))+35)) * ((((alto*10)+9)+((alto*10)+8)))/1000000);
    return `${square_area} m2`
}

function volumetricWeight(alto, largo, ancho) {
    var volumetric_weight = (largo * ancho * alto)/ 5000;
    return `${parseInt(volumetric_weight)}`
}

module.exports = new MainController();