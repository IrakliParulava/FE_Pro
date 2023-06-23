async function userBody() {
    try {
        let response = await fetch(serverURL + "/me", {
            headers: {
                "x-access-token": token
            }
        });

        let user = await response.json();
        let userName = user.username;
        let avatar = user.avatar;
        let fullName = user.fullName;
        let followers = user.followers;
        let following = user.following;
        let postsCount = user.posts_count;
        let bio = user.bio;
        console.log(userName);
        
        
        document.getElementsByClassName("profile-user-name")[0].innerHTML = userName;
        // document.getElementsByClassName("profile-image")[0].innerHTML = avatar;
        // document.getElementsByClassName("profile-real-name")[0].innerHTML = fullName;
        // document.getElementsByClassName("profile-real-bio")[0].innerHTML = bio;
        document.getElementsByClassName("profile-followers-count")[0].innerHTML = followers;
        document.getElementsByClassName("profile-following-count")[0].innerHTML = following;
        document.getElementsByClassName("profile-posts-count")[0].innerHTML = postsCount;
    } catch (error) {
        console.log("error: ", error);
    }
}

userBody()