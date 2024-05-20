//Object singelton

// const user = new Object() ---->is a singelton object
// console.log(user) //{}
const user ={} //---->is a non singelton object
 user.id ="1234bc"
 user.name="janny"
 user.isLoggedIn =false

// console.log(user) //{ id: '1234bc', name: 'janny', isLoggedIn: false }

const regularUser ={
    email:"hello@gmail.com",
    fullname: {
        userfullname : {
            firstname:"hello",
            lastname :"singh"
        }
    }
}
console.log(regularUser) /*{
    email: 'hello@gmail.com',
    fullname: { userfullname: { firstname: 'hello', lastname: 'singh' } }       
  }*/
  console.log(regularUser.fullname.userfullname.firstname) // gives hello

  console.log(regularUser.fullname?.userfullname.secondname || "invalid response") // gives invalid response as secondname does not exist

const obj1 = {1: "a" , 2:"b"}
const obj2 = {3:"a" , 4:"d"}
const obj3 = {obj1 , obj2}
const obj33 =Object.assign(obj1 , obj2) 
console.log(obj33) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'd' }

console.log(obj3) //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'd' } }

//spread operator 
const obj32 = {...obj1 ,...obj2}
console.log(obj32) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'd' }

//when values comes from databse 
const users=[
    {

    },
    {

    },
    {
    id:1,
    email:"hello@google.cin"
    },
    {},
    {},
]
users[1].email
console.log(user)
console.log(Object.keys(user)) //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(users)) //[ {}, {}, { id: 1, email: 'hello@google.cin' }, {}, {} ]
console.log(Object.entries(users)) /* gives object sin form of seperate arrays
eg:
[
  [ '0', {} ],
  [ '1', {} ],
  [ '2', { id: 1, email: 'hello@google.cin' } ],
  [ '3', {} ],
  [ '4', {} ]
]*/
console.log(user.hasOwnProperty('isLoggedIn')) // true , beacuse it checks whether the value exists in the object or not ,gives boolean value

const course={
    coursename :"this is jaani" ,
    price: "999",
    courseInstructor:"jaani"
}
// ways to print objects
console.log(course.courseInstructor) //jaani
const{courseInstructor}=course
console.log(courseInstructor)


//destructuring
// const navbar=({company})=>{

// }
// navbar(company ="hitesh");
// console.log(navbar)

//api concepts
// we receive adta in form of JSON
// {
//     "name":"jaani",
//     "coursename":"fullstack with jaani",
//     "price":"free"
// }


 