console.log(2>1) // gives true
console.log(2>=1) // gives true
console.log(2==1) // gives false

console.log("2">1) // true
console.log("02">1)// true


//avoid these types of conversions------------------------------
console.log(null>0)//false
console.log(null ==0) // false
console.log(null>=0) // true

/* Note : comparisons convert null to a number , treating it as 0
*/
console.log(undefined==1); //gives false

// === checks value as well as data types
