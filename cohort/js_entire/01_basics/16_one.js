// for of 

// ["","",""]
// [{} ,{},{}]

const arr = [1,2,3,4,5]
for(const i of arr){
    console.log(i) // 1 2 3 4 5
}
const greetings ="hello world"
for(const greet of greetings){
    console.log(`Each char is ${greet}`) /*Each char is h
    Each char is e
    Each char is l
    Each char is l
    Each char is o
    Each char is
    Each char is w
    Each char is o
    Each char is r
    Each char is l
    Each char is d*/
}


//Maps
const map = new Map()
map.set('a',2)
map.set('b',3)
map.set('b', 5) // this value will not be counted as its a redundant value , as 

console.log(map) //Map(2) { 'a' => 2, 'b' => 5}
for(const i of map){
    console.log(i) //[ 'a', 2 ]
                    // [ 'b', 5 ]

}
for(const[key , value] of map){
    // console.log(key) // gives  a b 
    // console.log(value) //2
    5
    console.log(key , ':--', value)//a :-- 2
    // b :-- 5
}  

const myObject = {
    js:'js',
    cpp:'c++',
    rb :'ruby'
}

// for in loop for objects
for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`); //js shortcut is for js
    // cpp shortcut is for c++
    // rb shortcut is for ruby
}
//for in loop for arrays
const programming =["js","rb","py", "java"]
for(const key in programming){
    console.log(`${key} shortcut is for ${programming[key]}`) //0 shortcut is for js
    // 1 shortcut is for rb
    // 2 shortcut is for py
    // 3 shortcut is for java
}

// for each loop
const coding =["js","ruby","java"]

//call back function is used by forEach loop
coding.forEach( function(i){
    console.log(i) // js ruby java
})

//arrow function
coding.forEach((i)=>{
    console.log(i) //js
    // ruby
    // java
})

function prints(i){
    console.log(i)
}
coding.forEach(prints) //js
// ruby
// java

//to get data like index , item of the array
coding.forEach((i , index , arr)=>{
    console.log(i,index,arr) //js 0 [ 'js', 'ruby', 'java' ]
    // ruby 1 [ 'js', 'ruby', 'java' ]
    // java 2 [ 'js', 'ruby', 'java' ]
})
console.log(coding.indexOf('java')) // gives 2
console.log(coding.indexOf('ruby')) // gives 1

const myCode =[
    {
        langName:"javascript",
        langFileName:".js"
    },
    {
        langName:"java",
        langFileName:".java"
    },
    {
        langName:"python",
        langFileName:".py"
    }
]

//values from db vomes in from of array format and each is an object

myCode.forEach((i)=>{
    console.log(` file name is ${i.langFileName} and  language name is ${i.langName}`) // file name is .js and  language name is javascript
    // file name is .java and  language name is java
    // file name is .py and  language name is python
})