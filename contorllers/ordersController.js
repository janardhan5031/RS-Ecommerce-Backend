const Orders = require('../models/orders');

exports.orderNow = (req,res,next) => {

    let fetechedProducts;
    let new_order_id;

    req.user.getCart()
    .then(cart =>{
        return cart.getProducts();
    })
    .then(products =>{
        //console.log(products);
        if(products.length>0){
            fetechedProducts = products;
            req.user.createOrder()
            .then(order =>{
                //console.log(order.id);
                new_order_id = order.id;
                order.addProducts(fetechedProducts);
            })
            .then(result =>{
                res.send({orderId:new_order_id});
            })
            .catch(err => console.log(err));
        }else{
            res.status(201).send();
        }
        
    })
    .catch(err => console.log(err));
}

exports.orderNowResponse = (req,res,next) =>{
    req.user.getOrders()
    .then(order =>{
        return order[0].getProducts({where:{id:24}})
    })
    .then(products =>{
        res.send(products)
    })
    .catch(err => console.log(err));
}

// order now path controller   
 /*
exports.orderNow = (req,res,next) => {
    try{
        let fetched_order;
        let fetchedCart;
        // getting the user order tabel
        req.user.getOrder()
        .then(order =>{
            fetched_order = order;
        })
        .catch(err => console.log(err));
        
        // getting the all products from user's cart table 
        //and post their ids in order table
        req.user.getCart()
        .then(cart =>{
            fetchedCart = cart;
            return cart.getProducts();
        })
        .then(products =>{
            if(products.length>0){
                products.forEach(product =>{
                    fetched_order.addProduct(product,{
                        through:{quantity:1}
                    });
                    product.cartItem.destroy();
                });

                // sending the posted data in order table to frontend in responce
                req.user.getOrder()
                .then( orders =>{
                    return orders.getProducts()
                })
                .then(products => {
                    res.send(products);
                })
                .catch(err => console.log(err));
            }
            else{
                res.status(202).send();
            }
            
        })
        .catch(err => console.log(err));

        
        
    }catch(err){
        console.log(err)
    }
}

exports.orderNowResponce = (req,res,next) =>{
    req.user.getOrder()
    .then( orders =>{
        return orders.getProducts()
    })
    .then(products => {
        res.send(products);
    })
    .catch(err => console.log(err));
}
*/
