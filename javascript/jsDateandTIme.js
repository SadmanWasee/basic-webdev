console.log("This is date and time tutorial");

let now = new Date();

console.log(now);

let past = new Date(0);

console.log(past); //Reference date from which the calculation of time spent is calculated. 

let newDate = new Date("2029-09-30");
console.log(newDate);

let anotherdate = new Date(3020, 3, 6, 9, 30,35,34);

console.log(anotherdate);

let yr = anotherdate.getFullYear();

let dt = anotherdate.getDate();

let mt = anotherdate.getMonth();

console.log(yr);
console.log(dt);
console.log(mt);

anotherdate.setDate(15);
console.log(anotherdate);

//A simple program to print latest time in webpage. 
setInterval(updatetime,1000);

function updatetime(){
    let now = new Date();

    let time = now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();

    let showtime = document.getElementById('time');
    //showtime.innerHTML = time;

    showtime.innerHTML = new Date();

    //return time; 
}