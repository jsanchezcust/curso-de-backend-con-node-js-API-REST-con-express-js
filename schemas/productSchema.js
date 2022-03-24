// npm i joi 
const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(35);
const price = Joi.number().integer().min(10);
const imgURL = Joi.string().uri();

const createProductSchema =Joi.object({
    name: name.required(),
    price:price.required(),
    imgURL:imgURL.required()
});

const updateProductSchema = Joi.object({
    name: name,
    price: price,
    imgURL:imgURL
});

const getProductSchema = Joi.object({
    id: id.required()
});

module.exports = {createProductSchema, updateProductSchema, getProductSchema}