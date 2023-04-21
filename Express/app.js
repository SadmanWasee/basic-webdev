
const express = require("express");  //importing express module
const path = require('path');  //setting path
const app = express();  //creating an express app
const port = 80;  //We want to run our app on port 80 as it is used by default to run express app

//Express specific stuff
app.use('/static', express.static('static'))  // For serving static files '/static' - URL name and 'static' - folder name

//Pug specific stuff
app.set('view engine', 'pug');  //set the template engine as pug 
app.set('views', path.join(__dirname,'views'))  //set the views directory

//Endpoints
app.get('/', (req,res)=>{
    const con = "This is a beginner tutorial on pug"
    const params ={'title': 'This is pug tutorial', 'content':con}
    res.status(200).render('index.pug',params);
});

//Start server
app.listen(port, ()=>{
    console.log(`The application started successfully on ${port}`); 
}); 