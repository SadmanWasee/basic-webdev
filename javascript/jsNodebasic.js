// let a = 123; 

// console.log(a);

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  //res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Rock Paper Scissor</title>
  </head>
  <style>
      body{
          margin: 0;
          background-color: aquamarine;
          text-align: center;
      }
      h1{
          background-color: black;
          color: orangered;
          margin-left: 400px;
          margin-right: 400px;
          border-radius: 25px;
      }
      .container{
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          background-color: black;
          margin-left: 400px;
          margin-top: 100px;
          margin-right: 400px;
          margin-bottom: 100px;
          border-radius: 10px;
          padding: 10px;
      }
      .container-2
      {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          
      }
      #scoreboard{
          background-color: olivedrab;
          color: black;
          text-align: center;
      }
      .status{
          background-color: olivedrab;
          color: black;
          text-align: center;
      }
      #button1{
          background-color: white;
          color: black;
          margin: 25px;
          font-size: 20px;
          padding: 50px 35px;
      }
      #button1:hover{background-color: aquamarine;}
      #button1:active{
          background-color: white;
          box-shadow: 0 5px #666;
          transform: translateY(4px);
      }
      #button2{
          background-color: white;
          color: black;
          margin: 25px;
          font-size: 20px;
          padding: 50px 35px;
      
      }
      #button2:hover{background-color: aquamarine;}
      #button2:active{
          background-color: white;
          box-shadow: 0 5px #666;
          transform: translateY(4px);
      }
      #button3{
          background-color: white;
          color: black;
          margin: 25px;
          font-size: 20px;
          padding: 50px 30px;
      
      }
      #button3:hover{background-color: aquamarine;}
      #button3:active{
          background-color: white;
          box-shadow: 0 5px #666;
          transform: translateY(4px); 
      }
  </style>
  <body>
      <h1>Play Rock Paper Scissor</h1>
      <div class="container">
          <div id="scoreboard"><h2 id="text">Player 0 : 0 Computer</h2></div>
          <div class="container-2">
              <button id="button1">Rock</button>
              <button id="button2">Paper</button>
              <button id="button3">Scissor</button>
          </div>
          <div class="status"><h2 id="action">Status</h2></div>
      </div>
  </body>
  <script>let playerscore =0;
  let computerscore =0;
  
  
      document.getElementById("button1").addEventListener("click",function(){let rock = round('rock')
          if(rock==1)
          {
              playerscore+=1;
              document.getElementById("text").innerHTML = "Player "+playerscore+" : "+computerscore+" Computer";
          }
          else if(rock==-1)
          {
              computerscore+=1;
              document.getElementById("text").innerHTML = "Player "+playerscore+" : "+computerscore+" Computer";
          }
          else
          {
              document.getElementById("text").innerHTML = "Player "+playerscore+" : "+computerscore+" Computer";
          }
  
      })
      document.getElementById("button2").addEventListener("click",function(){let paper = round('paper')
  
          if(paper==1)
          {
              playerscore+=1;
              document.getElementById("text").innerHTML = "Player "+playerscore+" : "+computerscore+" Computer";
          }
          else if(paper==-1)
          {
              computerscore+=1;
              document.getElementById("text").innerHTML = "Player "+playerscore+" : "+computerscore+" Computer";
          }
          else
          {
              document.getElementById("text").innerHTML = "Player "+playerscore+" : "+computerscore+" Computer";
          }
  
  
      });
      document.getElementById("button3").addEventListener("click",function(){let scissor = round('scissor')
          if(scissor==1)
          {
              playerscore+=1;
              document.getElementById("text").innerHTML = "Player "+playerscore+" : "+computerscore+" Computer";
          }
          else if(scissor==-1)
          {
              computerscore+=1;
              document.getElementById("text").innerHTML = "Player "+playerscore+" : "+computerscore+" Computer";
          }
          else
          {
              document.getElementById("text").innerHTML = "Player "+playerscore+" : "+computerscore+" Computer";
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
  }</script>
  </html>`)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});