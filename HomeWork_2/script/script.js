function checkBirthday() {
    let inputDate = new Date(document.getElementById("birthday").value);
    let today = new Date();

    if (inputDate.getDate() === today.getDate() && inputDate.getMonth() === today.getMonth()) {
        document.getElementById("result").innerHTML = "Happy Birthday";
    } else {
        document.getElementById("result").innerHTML = "Sorry, Not Today";
    }
}