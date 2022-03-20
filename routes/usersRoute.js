// npm i express
const express = require('express');
// npm i faker@5.5.3 -S
const faker = require('faker');

const router = express.Router();


// Traer todos los usuarios
// Ejemplo ruta http://localhost:3000/users?limit=23&offset=si
router.get('/', (req, res) => {
    const { size } = req.query;
    const products = [];
    const limit = size || 10;
    for (let index = 0; index < limit; index++) {
        products.push(
            {
                name : faker.commerce.productName()
            }
        )
    }

    res.json(products);
});

router.get('/filter', (req, res) => {
    res.send('Este es un filtardo de usuarios');
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

module.exports = router;
