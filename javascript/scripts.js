// let a=1;
// let b=3;
// let c=2;

// let ans = largest(a , b , c);
// console.log(ans);
// function largest(a, b, c){
//     if(a>b && b>c){
//         console.log(a);
//     }else if(b>a && b>c){
//         console.log(b);
//     }else{
//         console.log(c);
//     }
// }

// 1.ways to print in js
// console.log("Hello , this is jaani.");
// alert("What is your name?");
// document.write("le likh diya bhai");

// 2.Javascript console API
// document.getElementById(click);
// console.log("Hello , this is jaani.");
// console.warn("le de di bhai warning");
// console.error("le aaya gya bhai error");

// 3.variables
// var ab=1;
// var bc =2;
// console.log(ab+bc);

// 4.Data types in javascript
// 4.1 Numbers
// var num1=233;
// var num2=90;

// 4.2 String
// var str1="this is a string";
// var str2="this is also a string";

// 4.3 Objects
// var marks={
//     ravi:23,
//     meena:34,
//     sonal:67,
//     hitesh:99.89,
// }

//4.4 Boolean
// var bol =true;
// var bols =false;
// console.log(bol,bols);

// 4.5 Undefined
// var und = undefined;
// var undef;
// console.log(und);
// console.log(undef); // gives undefined as the value is not mentioned.

// 4.6 null
// var n=null;
// console.log(n); // intentionally has been set to null

//4.7 Arrays
// var arr=[1,2,3,"hell",5,6];

// Function
// function avg(a, b) {
//   return (a + b) / 2;
// }

// var anss = avg(6, 4);
// console.log(anss);

//loop
// var arr = [1, 2, 3, 4, 5];
// console.log(arr);
// for(let i=0;i<arr.lengtg;i++){
//     console.log(arr[i]);
// }
// arr.forEach(function(element){
//     console.log(element);
// })

// let j=0;  // block scope variable
// const a=0; // constant
// console.log(a++);  // gives error

//while
// let i=0;
// while(i<arr.length-2){  // print 1 , 2, 3
//     console.log(arr[i]);
//     i++;
// }

// do while
// let i=4;
// do {
//   console.log(arr[i]); // prints 5
//   i++;
// } while (i < arr.length);

//break && continue;

// for(let i=0;i<arr.length;i++){
//     if(i==2){
//         continue;
//     }console.log(arr[i]);  // prints 1, 2, 4, 5 ;leaving 3
// }

// for(let i=0;i<arr.length;i++){
//     if(i==2){
//         break;
//     }console.log(arr[i]);  // prints 1, 2 only
// }

// let myArr =["cup" , "plate" , 35, null , true ,"hello"];

//Array Methods
// console.log(myArr.length);
// myArr.pop(); // pops last element here it is hello
// console.log(myArr);
// myArr.push("jaani"); // adds jaani to last of array
// console.log(myArr); //['cup', 'plate', 35, null, true, 'jaani']
// myArr.shift(); // removes one element from first
// console.log(myArr); // ['plate', 35, null, true, 'jaani']
// myArr.unshift("sing"); // adds sing to starting of array
// console.log(myArr) //['sing', 'plate', 35, null, true, 'jaani']

//String Methods
//  let string="hello ow are you";
//  console.log(string.length)  // 16
//  console.log(string.indexOf("ow"));  // gives 6
// console.log(string.lastIndexOf("you"))  // gives 13
// console.log(string.slice(1,5));  // gives ello  excluding last given index
//  d=string.replace("ow","how");
// console.log(d , "" ,string);

//dates
// let mydate = new Date();
// console.log(mydate.getTime()); //1713198590584
// console.log(mydate.getFullYear()); // 2024

//DOM manipulation
// let el = document.getElementById("click");
// console.log(el);

// let elcls = document.getElementsByClassName("container"); //gives a html collection
// console.log(elcls);
// elcls[0].style.background ="yellow";  // give the first container background yellow
// elcls[0].classList.add("bg-primary"); // give the container violet color
// elcls[0].classList.add("text-success"); // give swhite colour to text
// elcls[0].classList.remove("text-success"); // remove sthe added class
// console.log(el.innerHTML);
// console.log(el.innerText);
// console.log(elcls[0].innerHTML); // gives <button id="click">Click Me<button>                                 <p>This a para . ......</p>
// console.log(elcls[0].innerText); // Click Me
// This a para . ......


// let tr =document.getElementsByTagName('div');
// console.log(tr);  // gets all the tags by the name div in form of a html collection
// createdElement=document.createElement('p');
// createdElement.innerText ="This is a created para";
// tr[0].appendChild(createdElement); // this adds a paragraph element with the text "This is a created para" inside the first div 
// lol =document.createElement('address');
// lol.innerText="this is lol"
// tr[1].appendChild(lol);  //adds a address tag inside the second div tag with text "this is lol"

// rep =document.createElement('b');
// rep.innerText="This one is replaced but bold";
// tr[0].replaceChild(rep , createdElement); // this replaced the paragraph tag addded above .

// const parent =document.getElementById("firstContainer");
// const child =document.getElementById("click")
// const remved =parent.removeChild(child);  // removes the element with id click
 
// Selecting using Query
//  let sel=document.querySelector('.container');
// console.log(sel) //gives the first element

// let selo=document.querySelectorAll('.container')
// console.log(selo)  // gives node list

//Events in Javascript
// firstContainer.addEventListener('click' , function(){
//     console.log("Clicked on container");
// }) // prints "clicked on container" as you click the container

// firstContainer.addEventListener('mouseover', function(){
//     console.log("Hover on container");
// })   // prints "hover on container" on hovering over the container

// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse out of container");
// })   // prints "Mouse out of container" on hovering over the container

// firstContainer.addEventListener('click' , function(){
//         document.querySelectorAll('.container')[0].innerHTML ="<b> We have Clicked</b>"
//         console.log("Clicked on Container")
//     })  // it changed the innerHtml of the first container when the container is clicked

//Arrow Functions
function summ(a,b){             
    return a+b;
}  
// ====>
// summ =(a,b)=>{
//     return a+b;
// }


//setTimeout and SetInterval
logKaro=()=>{
    console.log("This is a log")
}
setTimeout(logKaro , 2000);   // calls the function after 2000 miliseconds or 2s
logKaro=()=>{
    document.querySelectorAll('.container')[0].innerHTML="Set kar diya interval"
    console.group("set kr diya")
}
 let clear =setTimeout(logKaro , 2000); // basically it changes the inner HTML of the first container by "set kr diya interval after 2 seconds"
// setInterval(logKaro , 1000)   // it reruns the function after each 1s repeatedly
clearInterval(clear) // basically stops the setIntervala and same for setTimeout
