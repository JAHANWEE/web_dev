function addTwoNumbers(num1,num2){ //num1 and num2 are parameters
    console.log(num1+num2)
}
addTwoNumbers(3 , 4)// gives 7 , and ere 3 and 4 are arguments
addTwoNumbers(3 , "a")// gives 3a
addTwoNumbers("4" , 4)// gives 44
addTwoNumbers("a",null) // a null

const result =addTwoNumbers(3,5)
console.log(result) //undefined , because we see the function does not return anything  bt it does console

//so a bettr alternative would be to return an ans so as to print it 
// eg:
function subtractNum(num1 , num2){
    return num2-num1;
    
}
const results = subtractNum(3,5)
console.log(results) // now gives 2 

//ways to give parameters
function loginUsers(username){
    return `${username} just logged in`
}
console.log(loginUsers("jaani")) //jaani just logged in
console.log(loginUsers()) //undefined just logged in , when no arguments are given



//when the number of arguments are not defined clearly
function calcCartPrice( /*rest operator*/...num1){ //... signify rest as well as spread operator that helps us take multiple argumnets
    return num1;
}
console.log(calcCartPrice(200 , 400 , 500)) //