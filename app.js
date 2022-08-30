const path = require('path');       // importing path module
const express= require('express');  //importing the express module 

const cors = require('cors');       //impoting corse module 

const database = require('./utility/database');    // impoting database

const product = require('./models/product');    // importing products table
const cart = require('./models/cart');    // importing cart table
const cartItem = require('./models/cart-items');    // importing cart table
const User = require('./models/user');    // importing cart table

const body_parser=require('body-parser');   //importing body-parser module for extracting data form req body

const app=express();    // creating app by invoking the express module 

app.use(cors());      // cors connect backend to frontend
app.set('view engine', 'ejs');      // setting ejs engine 
app.set('views','views');           // setting the path for ejs to get ejs files

app.use(body_parser.urlencoded({extended:false}));  // extract data from requsts in url formate
//app.use(body_parser.json());  // extract data from requsts in json formate

app.use(express.static(path.join(__dirname,'public')))  //express looks css and js files for ejs at this path

app.use((req,res,next) => {
    User.findByPk(1)
    .then(user =>{
        req.user = user;    // from here we are defining our own method in every requests
        next();
    })
    .catch(err => console.log(err));
})

const shopRouters = require('./routes/shop');
const adminRouters = require('./routes/admin');
const cartRouters = require(('./routes/cart'));
const errorRouter = require('./contorllers/errorController');

//from here we have app for all req and res's 
app.use(shopRouters);
app.use(adminRouters);
app.use(cartRouters);
app.use(errorRouter.get404);

// creating associations (or) relations b/w tables in database
product.belongsTo(User,{constraints:true, onDelete:'CASCADE'});
User.hasMany(product);
User.hasOne(cart);
cart.belongsTo(User);
cart.belongsToMany(product, { through: cartItem});
product.belongsToMany(cart,{ through:cartItem});


database
.sync()
//.sync({force:true})
.then(result =>{
    return User.findByPk(1);
    //app.listen(3000);   //listening all req and res at port 3000
})
.then(user => {
    if(!user){
       return User.create({name:'jani', email:'jani@1323gmail.com'})
    }
    return user;
})
.then(user =>{
    return user.createCart();
})
.then(cart => {
    app.listen(3000);
})
.catch(err => console.log(err));