

//start
const apiUrl = "https://odd-teal-caridea-tux.cyclic.app/userRoutes/";

const forgotPasswordForm = document.querySelector("#forgot-password-form");
const verifyOtpForm = document.querySelector("#verify-otp-form");
const changePasswordForm = document.querySelector("#change-password-form");

forgotPasswordForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    let email = forgotPasswordForm.elements.email.value;
    email = email.toLowerCase()

    let res = await fetch(apiUrl + "forgotPasword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })

    let response =  await res.json()
    console.log(response.msg)
    let app = document.getElementById("otpSend")
    if(response.msg === "otp send"){
        let m = response.msg
        app.innerText = m
    }

    else{
        app.innerText = "someting wrong"
    }
  });


  verifyOtpForm.addEventListener("submit", async(event) => {
    event.preventDefault();
    const otp = verifyOtpForm.elements.otp.value;
    let res = await fetch(apiUrl + "verifyOTP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ otp }),
    })

    let response = await res.json()
    console.log(response.msg)
    let app = document.getElementById("otpVerified")
    if(response.msg==="otp Verified"){
        app.innerText = "otp Verified"
    }
    else{
        app.innerText = "someting wrong"
    }
      
  });


  changePasswordForm.addEventListener("submit", async(event) => {
    event.preventDefault();
    const password = changePasswordForm.elements.password.value;
    let res = await fetch(apiUrl + "changePassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
    })

    let response =  await res.json()
      console.log(response.msg)
      let app =  document.getElementById('res')
    if(response.msg === "password updated"){
        let m = response.msg
       app.innerText = m
       window.location.href = "signup.html"
    }
    else{
        document.getElementById('res').innerHTML="someting wrong happen";
    }
  });
