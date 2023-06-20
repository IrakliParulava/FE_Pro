function sumOFMultiples(num) {
    let sumOfValue = 0;

    for(let i = 0; i <= num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sumOfValue += i
        }
    }

    return sumOfValue
}

console.log("Sum Of Multiple Value of 3 & 5 upto 10 digit is:", sumOFMultiples(10));