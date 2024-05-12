const marvel_heros =["thor" , "IronMan","spiderman"]
const dc_heros =["superman", "flash","batman"]
// marvel_heros.push(dc_heros)
console.log(marvel_heros) //[ 'thor', 'IronMan', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3]) //[ 'superman', 'flash', 'batman' ]

const all_heros =marvel_heros.concat(dc_heros)
console.log(all_heros) //[ 'thor', 'IronMan', 'spiderman', 'superman', 'flash', 'batman' ] gives new array