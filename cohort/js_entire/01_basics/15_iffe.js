//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(IIFE)



//normal function  
// function chai(){
//     console.log(`DB CONNECTED`)
// }
// chai() //DB CONNECTED

//iffi function
(function chai(){
        console.log(`DB CONNECTED`)
})();// iffi is used so that we can run functions without the interferece from the global scope pollution

//iffi is decalred by putting the function within round brackets and one more bracket outside it

//to run another fucntion just after iffi function we need to put a semicolon to signfy that the functions end