const name = "mithlesh"
const age =30;

// console.log(name +count+" value")

console.log(`hello my name is ${name} and my age is ${age}`)

const game = new String('mello')
console.log(game) //[String: 'mello']
console.log(game[3]) // gives 'l'
console.log(game.length) // gives 5
console.log(game.charAt(1)) // gives 'e'
console.log(game.toUpperCase()) // gives MELLO
console.log(game.indexOf('m'))  // gives 0
console.log(game.substring(1,5)) // gives 'ello'

// const hno = game.slice(-2 , 1)
// console.log(hno)  // gives me

// console.log(game.trim()) // gives mello

const url ="https://google%20.com"
console.log(url.replace('%20' , '-'))  // gives  https://google-.com
console.log(url.includes('hello'))  // gives false

const games ="   lmao it is funny"
console.log(games.split(' ')) // gives [ '', '', '', 'lmao', 'it', 'is', 'funny' ]