let defaultimg = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
const apiUrl = `https://odd-teal-caridea-tux.cyclic.app/scheduler/teacher`;
let teachers = document.getElementById("Teachers")

async function Teachers(){
  let res = await fetch(apiUrl + "/getAllTeacher", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    let response = await res.json()
    console.log(response)
    AppendDetails(response)
}

Teachers()


function  AppendDetails(response){
    response.forEach((ele)=>{
      let div = document.createElement("div")
      div.setAttribute("class","elements")

      let imgDiv = document.createElement("div")
      imgDiv.setAttribute("class","imgDiv")
      let img = document.createElement("img")
      if(ele.teacherDetail.avatar== undefined){
        img.src = defaultimg
      }
      else{
        img.src = ele.teacherDetail.avatar
      }
      
      imgDiv.append(img)

      let detDiv = document.createElement("div")
      detDiv.setAttribute("class","details")

      let name = document.createElement("p")
      name.innerHTML = `<b>Name: </b>` + ele.teacherDetail.name
      let email =document.createElement("p")
      email.innerHTML = `<b>Email: </b>` + ele.teacherDetail.email
      let qualification =document.createElement("p")
      qualification.innerHTML = `<b>Qualification: </b>` + ele.qualification
      let expertise =document.createElement("p")
      expertise.innerHTML = `<b>Expertise: </b>` + ele.expertise
      let btn  =document.createElement("button")
      btn.innerHTML = "More Info"

      btn.onclick = () =>{
        setDetails(ele) 
      }

      detDiv.append(name,email,qualification,expertise,btn)
      div.append(imgDiv,detDiv)
      teachers.append(div)
    })
}


function setDetails(ele){
  console.log(ele)
  sessionStorage.setItem("teacherdet",JSON.stringify(ele));
  window.location.href = "teacherInfo.html"
}


