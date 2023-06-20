function sumTwoNumbers(a, b) {
    return a + b;
}

let sum = sumTwoNumbers(15, 25);
console.log(sum);



// Write a function that takes two values, say a and b, as arguments. Return true if the two values are equal and of the same type
function checkEquality(a, b) {
    if (a === b && typeof a === typeof b) {
        return true;
    } else {
        return false;
    }
}

console.log("1, 1: ", checkEquality(1, 1));
console.log("1, 7: ", checkEquality(1, 7));
console.log("1, '1: '", checkEquality(1, "1"));
console.log("1, true: ", checkEquality(1, true));
console.log("irakli, irakli: ", checkEquality("irakli", "irakli"));



// Write a function that takes a value as argument. Return the type of the value.
function typeOfValue(a) {
    return typeof a;
}

console.log(typeOfValue(1));
console.log(typeOfValue(false));
console.log(typeOfValue({}));
console.log(typeOfValue(null));
console.log(typeOfValue('string'));
console.log(typeOfValue(['array']));



// Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.
function getNthCharter(a, n) {
    return a.charAt(n - 1)
}

console.log("abcd', 1: ", getNthCharter('abcd', 1));
console.log("'zyxbwpl', 5: ", getNthCharter('zyxbwpl', 5));
console.log("'gfedcba', 3: ", getNthCharter('gfedcba', 3));



// Remove first n characters of string
// Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result
function removeFirst3Characters(a) {
    // return a.substring(3);
    return a.slice(3);
}

console.log(removeFirst3Characters("irakli"));
console.log(removeFirst3Characters("123456789"));



// Get last n characters of string
// Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result
function getLastNCharacters(a) {
    return a.slice(-3);
}

console.log(getLastNCharacters("irakli"));
console.log(getLastNCharacters("123456789"));



//Find the position of one string in another
// Write a function that takes a string as argument. The string contains the substring 'is'. Return the index of 'is'.
function findSubstringIndex(str) {
    return str.indexOf('is');
}

console.log(findSubstringIndex("This is a test"));
console.log(findSubstringIndex("Hello, world!"));
console.log(findSubstringIndex("this is Javascript"));



//Extract first half of string
// Write a function that takes a string (a) as argument. Extract the first half a. Return the result
function extractFirstHalf(a) {
    return a.substring(0, a.length / 2);
}

console.log(extractFirstHalf("irakli"));
console.log(extractFirstHalf("parulava"));
console.log(extractFirstHalf("123456789"));



//Return the percentage of a number
// Write a function that takes two numbers (a and b) as argument. Return b percent of a
function calculatePercentage(a, b) {
    return (b / 100) * a;
}

console.log(calculatePercentage(100, 50) + "%");
console.log(calculatePercentage(25, 10) + "%");
console.log(calculatePercentage(125, 75) + "%");



// Basic JavaScript math operators
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. 
// Then multiply by d and divide by e. Finally raise to the power of f and return the result. Tipp: mind the order.
function mathOperations(a, b, c, d, e, f) {
    let result = ((((a + b) - c) * d) / e) ** f;
    return result;
}

console.log("result: " + mathOperations(2, 4, 1, 6, 2, 3));



// Check whether a string contains another string and concatenate
// Write a function that takes two strings (a and b) as arguments. 
// If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation
function concatenateStrings(a, b) {
    if (a.includes(b)) {
        return b + a;
    } else {
        return a + b;
    }
}

console.log(concatenateStrings("irakli", "ir"));
console.log(concatenateStrings("irakli", "parulava"));



// Check if a number is even
// Write a function that takes a number as argument. If the number is even, return true. Otherwise, return false
function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(2));
console.log(isEven(3));
console.log(isEven(17));
console.log(isEven(32));


//How many times does a character occur?
// Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.
function countOccurrences(a, b) {
    let count = 0;
    let index = b.indexOf(a);

    while (index !== -1) {
        count++;
        index = b.indexOf(a, index + 1)
    }

    return count;
}

console.log(countOccurrences("i", "irakli"));
console.log(countOccurrences("i", "How many times does a character occur?"));
console.log(countOccurrences("a", "How many times does a character occur?"));



// Write a function that takes two numbers (a and b) as arguments. 
// If a is smaller than b, divide a by b. Otherwise, multiply both numbers. Return the resulting value
function performTwoNumber(a, b) {
    if (a < b) {
        return a / b;
    } else {
        return a * b;
    }
}

console.log(performTwoNumber(2, 4));
console.log(performTwoNumber(7, 4));
console.log(performTwoNumber(12, 27));
console.log(performTwoNumber(20, 80));



// Split a number into its digits
// Write a function that takes a number (a) as argument. 
// Split a into its individual digits and return them in an array. 
// Tipp: you might want to change the type of the number for the splitting
function splitNumberIntoDigits(a) {
    let str = a + "";
    let string = str.split("");
    return string.map(digit => Number(digit))
}

console.log(splitNumberIntoDigits(123));
console.log(splitNumberIntoDigits(8465433));