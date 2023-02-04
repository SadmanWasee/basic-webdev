console.log("this is functions tutorial");

function greet(name,greettext = "Good morning "){
    console.log(greettext + name);
}

let hello = "Hello "
let name1 = "Sadman Wasee";
greet(name1,hello);
greet(name1);

//fuction with return value

function sum(a,b,c)
{
    let d = a + b + c; 
    return d;
}

let n = sum(1,1,1);
console.log("The sum of 1+1+1 is" + n);

//Immediately invokable fuction IIFE

(function displayMessage(message){
    console.log(message);
})('The display message function is invoked');