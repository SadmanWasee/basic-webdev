
//premitive data type
let myvar = 34;
let myvar1 = "string";
let myvar2 = true;
let myvar3 = null; 
let myvar4 = undefined; 

//object reference data type

let employee = {
    name: "sadman",
    salary: 100000, 
    
}
console.log(employee);

//array
//let names = [1,2,3, "harry",undefined];
let names = new Array(1,2,3, "harry",undefined);
let names2 = new Array(3,4,5, "Naseem");
let concatname = names.concat(names2);
names = names.sort();
names.push("this is pushed");
console.log(names);
console.log(names.pop());
console.log(concatname);
//console.log(names[1]);

//creating an array with new keyword 

// let names = new Array(23);
// console.log(names.length);
// names = names.sort();
// names.push("this is pushed");
// console.log(names);

//2D array 

