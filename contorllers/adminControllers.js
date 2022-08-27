
const product= require('../models/product');    // importing  the product table in database

exports.getaddProduct = (req,res,next ) =>{
    res.render('add to products',{
        editing:false
    });
}

exports.postaddProduct = (req,res,next) =>{
    const title=req.body.title;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;

    product.create({
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
    product.findByPk(prodId).then((product) => {
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
    product.update({
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
    product.destroy({
        where:{id:prodId}
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
}