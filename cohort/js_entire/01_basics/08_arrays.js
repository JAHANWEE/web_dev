//array is an object , js array are resizable
const myArr =[0 , 1, 2 , "hello"]
console.log(myArr["one"]);
// arrys can be directly manipulated
const myArrays = new Array();
console.log(myArr.length); // gives 4
console.log(myArr[1]); //1


// ------array methods-------------
myArr.push(6)
console.log(myArr) //[ 0, 1, 2, 'hello', 6 ]

myArr.pop()
console.log(myArr) //[ 0, 1, 2, 'hello' ]

myArr.unshift(9)
console.log(myArr) //[ 9, 0, 1, 2, 'hello' ]

myArr.shift()
console.log(myArr) //[ 0, 1, 2, 'hello' ]removes first element

console.log(myArr.includes(5)); // false
console.log(myArr.indexOf(2)); //2
const myArrs = myArr.join()
console.log(myArr); //[ 0, 1, 2, 'hello' ]
console.log(typeof myArr); //object
console.log(myArrs) //0,1,2,hello converted to string seperated by comma


const myArras=[1,2,3,4,5]

console.log("A" , myArras); //A [ 1, 2, 3, 4, 5 ]
const my1 = myArras.slice(1,3) //[ 2, 3 ] does not include 3rd index gives value from 1 to end index-1
console.log(my1) // [ 2, 3 ]
console.log("B" , myArras) //B [ 1, 2, 3, 4, 5 ]

const my2 = myArras.splice(1,3) 
console.log(my2) //[ 2, 3, 4 ] creates a new array from start to end index
console.log("C" ,myArras) //C [ 1, 5 ]  original arry is spliced and only the left elements are left