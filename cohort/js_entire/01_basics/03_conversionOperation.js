let scored =23

console.log(typeof scored) //gives number
console.log(typeof(scored)) //gives number

let score="345th"
let valueInNumber =Number(score); // converts to number
console.log(valueInNumber) // gives Nan
console.log(typeof valueInNumber) // gives number


let sc =null
console.log(typeof sc) //gives object
console.log(typeof(sc)) //gives object

let scd = null;
let valueInNumbers =Number(scd); // converts to number
console.log(valueInNumbers) // gives 0
console.log(typeof valueInNumbers)  //gives number

let und = undefined ;
let valueInNumberss = Number(und);
console.log(valueInNumberss) // gives Nan
console.log(typeof valueInNumberss)  //gives number

// "33" => 33
//"33abc"=>Nan
// true=>1 ;false=>0

let isLoggedIn =1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)  // gives true

// "" => gives false
// "jaani"=> gives true
// 1=>true ; 0=>false

let sumNumber =333;
let stringNum = String(sumNumber)
console.log(stringNum)  // gives 333
console.log( typeof stringNum)  // gives string

// -------------------------------------Operations----------------------------------------------->
let value =3
let negValue =-value
console.log(negValue) // gives -3

let str1="hello"
let str2=" jaani"
console.log(str1+str2) // gives hello jaani
console.log("1"+2) // gives 12
console.log(1+"2") // gives 12
console.log("1"+2+2) // gives 122
console.log(1+2+"2") // gives 32

console.log(+true) //gives 1
// console.log(true+) // gives error

let num1 , num2,num3;
num1=num2=num3 =2+2;
console.log(num1 , num2 , num3) // gives 4 4 4 
let gameCounter =100;
gameCounter++;
console.log(gameCounter) // gives 101