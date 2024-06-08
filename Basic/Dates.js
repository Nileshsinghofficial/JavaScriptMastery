let myDate = new Date()
// console.log(myDate.toDateString()); // toDateString() => gives only Day and Dates
// console.log(myDate.toString()) // toString() in Date() => its give local times , Dates and Days

// console.log(myDate.toLocaleDateString()) // its Give only Dates, output => 8/6/2024
// console.log(myDate.toLocaleString()) // its gives date with local times Am/Pm output => 8/6/2024, 9:02:39 pm

// console.log(myDate.toISOString()) // output => 2024-06-08T15:27:58.876Z
// console.log(myDate.toJSON()) // output => 2024-06-08T15:27:58.876Z

// let myCreatedDate = new Date(2024, 5, 8, 5,3)
// console.log(myCreatedDate.toDateString())

// let myCreatedDate = new Date(2024, 5, 8, 5,3)
// console.log(myCreatedDate.toLocaleString())

let myCreateDates = new Date("11-22-2024") // format (mm-dd-yy)
// console.log(myCreateDates.toLocaleString()) // 23/11/2024, 12:00:00 am

// Current Date Show

let myTimeStamp = Date.now()

// console.log(myCreateDates.getTime());

// console.log(Math.floor(myCreateDates/1000));
// console.log(Math.floor(Date.now()/1000));