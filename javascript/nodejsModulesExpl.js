//Built in modules - prewritten code that we can reuse. 

//Built in module for reading the file 
const fs = require("fs"); 
let text = fs.readFileSync("./javascript/text.txt", "utf-8");
console.log("The content of the file is : ");
console.log(text);

//Replacing the text and putting it in a new text file. 
text =  text.replace("Hello", "Hi");
fs.writeFileSync("hi.txt", text);

//We can use bult in modules we can build our own moudles or we can even use third party modules that others have already built