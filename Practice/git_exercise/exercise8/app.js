let person = {
    name : "Dinanath",
    age : 35,
    country : "India",
    designation : "UI Developer"
}

let Technology = {
    name : "JavaScript",
    experience : 14,
    purpose : "Scripting language for web",
    developer : "Netscape Corporation"
}

function printProperties(obj) {
    for (let key in obj) {
        if (typeof(obj[key]) === "string") {
            console.log(key, ":", obj[key]);
        }
    }
}

printProperties(person)
console.log("------------------------");
printProperties(Technology);
console.log("------------------------");
