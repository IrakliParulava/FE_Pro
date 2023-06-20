let array = [20, 72, 85, 93,]

function calculateAverage(arr) {
    let sum = 0;

    for (let i of arr) {
        sum += i
    }
    console.log(sum);
    console.log(sum/arr.lenght);
    return sum/arr.lenght
}

function findGrades(arr) {
    let average = calculateAverage(arr);

    if (average < 70) {
        return "D"
    };
    
    if (average < 80) {
        return "C"
    };
    
    if (average < 90) {
        return "B"
    };
    
    if (average <= 100) {
        return "A"
    };
}

console.log("Grade: ", findGrades(array));