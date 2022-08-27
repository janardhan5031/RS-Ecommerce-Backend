const path = require('path');       // importing path module
const express= require('express');  //importing the express module 

const cors = require('cors');       //impoting corse module 

const database = require('./utility/database');

const body_parser=require('body-parser');   //importing body-parser module for extracting data form req body

const app=express();    // creating app by invoking the express module 

app.use(cors());      // cors connect backend to frontend
app.set('view engine', 'ejs');      // setting ejs engine 
app.set('views','views');           // setting the path for ejs to get ejs files

app.use(body_parser.urlencoded({extended:false}));  //applying body parser for all incoming requests through middleware
app.use(express.static(path.join(__dirname,'public')))  //express looks css and js files for ejs at this path

const shopRouters = require('./routes/shop');
const adminRouters = require('./routes/admin');
const errorRouter = require('./contorllers/errorController');
//from here we have app for all req and res's 
app.use(shopRouters);
app.use(adminRouters);
app.use(errorRouter.get404);

database.sync()
.then(result =>{
    app.listen(3000);   //listening all req and res at port 3000
})
.catch(err => console.log(err));