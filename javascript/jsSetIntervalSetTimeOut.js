function greet(name,takecare)
{
    console.log('Hello good morning! '+name+" "+takecare);
}

TimeoutID=setTimeout(greet,5000,'Sadman','Bye takecare!'); //(fuction, time in ms,arguments of fucnton after time, ...)
console.log(TimeoutID);
//setTimeout(greet(),5000) ->wrong as it is calling the function inside setTimeout
//clearTimeout(timeout); //Used if we need to cancel timeout function
//setInterval(greet,1000,'Wasee','Bye takecare!');