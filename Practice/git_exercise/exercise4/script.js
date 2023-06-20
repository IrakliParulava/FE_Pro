function isfizzBuzz(a) {
    if (typeof a !== 'number') {
        return ('Nan - Not a Number! Please Input Number');
    }

    if (a % 3 === 0) {
        return 'Fizz';
    }

    if (a % 5 === 0) {
        return 'Buzz';
    }

    if ((a % 3 === 0) && (a % 5 === 0)) {
        return 'FizzBuzz';
    }

    else {
        return 'Some odd number entered: ' + a;
    }

}

console.log(isfizzBuzz("asdasf"));
console.log(isfizzBuzz(9));
console.log(isfizzBuzz(10));
console.log(isfizzBuzz(30));
console.log(isfizzBuzz(11));