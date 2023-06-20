// Write a function that takes two date instances as arguments. It should return true if the dates are equal. It should return false otherwise.
function equalDates(date1, date2) {
    return date1.getTime() === date2.getTime()
}

let date1 = new Date("2023-05-27");
let date2 = new Date("2023-05-27");
console.log(equalDates(date1, date2));

let date3 = new Date("2023-05-27");
let date4 = new Date("2023-05-28");
console.log(equalDates(date3, date4));



// Write a function that takes two date instances as argument. It should return the number of days that lies between those dates.
function getDaysBetweenDates(date1, date2) {
    let oneDay = 24 * 60 * 60 * 1000;
    let diffInDays = Math.round(Math.abs((date1.getTime() - date2.getTime()) / oneDay));
    return diffInDays;
}

let firstDate = new Date("2023-05-27");
let secondDate = new Date("2023-06-01");
console.log("Number of days that lies between those dates: ", getDaysBetweenDates(firstDate, secondDate));



// Write a function that takes two date instances as argument. It should return true if they fall on the exact same day. 
// It should return false otherwise.
function isSameDay(date1, date2) {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    )
}

let date5 = new Date("2023-05-27");
let date6 = new Date("2023-05-28");
console.log("Is same day: ", isSameDay(date5, date6));

let date7 = new Date("2023-05-27");
console.log("Is same day: ", isSameDay(date5, date7));



// Write a function that takes two date instances as argument. It should return true if the difference 
// between the dates is less than or equal to 1 hour. It should return false otherwise.
function isWithinOneHour(date1, date2) {
    return Math.abs(date1 - date2) / 1000 / 60 <= 60
}

let date8 = new Date("2023-05-27 21:23:00");
let date9 = new Date("2023-05-27 21:33:00");
let date10 = new Date("2023-05-27 23:33:00");
console.log("between the dates is less than or equal to 1 hour: ", isWithinOneHour(date8, date9));
console.log("between the dates is less than or equal to 1 hour: ", isWithinOneHour(date8, date10));



// Write a function that takes two date instances (a and b) as arguments. It should return true 
// if a is earlier than b. It should return false otherwise.
function isEarlier(date1, date2) {
    return date1 < date2
}

let date11 = new Date("2023-05-27 21:23:00");
let date12 = new Date("2023-05-26 21:33:00");
let date13 = new Date("2023-05-27 23:33:00");
console.log("date1 is earlier than date2: ", isEarlier(date11, date12));
console.log("date1 is earlier than date2: ", isEarlier(date11, date13));