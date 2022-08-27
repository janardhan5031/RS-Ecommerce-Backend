const product = require('../models/product');

exports.getProducts = (req,res,next) =>{
    product.findAll()
    .then(products =>{
        products.forEach(product => console.log(product));
        res.render('shop',{
            pageTitle:'All Products',
            prods: products
        });
    })
    .catch(err => console.log(err));
};

exports.getSingleProduct = (req,res,next) => {
    const prodId = req.params.prodId;
    product.findByPk(prodId)
    .then(product => res.send(product))
    .catch(err => console.log(err));
};

exports.getAllProducts = (req,res,next) =>{
    product.findAll()
    .then(products => res.send(products))
    .catch(err => console.log(err));
}
