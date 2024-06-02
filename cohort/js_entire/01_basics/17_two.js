const coding =["js", "java","python"]
// forEach loop does not return any value , thus if we dont want to just print but also return soem value foraech in this way can't be used
const value =coding.forEach((i)=>{
    console.log(i);
    return i;
})
console.log(value) // gives undefined


// to using filter which  also uses a callback function with a condition
const myNum =[1,2,3,4,5]
//filter returns some value
const ans =myNum.filter((num)=>num>4)// filter uses a callback function which uses each loop on here num and checks for teh condition if num >4 then return the value accordingly
console.log(ans) // [5]

const nuNum = myNum.filter((num)=>{
    return num>1 // need to write filter otherwise wont give result but an empty array
})
console.log(nuNum) // gives [ 2, 3, 4, 5 ]

const news =[]
myNum.forEach((num)=>{
    if(num>3){
        news.push(num) 
    }
})
console.log(news) //[ 4, 5 ]

const newss =myNum.map((num)=>num+10)
// {} signifies scope so whenever you open a {} you need to give the keyboard return  always
// console.log(newss) //[ 11, 12, 13, 14, 15 ]

//chaining
const newsNum = myNum
                    .map((num)=>num*10)//^operates and the value is stored  
                    .map((num)=>num+1) //? so when this is run it uses the value stored after multiplying by 10 so the final result gives 11 , 21....
console.log(newsNum); //[ 11, 21, 31, 41, 51 ]












/*
Red (!)
Blue (?)
Green (*)
Yellow (^)
Pink (&)
Purple (~)
Mustard (todo)
Grey (//)
Commented out Code can also be Styled to make it Clear the Code shouldn't be There.
Any Other Comment Styles you'd like can be Specified in the Settings.
*/
//!
//?
//*
//^
//&
//~
//todo
//green
////grey
