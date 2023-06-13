function signIn(e) {
    e.preventDefault();
    let loginData = {
        "username": document.getElementById("username").value,
        "password": document.getElementById("password").value
    };

    fetch(serverURL + "/signin", {
        "headers": {
            "content-type": "application/json",
        },
        "body": JSON.stringify(loginData),
        "method": "POST",
    })
        .then((response) => {
            if (response.status === 200) {
                alert("Sign in successful");
                return response.json();
            } else if (response.status === 401) {
                alert("Invalid username or password");
            }
        })
}