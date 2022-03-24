// npm i express
const express = require('express');
const { redirect } = require('express/lib/response');
const productsService = require('./../services/productsService');

const router = express.Router();
const service = new productsService();



// Traer todod los products
router.get('/', async (req, res) => {
    res.status(200).json(await service.find());
});

router.get('/filter', (req, res) => {
    res.send('Este es un filtradod');
});

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        res.status(200).json(await service.findOne(id)); 
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res) => {
    const body  = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
});

// Se puede utilizar update para actualizar todos los campos y patch para autualizar una parte, esto es 
// según la convención Api rest
router.patch('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const body  = req.body;
        const product = await service.update(id, body);
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.status(200).json(rta);
});

module.exports = router;