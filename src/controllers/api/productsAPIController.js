const db = require('../../database/models');

const productsAPIController = {
    'list': async function(req, res){

        let products = await db.Product.findAll({order:[['id', 'ASC']]});

        let response = {
            meta: {
                status : 200,
                count: products.length,
                url: 'api/products',
            },
                
            data: products.map(product => {
                return { 
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: `/images/products/${product.image}`,
                    discount: product.discount,
                    stock: product.stock
                }
            })
        }
        
        res.json(response);
    }
}

module.exports = productsAPIController;