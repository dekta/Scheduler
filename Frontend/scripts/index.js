let access = localStorage.getItem("status")
console.log(access)
let append = document.getElementById("appendprofile")

let userdetials = JSON.parse(localStorage.getItem("Userdetials"))
//console.log(userdetials)
let avatar = JSON.parse(localStorage.getItem("avatar"))
console.log(avatar)

// appendprofile

if(access === "true"){
    let getstarted = document.querySelector("#login");
    console.log(getstarted,"getstarted")
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

// don't touch the above code


function teacher(){
    window.location.href="teachers.html"
}


let searchtext = document.getElementById("searchtext");

function search(event){
    event.preventDefault();
    console.log(searchtext.value)
}