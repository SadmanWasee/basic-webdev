let photos = ["../image/img1.jfif","../image/img2.jfif","../image/img3.jfif"]

let imgtag = document.querySelector("img");

let count = 0; 

function next()
{
    count++;

    if(count >= photos.length)
    {
        count = 0; 
        imgtag.src = photos[count];
    }
    else
    {
        imgtag.src = photos[count];
    }


}

function prev()
{
    count--;

    if(count < 0)
    {
        count = photos.length-1; 
        imgtag.src = photos[count];
    }
    else
    {
        imgtag.src = photos[count];
    }
}