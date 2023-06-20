// Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'
function getNthElement(a, n) {
    return a[n - 1]
}

console.log(getNthElement([1, 2, 4, 5, 6, 7,], 2));
console.log(getNthElement([10, 9, 7, 5, 4, 3,], 8));
console.log(getNthElement([10, 9, 7, 5, 4, 3,], 5));


// Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result
function removeFirstElements(a) {
    return a.slice(3);
}

let array = [1, 2, 3, 4, 5, 6];
console.log(removeFirstElements(array));



// Write a function that takes an array (a) as argument. Extract the first 3 elements of a. Return the resulting array
function extractFirstElements(a) {
    return a.slice(0, 3);
}

let array1 = [1, 2, 3, 4, 5, 6];
console.log(extractFirstElements(array));


// Write a function that takes an array (a) and a value (b) as argument. 
// The function should remove all elements equal to 'b' from the array. Return the filtered array.
function removeElements(a, b) {
    return a.filter(function (element) {
        return element !== b;
    });
}

let array2 = [1, 2, 3, 4, 5, 6];
console.log(removeElements(array2, 2));
let array3 = [1, 2, "2"];
console.log(removeElements(array3, "2"));


// Write a function that takes an array (a) as argument. Return the number of elements in a.
function countElements(a) {
    return a.length;
}

let fruit = ['apple', 'banana', 'orange'];
console.log(countElements(fruit));


// Write a function that takes an array of numbers as argument. Return the number of negative values in the array.
function countNegativeElements(a) {
    let count = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            count++
        }
    }
    
    return count;
}

let array4 = [1, -2, 3, -4, 5];
console.log("Negative Elements is: ", countNegativeElements(array4));



// Write a function that takes an array of strings as argument. Sort the array elements alphabetically. Return the result.
function sortArrayAlphabetically(array) {
    return array.sort()
}

let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(sortArrayAlphabetically(fruits));
let array5 = ['z', 'c', 'd', 'a', 'y', 'a', 'w'];
console.log(sortArrayAlphabetically(array5));


// Write a function that takes an array (a) and a number (n) as arguments. It should return the last n elements of a.
function getLastElements(a, n) {
    if (n >= a.length) {
        return a;
    } else {
        return a.slice(a.length - n);
    }
}

let array6 = [1, 2, 3, 4, 5]
console.log(getLastElements(array6, 3));
let array7 = ['a', 'b', 'c', 'd']
console.log(getLastElements(array7, 2));


// Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in descending order.
function sortNumbers(arr) {
    return arr.sort((a, b) => b - a)
}

let array8 = [5, 2, 9, 1, 7, 8]
console.log(sortNumbers(array8));


// Write a function that takes an array of numbers as argument. It should return the sum of the numbers.
function sumNumbers(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0)
}

let array9 = [5, 2, 9, 1, 7, 8]
console.log("Sum of Numbers: ", sumNumbers(array9));


// Write a function that takes an array of strings as argument. Return the longest string.
function findLongestString(arr) {
    let longestString = ""

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestString.length) {
            longestString = arr[i]
        }
    }

    return longestString
    // return arr.reduce((a, b) => a.length <= b.length ? b : a) ??????????? how it works ??????
}

let fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log("Longest String is: ", findLongestString(fruits1));


// Write a function that takes an array of numbers as argument. It should return the average of the numbers.
function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    let average = sum / arr.length
    return average
}

let array10 = [5, 2, 9, 1, 7, 8]
console.log(calculateAverage(array10));



// Write a function that takes an array as argument. 
// It should return true if all elements in the array are equal. It should return false otherwise.
function checkAllElementsEqual(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return false
        }
    }

    return true
}

let case1 = [true, true, true, true];
console.log(checkAllElementsEqual(case1));
let case2 = ['test', 'test', 'test']
console.log(checkAllElementsEqual(case2));
let case3 = [1, 1, 1, 2]
console.log(checkAllElementsEqual(case3));
let case4 = ['10', 10, 10, 10]
console.log(checkAllElementsEqual(case4));



// Write a function that takes arguments an arbitrary number of arrays. It should return an array containing the values of all arrays.
function mergeArrays(...arr) {     // here is nessesery ...(3 dots)
    return arr.flat()
}

let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
let arr3 = [true, false];

let mergedArray = mergeArrays(arr1, arr2, arr3);
console.log(mergedArray);



// Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. Return the sorted array
function sortArrayByProperty(arr) {
    return arr.sort((x, y) => x.b - y.b)
}

let arrayObject = [
    { a: 1, b: 5 },
    { a: 3, b: 8 },
    { a: 2, b: 2 },
]

console.log(sortArrayByProperty(arrayObject));


// Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. 
// Sort the merge result in ascending order. Return the resulting array
function mergeAndSortArrays(arr1, arr2) {
    let mergedArray = [...arr1, ...arr2];
    let uniqueArray = [...new Set(mergedArray)];
    let sortedArray = uniqueArray.sort((a, b) => a - b)
    return sortedArray
}

let arr4 = [1, 2, 3, 7];
let arr5 = [3, 4, 5, 1];

console.log("Merge And Sort Arrays: ", mergeAndSortArrays(arr4, arr5));