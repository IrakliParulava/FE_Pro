function findMaxNumber(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}

console.log("Max Number is: ", findMaxNumber(10, 5));
console.log("Max Number is: ", findMaxNumber(10, 15));
console.log("Max Number is: ", findMaxNumber(1014, 1005));