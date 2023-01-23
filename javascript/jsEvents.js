function hide(){
    
    //let btn = document.getElementById('btn');

    // if(paragraph.style.display != 'none'){
    //     paragraph.style.display = 'none';
    // }
    // else{
    //     paragraph.style.display = 'block';
    // }
    
}

let paragraph = document.getElementById('paragraph');
    paragraph.addEventListener('mouseover',function run(){
        console.log("Mouse inside paragraph");
    });
    paragraph.addEventListener('mouseout',function run(){
        console.log('Mouse now went out');
    })