/*
getFullYear()	Get year as a four digit number (yyyy)
getMonth()	Get month as a number (0-11)
getDate()	Get day as a number (1-31)
getDay()	Get weekday as a number (0-6)
getHours()	Get hour (0-23)
getMinutes()	Get minute (0-59)
getSeconds()	Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	Get time (milliseconds since January 1, 1970)
*/

const date = new Date();
console.log(date.getFullYear());   //2026
console.log(date.getMonth());      //0-11 (0 for Jan, 1 for Feb, 2 for Mar and so on)
console.log(date.getDate());       //1-31
console.log(date.getDay());        //0-6 (0 for Sunday, 1 for Monday, 2 for Tuesday and so on)
console.log(date.getHours());      //0-23
console.log(date.getMinutes());    //0-59
console.log(date.getSeconds());    //0-59
console.log(date.getMilliseconds());    //0-999
console.log(date.getTime());       //milliseconds since January 1, 1970 