//main();
// function main()
// {
    

//     let playerscore = 0; 
//     let computerscore = 0; 

//     // do{
//     //     //let playerchoice = prompt('Type rock,paper,scissor here:');
    
//     //     playerchoice.toLowerCase();
//     //     playerchoice.trim();

//     //     if(playerchoice=='rock'||playerchoice=='scissor'||playerchoice=='paper')
//     //     {
//     //         let rps = round(playerchoice);
//     //         if(rps==-1)
//     //         {
//     //             computerscore+=1;
//     //         }
//     //         else if(rps==1)
//     //         {
//     //             playerscore+=1;
//     //         }
//     //         else
//     //         {
//     //             continue;
//     //         }
//     //     }
//     //     else
//     //     {
//     //         continue;
//     //     }

//     //     console.log('Player score: '+playerscore+' Computer Score: '+computerscore);

//     // }while(playerscore <= 5 || computerscore <=5)

    
// }
let playerscore =0;
let computerscore =0;


    document.getElementById("button1").addEventListener("click",function(){let rock = round('rock')
        if(rock==1)
        {
            playerscore+=1;
            document.getElementById("text").innerHTML = "Player "+playerscore+" : "+computerscore+" computer";
        }
        else if(rock==-1)
        {
            computerscore+=1;
            document.getElementById("text").innerHTML = "Player "+playerscore+" : "+computerscore+" computer";
        }
        else
        {
            document.getElementById("text").innerHTML = "Player "+playerscore+" : "+computerscore+" computer";
        }

    })
    document.getElementById("button2").addEventListener("click",function(){let paper = round('paper')

        if(paper==1)
        {
            playerscore+=1;
            document.getElementById("text").innerHTML = "Player "+playerscore+" : "+computerscore+" computer";
        }
        else if(paper==-1)
        {
            computerscore+=1;
            document.getElementById("text").innerHTML = "Player "+playerscore+" : "+computerscore+" computer";
        }
        else
        {
            document.getElementById("text").innerHTML = "Player "+playerscore+" : "+computerscore+" computer";
        }


    });
    document.getElementById("button3").addEventListener("click",function(){let scissor = round('scissor')
        if(scissor==1)
        {
            playerscore+=1;
            document.getElementById("text").innerHTML = "Player "+playerscore+" : "+computerscore+" computer";
        }
        else if(scissor==-1)
        {
            computerscore+=1;
            document.getElementById("text").innerHTML = "Player "+playerscore+" : "+computerscore+" computer";
        }
        else
        {
            document.getElementById("text").innerHTML = "Player "+playerscore+" : "+computerscore+" computer";
        }

    });

    // if(rock==1||paper==1||scissor==1)
    // {
    //     playerscore+=1;
    //     document.getElementById("text").innerHTML = "Player "+playerscore+":"+computerscore+" computer";
    // }
    // else if(rock==-1||paper==-1||scissor==-1)
    // {
    //     computerscore+=1;
    //     document.getElementById("text").innerHTML = "Player "+playerscore+":"+computerscore+" computer";
    // }
    // else
    // {
    //     document.getElementById("text").innerHTML = "Player edited "+playerscore+":"+computerscore+" computer";
    // }


function round(playerchoice)
{

    let ranum = Math.floor(Math.random()*10);
    let comchoice ="";    

    if(0<=ranum && ranum<=2)
    {
        comchoice = 'rock';
    }
    else if(3<=ranum && ranum<=5)
    {
        comchoice = 'paper';
    }
    else
    {
        comchoice = 'scissor';
    }
    console.log("Player Choice: "+playerchoice+"  Computer Choice: "+comchoice);
    document.getElementById('action').innerHTML=playerchoice+" Vs "+comchoice;
    let winner = findwinner(playerchoice,comchoice);
    return winner; 

}

function findwinner(p,c)
{
    if((c=='rock'&&p=='scissor')||(c=='paper'&&p=='rock')||(c=='scissor'&&p=='paper'))
    {
        let computerwins = -1;
        return computerwins;
    }
    else if((c=='rock'&&p=='rock')||(c=='paper'&&p=='paper')||(c=='scissor'&&p=='scissor'))
    {
        let draw = 0;
        return draw; 
    }
    else
    {
        let playerwins =1;
        return playerwins;
    }
}