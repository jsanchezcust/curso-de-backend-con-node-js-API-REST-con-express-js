// npm i express
const express = require('express');
const productsService = require('./../services/productsService');

const router = express.Router();
const service = new productsService();



// Traer todod los products
router.get('/', (req, res) => {
    res.status(200).json(service.find());
});

router.get('/filter', (req, res) => {
    res.send('Este es un filtradod');
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    if(id === '999'){
        res.status(404).json({
            message: 'No found'
        });
    }else{
        res.status(200).json(service.findOne(id));
    }
});

router.post('/', (req, res) => {
    const body  = req.body;
    res.status(201).json({
        message: 'created',
        data: body
    });
});

// Se puede utilizar update para actualizar todos los campos y patch para autualizar una parte, esto es 
// según la convención Api rest
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body  = req.body;
    res.status(200).json({
        message: 'update',
        data: body,
        id
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        message: 'delete',
        id
    });
});

module.exports = router;