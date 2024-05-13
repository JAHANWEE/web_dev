//singelton - when object is made using a constructor , but not when using literals
// Object.create--->is a constructor than gives an object

//object literals
//object has key an dvalue pairs
const mySymbol = Symbol("que2")
const JUser ={
    name:"jaani",
    "full name":"jaani",
    [mySymbol]:"quene2",
    age:21,
    location:"Delhi",
    email:"jahanwee@google.com",
    isLoggedIn :false,
    lastLoginDays :["Monday" , "Saturday"]
}
console.log(JUser.email) //jahanwee@google.com
console.log(JUser["email"])//jahanwee@google.com
console.log(JUser["full name"]) //jaani
console.log(mySymbol) //Symbol(que2)
console.log(JUser.mySymbol) //quene2
console.log(typeof JUser.mySymbol) // gives string but we want symbol
// so we need to give square brackets while specifying symbol 
console.log(typeof JUser[mySymbol])

JUser.email="jaani@hept.com"
console.log(JUser["email"]) //jaani@hept.com
// Object.freeze(JUser) // freezes , that means it simply you cannot change anything in the objecet now
JUser.email ="jahanwee@amazon.com"
console.log(JUser["email"]) // jaani@hept.com
console.log(JUser);/*{
    name: 'jaani',
    'full name': 'jaani',
    age: 21,
    location: 'Delhi',
    email: 'jaani@hept.com',
    isLoggedIn: false,
    lastLoginDays: [ 'Monday', 'Saturday' ],
    [Symbol(que2)]: 'quene2' --->symbolizes object
  }*/
 
JUser.greeting = function(){
    console.log("Hello JS User")
}
JUser.greetingTwo = function(){
    console.log(`Hello JS User ,${this.name}`)
}
// console.log(JUser.greeting) // gives [Function (anonymous)]
console.log(JUser.greeting()) /*Hello JS User
undefined*/

console.log(JUser.greetingTwo()) /*Hello JS User ,jaani
undefined*/
 



