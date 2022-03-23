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
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                resolve(this.products);
            }, 5000);
        });
    }

    findOne(id) {
        const name = this.getName();
        return this.products.find(item => item.id === id)? this.products.find(item => item.id === id): 'No Encontrado';
    }

    async create(data) {
        const newProduct = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.products.push(newProduct);
        return newProduct;
    }

    async update(id, changes) {
        const index = this.products.findIndex(item => item.id === id);
        if(index === -1){
            throw new Error('Product not found');
        }
        const product = this.products[index];
        this.products[index] = {
            ...product,
            ...changes
        };
        return this.products[index];
    }

    async delete(id) {
        const index = this.products.findIndex(item => item.id === id);
        if(index === -1){
            throw new Error('Product not found');
        }
        this.products.splice(index, 1);
        return {id}
    }
}

module.exports = productsService;