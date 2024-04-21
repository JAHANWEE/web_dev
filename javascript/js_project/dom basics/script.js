// var a=document.querySelector("h1") /// selecting query from html
// console.log(a);
// a.innerHTML="changed html" 
//or
// document.querySelector('h1').innerHTML="hogya change" 

// var a =document.querySelector("h1");

// a.style.color="red";   // makes it red
// a.style.backgroundColor="maroon" // makes the background maroon

//EVENT LISTENER
// Something that is happening in consequence of an event
// var a=document.querySelector("h2");
// a.addEventListener("click",function(){
//     console.log("hey")
//     a.innerHTML="badal gya hu mai"   // change sthe text to "badal gya hu mai"
//     a.style.color="blue"
//     a.style.backgroundColor="red"
// })

// var b =document.querySelector('#bulb');
// var c =document.querySelector('button');

// var flag=0;
// c.addEventListener("click",function(){
//     if(flag==0){
//         b.style.backgroundColor="yellow"
//         console.log("bulb is on")
//         flag=1;
//     }else{
//         b.style.backgroundColor="transparent"
//         console.log("bulb is off")
//         flag=0;
//     }
// })

// var offf =document.querySelector("#off")
// offf.addEventListener("click",function(){
//     b.style.backgroundColor="transparent";
//     console.log("bulb is off")
// })
   
var h =document.querySelectorAll('h1');  // selects all h1
console.log(h);
h.forEach(function(e){
    console.log(e)
})

var h1 = document.getElementById("box");
console.log(h1)
