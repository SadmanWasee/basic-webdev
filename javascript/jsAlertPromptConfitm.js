//alert("This is a message"); // this is used to send alert message this does not have any return value

// let clname = prompt("What is your name ?", "Name");

// console.log(clname);

let deletePost = confirm("Do you really want to delete this post ?");//returns boolean value

console.log(deletePost);

if(deletePost)
{
    console.log("Your post has been deleted successfully!");
}
else{
    console.log("Your post has not been deleted!");
}

// let num = Math.floor(Math.random()*10);
// console.log(num);
// //num = 9;

// if(0<=num && num<=3)
// {
//     console.log("rock");
// }
// else if(4<=num && num<=6)
// {
//     console.log("paper");
// }
// else
// {
//     console.log("scissor");
// }