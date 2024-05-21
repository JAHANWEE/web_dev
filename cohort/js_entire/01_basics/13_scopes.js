

// console.log(a,b,c) // variables are not defined

if(true){
    let a=10
    const b =20;
    var c=30
}
// console.log(a), gives error
// console.log(b),gives error
// console.log(c) // prints 30 outsie its csope , so should not be used..........so var should not be used


//nested scope 
function one(){
    const username ="jaani"

    function two(){
        const website ="youtube"
        console.log(username)
    }
    // console.log(website) // cannot be accessed outside the function two
    two()
}
one()