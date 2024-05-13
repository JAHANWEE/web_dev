const marvel_heros =["thor" , "IronMan","spiderman"]
const dc_heros =["superman", "flash","batman"]
// marvel_heros.push(dc_heros)
console.log(marvel_heros) //[ 'thor', 'IronMan', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3]) //[ 'superman', 'flash', 'batman' ]

const all_heros =marvel_heros.concat(dc_heros)
console.log(all_heros) //[ 'thor', 'IronMan', 'spiderman', 'superman', 'flash', 'batman' ] gives new array


const all_new_hero =[...marvel_heros , ...dc_heros] // spread operator
console.log(all_new_hero) //[ 'thor', 'IronMan', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array =[1,2,3,[4,5,6],7,[6 , 7 , [4 , 5]]]
const real_another_array = another_array.flat(Infinity) // returns new array with all sub arrays concatenated in one 
console.log(real_another_array) /*
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]*/
console.log(Array.isArray("jaani")) // gives false ,checks whether it is an array or not 
console.log(Array.from("jaani")) //[ 'j', 'a', 'a', 'n', 'i' ]converts whatever given into an array 
console.log(Array.from({name:"jaani"})) // interesting , you need to whether to make the array from key or values

let score1=100
let score2 =200
let score3= 300

console.log(Array.of(score1 ,score2,score3)) //[ 100, 200, 300 ]makes array out of all the elements


