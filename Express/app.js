//importing express module
const express = require("express");
//creating an express app
const app = express();

//We want to run our app on port 80 as it is used by default to run express app
const port = 80;

//Handle the get request at "/" end point and implement the call back function
app.get("/",(req,response)=>{
    response.send("This is my home page of my first app");
});

//Handle the get request at "/about" end point and implement the call back function
app.get("/about",(req,response)=>{
    response.send("This is my about page of my first app");
});

//Handle post request
app.post("/about",(req,response)=>{
    response.send("This is my about page of my first app");
});

//sending the status code
app.get("/this",(req,response)=>{
    response.status(404).send("This is page is not found");
});
//out app will listen for action from the port and seve accordingly 
app.listen(port, ()=>{
    console.log(`The application started successfully on ${port}`);
}); 