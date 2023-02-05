//Downawards section is used to select the child class starting from a parent class. Everytime we use the "document." key word to select any class it searches from the entire document but if we select the parent class then we can use the "parentclass." keyword to go downwards and select its child classes as well.  

let studentslist = document.querySelector(".students-list");
let student1 = studentslist.querySelector(".student-1");
console.log(student1);

//Selecting parent / upward selection 

let student1up = document.querySelector("li"); 
let studentlistup = student1up.parentElement; 
console.log(studentlistup);

//Sideways selection 

let student1side = document.querySelectorAll("li")[2];
let student2 = student1side.previousElementSibling;
console.log(student2);
