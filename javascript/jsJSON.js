let jsonObj = {
    name : "Wasee",
    age : "Twenty Three",
    university: "North South University", 
    Department : "ECE"
}

console.log(jsonObj);
myJsonStr = JSON.stringify(jsonObj);
console.log(myJsonStr);

myJsonStr = myJsonStr.replace('Wasee', 'Larry');
console.log(myJsonStr);

newJsonObj = JSON.parse(myJsonStr);
console.log(newJsonObj);