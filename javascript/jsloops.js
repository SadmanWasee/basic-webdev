//iterating through an array 

let friends = ["Jack", "John", "Janet"];

friends.forEach(function(element){
    console.log("Hello Friend, "+element);

})

for(element of friends)
{
    console.log("Hello friend, "+element+ " once again");
}

//iterating through an object

let employee = {
    name : "Harry",
    Age : "22",
    Salary: 100000
}

for(key in employee)
{
    console.log(`The ${key} of employee is ${employee[key]}`);
}