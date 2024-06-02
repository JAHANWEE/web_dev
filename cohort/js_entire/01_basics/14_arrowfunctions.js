//this keyword 
// const user ={
//     username :"jaani",
//     price:99,

//     welcomeMessage :function(){
//         console.log(`${this.username} , welcome to the course `) // here this refers to current context/ values
//         console.log(this)
//     }
// }
// user.welcomeMessage() //jaani , welcome to the course 
// user.username="saman"
// user.welcomeMessage() //saman , welcome to the course , because we didnt hardcode , but refered to the current value of username

const chai = ()=>{
    let username= "jaaani"
    console.log(this.username) // give undefined
    console.log(this) // gives {}
}
chai()

const addTwo =(num1,num2)=>{
    return num1+num2;
}
console.log(addTwo(3,5))// gives 8

//implicit return
const addThree =(num1,num2,num3)=>num1+num2+num3

console.log(addThree(2,4,5)) // gives 11

//or 
const addFour =(num1,num2,num3,num4) =>(num1+num2+num3+num4)

console.log(addFour(2,4,5,6)) //gives 17

// to return an object it should be enclosed within parenthesis :eg:
 const Hello = (obj1)=>({username:obj1
 })
 console.log(Hello("jasani")) // gives { username: 'jasani' }
