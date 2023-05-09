let access = localStorage.getItem("status")
console.log(access)
let append = document.getElementById("appendprofile")
let getstarted = document.getElementById("login");
let userdetials = JSON.parse(localStorage.getItem("Userdetials"))
console.log(userdetials)
let avatar = JSON.parse(localStorage.getItem("avatar"))
console.log(avatar)

// appendprofile

if(access === "true"){
    getstarted.style.display = 'none';
    let data = `
    <div>
    <div class="nav-link" id="collaborate" href="#">
    <a href="profile.html"><img style="width: 30px;height: 30px;" src=${avatar} /></a>
    </div>
    </div>
    `
    append.innerHTML=data  
}