const http = require('http')
const fs = require('fs')
const fileContent = fs.readFileSync("./html/jsRPS.html")

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type':'text/html'}); //In the header write our content which will have html content
    res.end(fileContent);
})


server.listen(80, '127.0.0.1', ()=>{ //We used port 80 as it connects the default url
    console.log("Listening to the port 80"); 
})