// npm i express
const express = require('express');
// npm i faker@5.5.3 -S
const faker = require('faker');

const router = express.Router();


// Traer todod los products
router.get('/', (req, res) => {
    const { size } = req.query;
    const products = [];
    const limit = size || 10;
    for (let index = 0; index < limit; index++) {
        products.push(
            {
                name : faker.commerce.productName(),
                state: parseInt(faker.commerce.price(), 10),
                price: faker.image.imageUrl()
            }
        )
    }

    res.json(products);
});

router.get('/filter', (req, res) => {
    res.send('Este es un filtradod');
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id   : id,
        name : 'Juan',
        state: 'activo',
        price: 12
    });
});

router.post('/', (req, res) => {
    const body  = req.body;
    res.json({
        message: 'created',
        data: body
    });
});

module.exports = router;