//importing express module
const express = require("express");
//creating an express app
const app = express();

//port 80 is used by default
const port = 80;

//Whenever client gets / implement the call back function
app.get("/",(req,response)=>{
    response.send("This is my home page first app")
});

app.listen(port, ()=>{
    console.log(`The application started successfully on ${port}`)
}); 