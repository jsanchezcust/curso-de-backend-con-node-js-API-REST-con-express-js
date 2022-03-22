// npm i faker@5.5.3 -S
const faker = require('faker');

class productsService {
    constructor() {
        this.products = [];
        this.generate();
    }

    generate() {
        for (let index = 0; index < 100; index++) {
            this.products.push(
                {
                    id : faker.datatype.uuid(),
                    name : faker.commerce.productName(),
                    state: parseInt(faker.commerce.price(), 10),
                    imgURL: faker.image.imageUrl()
                }
            )
        }
    }

    find(){
        return this.products;
    }

    findOne(id) {
        return this.products.find(item => item.id === id)? this.products.find(item => item.id === id): 'No Encontrado';
    }

    create() {

    }

    update() {

    }

    delete() {

    }
}

module.exports = productsService;