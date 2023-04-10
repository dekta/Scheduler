let Loginbutton = document.getElementById("Sub_btn")

Loginbutton.onclick = async() =>{
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    console.log("hi")
    const url = "https://odd-teal-caridea-tux.cyclic.app/userRoutes/login";
    const data = {
        email: email,
        password: password
    };
    console.log(data)
    let res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    const response = await res.json();

    if(response.msg === "Login successfull" && response.isAdmin==true){
        window.location.href = "admin.html"
    }
    else{
      alert("You are not Admin")
    }

}

