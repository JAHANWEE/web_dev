const score =400;
console.log(score) //400

const balance = new Number(100)
console.log(balance); //[Number: 100]

console.log(balance.toString().length) // gives 3
console.log(balance.toFixed(2)); //100.00

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)) //23.9
console.log(124.45.toPrecision(3)) // gives 124

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN')) // gives 1,00,000(according to indian standards)
console.log(hundreds.toLocaleString()) // gives 100,000

//---------------------------------Mathematics--------------------------------------

console.log("maths")
console.log(Math.abs(-3)) // gives 3
console.log(Math.floor(24.6)) // gives  24
console.log(Math.ceil(25.966)) // gives 26
console.log(Math.round(25.966)) // gives 26
console.log(Math.random()); // any random between 0 to 1 
console.log(Math.random()*10+1); // 1 is added to mzke sure that atlaest teh value is 1 not smaller than 1

const min =10
const max =20
console.log(Math.floor(Math.random()*(max -min+1))+min); // give the value between max and min and 1 is added to avoid any value smaller than 1 and min is then added to avoid any value smaller than min
