fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        let sortedUsernames = users.map((user) => user.username).sort();
        console.log("Alphabetically sorted usernames:");
        console.log(sortedUsernames);

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((posts) => {
                const postCount = {};
                posts.forEach((post) => {
                    if (post.userId in postCount) {
                        postCount[post.userId]++;
                    } else {
                        postCount[post.userId] = 1;
                    }
                });

                console.log("Number of posts per user:");
                console.log(postCount);
            })
            .catch((error) => console.log("error for post:", error));
    })
    .catch((error) => console.log("error for users:", error));
