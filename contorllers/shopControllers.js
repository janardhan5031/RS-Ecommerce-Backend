const product = require('../models/product');

exports.getProducts = (req,res,next) =>{
    product.findAll({offset:0 ,limit:2})
    .then(products =>{
        //products.forEach(product => console.log(product));
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
    const page = parseInt(req.query.page);
    //console.log(page);
    const numEle = 2;
    const begin = (page-1) * numEle;
    console.log(begin);

    let length;
    product.findAll()
    .then((products)=> {
        length = products.length;
        console.log(length);
    })
    .catch(err => console.log(err));
    //console.log(length);

    product.findAll({offset: begin, limit: numEle})
    .then(products => res.send({products:products,length:length}))
    .catch(err => console.log(err));
}
