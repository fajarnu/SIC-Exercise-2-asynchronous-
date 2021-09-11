const getDataAPIwithAsync = async () => {
    let response = await fetch("https://api.github.com/users/fajarnu")
    response = await response.json()
    console.log(response);

    const avatar = document.getElementById("avatar")
    const name = document.getElementById("name")
    const userName = document.getElementById("username")
    const id = document.getElementById("id")
    const followers = document.getElementById("followers")
    const following = document.getElementById("following")
    const button = document.getElementById("button")

    avatar.src = response.avatar_url
    name.innerHTML = response.name
    userName.innerHTML = "user : " + response.login
    id.innerHTML = "id : " + response.id
    followers.innerHTML = "followers : " + response.followers
    following.innerHTML = "following : " + response.following
    button.href = response.html_url
}
getDataAPIwithAsync()
