/*Prmitive 
7 types :String , Number , boolean , null , undefined ,symbol , BigInt
*/
const isLoggedIn =false
const outsidetemp= null
let userEmail

const id=Symbol('123')
const anotherId =Symbol('123')
console.log(isLoggedIn , outsidetemp , userEmail , id , anotherId)
console.log(id ===anotherId)   // gives false
/*Non -primitive and reference data types
=>Arrays
=>objects
=>Functions
*/
const cartoon =["doreamon", "shinchan", "ninjahathori"]
let myObj ={
    name:"jaani",
    age: 22 
}
console.log(cartoon);
console.log(myObj);

const myfunction =function(){
    console.log("hello world");
}

myfunction();

/*----------------------------------Stack and Heap memory*/
//Stack->Primitive
//heap->Non-primitive 

let myName ="jaani"
let anothername =myName
anothername ="chai is love"

console.log(anothername) // gives chai is love
console.log(myName)  //jaani

let user ={
    email:"hello@zyz.com",
    upiId :"user@ybl"
}

let user2 = user
user2.email ="moth@abc.com"
console.log(user2.email)  //moth@abc.com
console.log(user.email) //moth@abc.com