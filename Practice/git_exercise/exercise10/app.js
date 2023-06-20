function showStars(num) {
    for(let i = 0; i <= num; i++) {
        let pattern = "";
        for(let x = 0; x < i; x++) {
            pattern += "*"
        }
        console.log(pattern);
    }
}

showStars(10)