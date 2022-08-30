
const Product= require('../models/product');    // importing  the product table in database

exports.getaddProduct = (req,res,next ) =>{
    res.render('add to products',{
        editing:false
    });
}

exports.postaddProduct = (req,res,next) =>{
    const title=req.body.title;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;

    req.user
    .createProduct({
       title:title,
       price:price,
       imageUrl:imageUrl
    })
    .then(result=>{
        res.redirect('/')
    }).catch(err => console.log(err));
};

exports.getEditProduct = (req,res,next) =>{
    const EditMode = req.query.edit;
    if(!EditMode){
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    Product.findByPk(prodId).then((product) => {
        if(!product){ return res.redirect('/')}
        res.render('add to products',{
            prod:product,
            editing:EditMode,
            pageTitle: 'Edit product'
        })  
    })
    .catch(err => console.log(err));
};

exports.postEditProduct = (req,res,next) => {
    const prodId = req.body.productId;
    const title = req.body.title;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    Product.update({
        title:title,
        price:price,
        imageUrl:imageUrl,
    },{
        where:{id:prodId}
    })
    .then(() => {res.redirect('/')})
    .catch(err => console.log(err));
};

exports.deleteProduct =(req,res,next) =>{
    const prodId = req.body.productId;
    Product.destroy({
        where:{id:prodId}
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
}