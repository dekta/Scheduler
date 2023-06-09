let access = localStorage.getItem("status")
console.log(access)
let append = document.getElementById("appendprofile")
let getstarted = document.getElementById("login");
getstarted.style.display = 'none';
let userdetails = JSON.parse(localStorage.getItem("Userdetials"))
console.log(userdetails)
let avatar = JSON.parse(localStorage.getItem("avatar"))
console.log(avatar)
let token =  JSON.parse(localStorage.getItem("token"))


if(access === true){
    console.log("Yes")
   
    let data = `
    <div>
    <div class="nav-link" id="collaborate" href="#">
    <a href="profile.html"><img style="width: 30px;height: 30px;" src=${avatar}/></a>
    </div>
    </div>
    `
    append.innerHTML=data  
 }



let address=userdetails.address


document.querySelector("#profileimg").src=avatar;

if(userdetails.isAdmin==true){
    document.querySelector("#usertype").innerText="Admin"
}else{
    document.querySelector("#usertype").innerText=userdetails

}

document.querySelector("#uname").innerText=userdetails.studentDetail.name;
document.querySelector("#email").innerText=userdetails.studentDetail.email;

document.querySelector("#qual").innerText=userdetails.standard || userdetails.qualification
document.querySelector("#mobile").innerText=userdetails.mobile;
document.querySelector("#gender").innerText=userdetails.gender;
document.querySelector("#add").innerText=userdetails.address.city+","+userdetails.address.state;

let logoutbtn=document.querySelector("#logoutbtn");
logoutbtn.addEventListener("click",logout)

async function logout(){

    try{
            localStorage.setItem("Userdetials","");
            localStorage.setItem("status",false)
            let data={token:token}
            const url = "https://odd-teal-caridea-tux.cyclic.app/userRoutes/logout";
            let res = await fetch(url,{
                method:"POST",
                'Access-Control-Allow-Origin':"*",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(data)
            })
            let response = await res.json();
            console.log("response:",response)
            window.location.href="index.html"
        }
        catch(err){
            console.log(err)
        }
}
