//including http module to create a server and fs module to read files
const http = require('http');
const fs = require('fs'); 

//Defining the hostname and port name to create a server
const hostname = '127.0.0.1'; //'127.0.0.1' indicates local host
const port = 3000;

//Reading the contents of html files using the fs module
const home = fs.readFileSync('index.html');
const about = fs.readFileSync('about.html');
const contact = fs.readFileSync('contact.html');
const services = fs.readFileSync('services.html');


//Using the create server method to create a server
//The create server method has an argument which is a call back function that takes two arguments request and result.
//req represents the request made by the client and res represents the response of the server
const server = http.createServer((req,res)=>{

    //Requested URL is logged to the console 
    console.log(req.url); 

    //storing the url in a variable 
    url = req.url;

    //setting the status code to 200 which indicates the request was successful and the server is sending back response 
    res.statusCode = 200;
    //Setting the content type to text or html
    res.setHeader('Content-Type', 'text/html');
    
    //Depending on the URL requested by the client an appropriate html file is serverd or error404 is serverd
    if(url=='/')
    {
        res.end(home);
    }
    else if(url=='/about')
    {
        res.end(about);
    }
    else if(url=='/contact')
    {
        res.end(contact);
    }
    else if(url=='/services')
    {
        res.end(services);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>Error 404</h1>");
        
    }
    

});

//Server is set to listen to the defined hostname and port for incoming actions and messege is logged to the conole indicating that the server is running
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});