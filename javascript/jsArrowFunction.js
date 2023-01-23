//Normal way to define a fuction:

function greet()
{
    console.log('Hello World');
}

greet();

//An arrow fuctions which is relaively short

let greetings = ()=>{
    console.log('Good morning world');
}

greetings();

setTimeout(()=>{
    console.log('We are in set time out!');
},3000);

//Shortening an arrowfuction

//long form
let sum = (a,b)=>{
    return a+b;
}

//Short form
let sum2 = (a,b) =>a+b;

let half = a =>a/2; //If there is 1 argument only we can write this

//Short greet() fuction

let sgreet = () => console.log('Shoter greet');

sgreet();

//Actual example of why Arrow(=>) function is useful for us 
//We can point to the variable of outer object using this funciton. 

//lexical this: if we use arrow fuction with this inside the function, then it will point to the parent 
let obj1 ={
    greeting: "Good Morning",
    names: ["Jack","Shane","Janet","Rose"],
    speak(){
        this.names.forEach((student)=>{
            console.log(this.greeting+" "+student);//Here this.greetings point to the greeting variable of obj1 
        });

    }

}

obj1.speak();

let obj2 ={
    greeting:"Hello",
    names: ["Jack","Shane","Janet","Rose"],
    speak(){
        this.names.forEach(function (studnet){
            console.log(this.greeting+" "+studnet);//This will return undefined as it will try to find greetings inside the scope of function
        });
    }
}

obj2.speak();