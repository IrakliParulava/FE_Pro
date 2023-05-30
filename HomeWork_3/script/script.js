let arr = [1, 2, 3, 4, 5, "car", "book", "javascript"]

function searchAndReplace() {
    let valueForSearch = prompt("Enter for search");
    let newValue = prompt("Enter New value");

    let index = arr.indexOf(valueForSearch);

    if (index !== -1) {
        arr[index] = newValue;
        document.getElementById("result").innerHTML = "Replaced Successfully! You have replaced item " + valueForSearch + " with item " + newValue
    } else {
        document.getElementById("result").innerHTML = "The element was not found in the array. You can Choose element for this array: " + arr 
    }
}