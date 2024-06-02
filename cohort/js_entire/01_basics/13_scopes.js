

// console.log(a,b,c) // variables are not defined

if(true){
    let a=10
    const b =20;
    var c=30
}
// console.log(a), gives error
// console.log(b),gives error
// console.log(c) // prints 30 outsie its csope , so should not be used..........so var should not be used


//nested scope 
// function one(){
//     const username ="jaani"

//     function two(){
//         const website ="youtube"
//         console.log(username)
//     }
//     // console.log(website) // cannot be accessed outside the function two
//     two()
// }
// one()

if(true){
    const username = "jaani"
    if(username === "jaani"){
        const website =" youtube"
        console.log(username+website) // gives jaani youtube
    } 
//     console.log(website) // cannot access website , beacuse its in the if
}
// console.log(username) cannot be accessed because its outside the if 

// --------------------------------interesting----------------------->
console.log(addone(5)) // will work
function addone(num){
    return num+1
}


// -----------another way to declare fucntions ,also sometimes known as expressions

const addTwo =function(num){
    return num+2
}
addTwo(6) // this is some where related to hoisting where if you declare a function later and call the function first it will not work as we have stored it in a variable addtwo , thus will not work 

