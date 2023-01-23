let m = Math; 
console.log(m);

//printing constants math objects
console.log("The value of Math.E is ", Math.E); //e euler's number
console.log("The value of Math.PI is ",Math.PI);
console.log("The value of Math.LN2 is ", Math.LN2);
console.log("The value of Math.SQRT1_2",Math.SQRT1_2);
console.log("The value of Math.LOG2E",Math.LOG2E);

let a = 34.64534;
let b = 89;

console.log("The value of a and b is ", a,b);

//Decimal to integer
console.log("The value of a and b rounded is", Math.round(a), Math.round(b));

console.log("3 power 2 is ",Math.pow(3,2));//pawer fuction


console.log("Square root of 36 is ",Math.sqrt(36));//square root

console.log("The rounded up value of 5.8 is",Math.ceil(5.8));
console.log("The rounded down value of 5.8 is",Math.floor(5.8));

//Absolute value function

console.log(Math.abs(5.66));
console.log(Math.abs(-5.6));

//trigonometric function

console.log(Math.sin(Math.PI/2));
console.log(Math.tan(Math.PI/4));
console.log(Math.cos(0));

//Min max functions 

console.log("Minimum value of 4,5,6 and 7 is ", Math.min(4,5,6,7));
console.log("Minimum value of 4,5,6 and 7 is ", Math.max(4,5,6,7));

// Generating a random number between 0-100
r=Math.random()*100;


//Random number between (a,b) = a+(b-a)*Math.random()
let a1 =10; 
let b1 =56;

let numbeta1b1 = a1+(b1-a1)*Math.random();
console.log("The random number number is ", r);
console.log(numbeta1b1);
