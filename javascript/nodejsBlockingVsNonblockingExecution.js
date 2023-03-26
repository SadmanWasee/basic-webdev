//Synchronous or blocking :- Line by line execution 


//Asynchronous or non-blocking :- Line by line execution not gauranteed , Call backs will fire
const fs = require("fs"); 
//read file expectes a call back function
//If we run this code then we will see "This is a mesage appear at first" because that message already got printed while the file was being read. And the call back function runs only after the file has been completely read. So it will seem as if our code did not execute line by line

fs.readFile("./javascript/text.txt", "utf-8",(err, data)=>{
    console.log(err,data);//When reading is done only then I will fire this function
});
console.log("This is a message");

//Risky to mix blocking with non blocking 