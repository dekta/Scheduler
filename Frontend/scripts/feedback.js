const url = "https://odd-teal-caridea-tux.cyclic.app/feedback/StudentFeedback";
  let Name =  document.getElementById("name").value
  let email = document.getElementById("email").value
  let btn_sub = document.querySelector("#Submit_Feedback");
  console.log(Name,email)
  btn_sub.onclick=async() => {
    let feedcon = document.querySelector("#typefeedback").value;
    if (feedcon.length == 0) {
      alert("Please give your valuable feedback");
    } else {
      let data={
        name:Name,
        email,
        message:feedcon
      };
      //console.log(data)
     try {
      let res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
       
      });
      let response = await res.json()

      if(response.msg==="feedback added"){
        alert("Your feedback sucessfully submitted")
        window.location.href = "index.html"
      }
      else{
        alert(response.msg)
      }
      
     } catch (error) {
      alert(error.message)
     }
      
      
    }
  };