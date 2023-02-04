function hide(){
    
    let btn = document.getElementById('btn');

    if(paragraph.style.display != 'none'){
        paragraph.style.display = 'none';
    }
    else{
        paragraph.style.display = 'block';
    }
    
}

let paragraph = document.getElementById('paragraph');
paragraph.addEventListener('mouseover',function run(){
    console.log("Mouse inside paragraph");
});
paragraph.addEventListener('mouseout',function run(){
    console.log('Mouse now went out');
})

//When we get an element by its tag name then we must give an index to indicate which specific element with that tag do we want to select 

//Here we changed the decoration of the first element with anchor tag 

let link = document.getElementsByTagName('a')[0];

link.style.textDecoration = 'none';
link.style.color = "green";
link.style.fontSize = "1.5rem"
link.href = "https://www.youtube.com"; 

//Here we changed para1 when mouse is over 

let para1 = document.getElementById('para1'); 

para1.addEventListener('mouseover', function(){
    para1.style.fontSize = '2rem';
}) 
para1.addEventListener('mouseout', function(){
    para1.style.fontSize = '1rem';
})

//Adding another heading to div2 using js 
let heading3 = document.createElement("h1");
let text = document.createTextNode("This heading was added through js");
heading3.appendChild(text);

let myDiv = document.getElementById('div2');
myDiv.appendChild(heading3);


//