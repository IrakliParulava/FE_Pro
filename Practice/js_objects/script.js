// Write a function that takes an object with two properties as argument. It should return the value of the property with key country.
let object = {continent: "Asia", country: "Japan"}
let object1 = { country: "Georgia", continent: "Europe"};

function getCountry(obj) {
    return obj.country;
}

console.log(getCountry(object));
console.log(getCountry(object1));



// Write a function that takes an object with two properties as argument. 
// It should return the value of the property with key 'prop-2'. Tipp: you might want to use the square brackets property accessor
function getPropertyTwoValue(obj) {
    return obj["prop-2"];
}

let obj1 = { one: 1, 'prop-2': 2 };
console.log(getPropertyTwoValue(obj1));

let obj2 = { 'prop-2': 'two', prop: 'test' };
console.log(getPropertyTwoValue(obj2));



// Write a function that takes an object with two properties and a string as arguments. 
// It should return the value of the property with key equal to the value of the string.
function getValueByKey(obj, key) {
    return obj[key];
}

let obj3 = { continent: "Asia", country: "Japan" }
console.log(getValueByKey(obj3, "continent"));



// Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b'.
//  Return false otherwise. Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined. But the property itself exists.
function hasProperty(obj, key) {
    return key in obj
}

let object2 = {
     a : 1,
     b : 2,
     c : 3
}
console.log(hasProperty(object2, "b"));

let object3 = {
    x : "abc",
    y : true,
    z : undefined
}
console.log(hasProperty(object2, "z"));

let object4 = {
    m : null, 
    n : 0
}
console.log(hasProperty(object2, "z"));



// Write a function that takes a string as argument. Create an object that has a property with key 'key' 
// and a value equal to the string. Return the object.
function keyAndValueEqualString(str) {
    return { key : str }
}

console.log(keyAndValueEqualString("Hello"));
console.log(keyAndValueEqualString("World"));



// Write a function that takes two arrays (a and b) as arguments. 
// Create an object that has properties with keys 'a' and corresponding values 'b'. Return the object.
function createObject(a, b) {
    let obj = {};

    for (let i = 0; i < a.length; i++) {
        obj[a[i]] = b[i];
    }

    return obj
}

console.log(createObject(['a', 'b', 'c'], [1, 2, 3]));
console.log(createObject(['w', 'x', 'y', 'z'], [10, 9, 5, 2]));
console.log(createObject([1, 'b'], ['a', 2]));


// Write a function that takes an object (a) as argument. Return an array with all object keys.
function getObjectKeys(obj) {
    return Object.keys(obj)
}

let object5 = {
    a : 1,
    b : 2,
    c : 3
}
console.log(getObjectKeys(object5));



// Write a function that takes an object (a) as argument. Return the sum of all object values.
function sumObjectValues(obj) {
    let sum = 0;

    for (let key in obj) {
        if (typeof obj[key] === "number") {
            sum += obj[key]
        }
    }
    return sum
}

let object6 = {
    j : 9,
    i : 2,
    x : 3,
    z : 4
}
console.log("Sum of Object Values is: ", sumObjectValues(object6));



// Write a function that takes an object as argument. It should return an object with all original object properties. 
// except for the property with key 'b'
function filterProperty(obj) {
    let newObj = {};

    for (let key in obj) {
        if (key !== "b") {
            newObj[key] = obj[key]
        }
    }

    return newObj
}

let object7 = {
    e: 6,
    f: 4,
    b: 5, 
    a: 3 
}

console.log(filterProperty(object7));