// Numbers:
let length = 160;
let weight = 50.5;

// Strings:
let color = "Yellow";
let lastName = 'Johnson';

// Booleans
let x = true;
let y = false;

// Object:
const person = { name: "Zoro", age: 21 };

// Array object:
const fruits = ["grape", "avocato", "strawberry"];

// Date object:
const date = new Date("2023-03-01");

// Date methods:
// GET
let dateMethod = date.getFullYear() //(yyyy)
dateMethod = date.getMonth() //(0-11)
dateMethod = date.getDate() //(1-31)
dateMethod = date.getDay() //(0-6)
dateMethod = date.getHours() //(0-23)
dateMethod = date.getMinutes() //(0-59)
dateMethod = date.getSeconds() //(0-59)
dateMethod = date.getMilliseconds() //(0-999)
dateMethod = date.getTime() //(milliseconds since Jan 1, 1970)

// getUTC...
// Coordinated Universal Time => the same as GMT (Greenwich Mean Time)

dateMethod = date.getTimezoneOffset() // the difference in minutes between local time and UTC time

// SET

let date2 = new Date()

date2.setDate(1) //(1-31)
date2.setFullYear(2005) //(yyyy, optionally month and day)
date2.setMonth(2) //(0-11)
date2.setHours(8) //(0-23)
date2.setMinutes(7) //(0-59)
date2.setSeconds(0) //(0-59)
date2.setMilliseconds(0) //(0-999)
console.log(date2);
date2.setTime(0) //(milliseconds since Jan 1, 1970)