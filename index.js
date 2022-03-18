// npm i express
const express = require('express');
// npm i faker@5.5.3 -S
const faker = require('faker');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola server en express');
});

app.get('/saludo', (req, res) => {
    res.send('Hola server en express');
});

// Traer todod los products
app.get('/products', (req, res) => {
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

// para traer uno solo
app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id: id,
        name : 'product 2',
        state: 2,
        price: 2000
    });
});

// Enviar parámetros opcionales
// Ejemplo ruta http://localhost:3000/users?limit=23&offset=si
app.get('/users', (req, res) => {
    const { limit, offset } = req.query;
    if(limit && limit){
        res.json({
            limit, offset
        });
    }else{
        res.send('No hay parámetros');
    }
});

app.listen(port , () => {
    console.log('Mi port' + port);
})