const Product = require('../models/product');
const cart = require('../models/cart');

exports.getCartItems = (req,res,next) => {
    req.user
    .getCart()
    .then((cart) => {
        return cart.getProducts();
    })
    .then(products => {
        res.render('cart',{
            pageTitle:'cart',
            prods: products
        })
    })
    .catch(err => console.log(err));
};
exports.getCartItemsOut = (req,res,next) => {
    req.user
    .getCart()
    .then((cart) => {
        return cart.getProducts();
    })
    .then(products => {
        res.send(products);
    })
    .catch(err => console.log(err));
};

exports.postItemToCart = (req,res,next) => {
    const prodId = req.body.productId;
    let fetchedCart;
    let newQunatity = 1;

    req.user
    .getCart()
    .then(cart => {
        fetchedCart=cart;
        return cart.getProducts({where:{id:prodId}});
    })
    .then(products =>{
        let product;
        if(products.length>0){
            product = products[0];
        }
        if(product){
            // if product is already present in cart then increment quantity
            newQunatity += product.cartItem.quantity
            return product;
        }
        return Product.findByPk(prodId);    
        //if there is no products in cart which maches prodId return the product which matches productId from products table
    })
    .then(product =>{
        return fetchedCart.addProduct(product,{
            through: {quantity: newQunatity}
        })
    })
    .then(() => {
        res.redirect('/cart');
    })
    .catch(err => console.log(err));

}
exports.postItemToCartOut = (req,res,next) => {
    const prodId = req.params.prodId;

    console.log(prodId)
    let fetchedCart;
    let newQunatity = 1;

    req.user
    .getCart()
    .then(cart => {
        fetchedCart=cart;
        return cart.getProducts({where:{id:prodId}});
    })
    .then(products =>{
        let product;
        if(products.length>0){
            product = products[0];
        }
        if(product){
            // if product is already present in cart then increment quantity
            newQunatity += product.cartItem.quantity
            return product;
        }
        return Product.findByPk(prodId);    
        //if there is no products in cart which maches prodId return the product which matches productId from products table
    })
    .then(product =>{
        return fetchedCart.addProduct(product,{
            through: {quantity: newQunatity}
        })
    })
    .then(() => {
        res.redirect('/cart');
    })
    .catch(err => console.log(err));

}

exports.deleteItem = (req,res,next) =>{
    const prodId = req.body.productId;
    req.user.getCart()
    .then(cart => {
        return cart.getProducts({where:{id:prodId}})
    })
    .then(products =>{
        if(products.length>0){
            return products[0].cartItem.destroy();
        }
    })
    .then(()=>{
        res.redirect('/cart');
    })
    .catch(err => console.log(err));
}
exports.deleteItemOut = (req,res,next) =>{
    const prodId = req.body.id;
    console.log(prodId);
    req.user.getCart()
    .then(cart => {
        return cart.getProducts({where:{id:prodId}})
    })
    .then(products =>{
        if(products.length>0){
            return products[0].cartItem.destroy();
        }
    })
    .then((result)=>{
        res.send(result);
    })
    .catch(err => console.log(err));
}


