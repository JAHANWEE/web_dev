const array1=[1,2,3,4];

const intialValue =0;
const sum =array1.reduce(
    (accumlator , currentVal) =>accumlator+currentVal,intialValue //~ accumlator is a empty variable
)
//?another way to write the same function as above 
const sums =array1.reduce(function(acc , currval){
    console.log(`acc is ${acc} and currval is ${currval}`) //&acc is 0 and currval is 1
    //&acc is 1 and currval is 2
    //&acc is 3 and currval is 3
    //&acc is 6 and currval is 4
    return acc+currval
},0)

console.log(sum) // 10
console.log(sums) // 10