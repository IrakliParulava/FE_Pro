let serverURL = "http://65.109.13.139:9191";

let token = "";
token = localStorage.getItem("jwt");

async function postFeed() {
    try {
        fetch(serverURL + "/posts", {
            headers: {
                "x-access-token": token,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Data: ", data);
                data.map((item) => {
                    if (item.image) {
                        let onePost = `
                        <div class="col-md-4">
                            <div class="card card-01">
                                <img class="card-img-top" src="${item.image}" alt="Card image cap">
                                <div class="card-body">
                                    <span class="badge-box">
                                        <i class="fa fa-check"></i>
                                    </span>
                                    <h4 class="card-title">${item.title}</h4>
                                    <p class="card-text">${item.description}</p>
                                    <a href="#" class="btn btn-default text-uppercase">Explore</a>
                                </div>
                            </div>
                        </div>`;
                        document.getElementById("posts").innerHTML += onePost;
                    }
                });
            });
    } catch (error) {
        console.log("error: ", error);
    }
}

postFeed();
