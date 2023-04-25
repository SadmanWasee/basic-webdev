
const express = require("express");  //importing express module
const path = require('path');  //setting path
const app = express();  //creating an express app
const fs = require('fs');
const port = 80;  //We want to run our app on port 80 as it is used by default to run express app

//Express specific stuff
app.use('/static', express.static('static'))  // For serving static files '/static' - URL name and 'static' - folder name
app.use(express.urlencoded()) //To extract data from the website to app.js file 

//Pug specific stuff
app.set('view engine', 'pug');  //set the template engine as pug 
app.set('views', path.join(__dirname,'views'))  //set the views directory

//Endpoints
app.get('/', (req,res)=>{
    const con = "This is a beginner tutorial on pug"
    const params ={'title': 'This is pug tutorial', 'content':con}
    res.status(200).render('index.pug',params);
});

app.post('/', (req, res)=>{

    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    //rsmore = req.body.more

    let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('index.pug', params);
});

//Start server
app.listen(port, ()=>{
    console.log(`The application started successfully on ${port}`); 
}); 