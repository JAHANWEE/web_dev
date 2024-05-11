//Dates 

let mydate = new Date();
console.log(mydate); //2024-05-11T11:39:02.616Z
console.log(mydate.toString()); //Sat May 11 2024 17:08:05 GMT+0530 (India Standard Time)
console.log(mydate.toDateString()); //Sat May 11 2024
console.log(mydate.toISOString()); //2024-05-11T11:39:02.616Z
console.log(mydate.toJSON()); //2024-05-11T11:39:02.616Z
console.log(mydate.toLocaleDateString()); //5/11/2024
console.log(mydate.toLocaleString()); //5/11/2024, 5:11:29 PM
console.log(mydate.toTimeString()); //17:09:02 GMT+0530 (India Standard Time)


// let myCreatedDate = new Date(2024 ,5,23);
// console.log(myCreatedDate.toDateString()) //Sun Jun 23 2024
let myCreatedDate = new Date(2024 ,5,23 , 4, 5);
console.log(myCreatedDate.toLocaleString()) //6/23/2024, 4:05:00 AM

let dates = new Date("2024-02-14")
console.log(dates.toLocaleString()) //2/14/2024, 5:30:00 AM


// ------------------Timestamp-----------------------------
let myTimestamp = Date.now()
console.log(myTimestamp) //1715429953640
console.log(dates.getTime()) //1707868800000
console.log(Math.floor(Date.now()/1000)) // 1715430026 seconds
let newDate = new Date();
console.log(newDate.getTime()) //1715430218777
console.log(newDate.getFullYear()) //2024
console.log(newDate.getDay()) //6
console.log(newDate.getDate()) //11