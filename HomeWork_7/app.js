function countDown(seconds) {
    return new Promise((resolve, reject) => {
        let count = seconds;
        let timer = setInterval(() => {
            if (count > 0) {
                console.log(count);
                count--;
            } else {
                resolve();
            }
        }, 1000);
    });
}

countDown(10)
    .then(() => {
        console.log("Countdown complete!");
    })