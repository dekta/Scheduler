const apiUrl = "https://odd-teal-caridea-tux.cyclic.app/adminRoute"


let AllReq = document.getElementById("req")
async function AllTeacher(){
    let res = await fetch(apiUrl + "/allRegTeacher", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      let response = await res.json()
      console.log(response.teachers)
      AppendDetails(response.teachers)
     
}
AllTeacher()


function AppendDetails(data){
    data.forEach((ele)=>{
        let div = document.createElement("div")
        div.setAttribute("class","cont")
        
        let div1 = document.createElement("div")
        div1.setAttribute("id","btns")
        

        let name = document.createElement("h5")
        name.innerText =  "Name: "+ele.teacherDetail.name
        let email = document.createElement("h5")
        email.innerText =  "Email: "+ele.teacherDetail.email
        let qualification = document.createElement("h5")
        qualification.innerText =  "Qualification: "+ele.qualification
        let experience = document.createElement("h5")
        experience.innerText =  "Experience: "+ ele.experience
        let mobile = document.createElement("h5")
        mobile.innerText = "Mobile: "+ele.mobile
        let expertise = document.createElement("h5")
        expertise.innerText = "Expertise: " +ele.expertise
        let button = document.createElement("button")
        button.innerText = "Add Teacher"
        button.onclick = ()=>  UpdateToPermanent(ele)

        let delButton = document.createElement("button")
        delButton.innerText = "Delete Teacher"
        delButton.onclick = () =>DeleteTeacher(ele)

        div1.append(button,delButton)
        
        div.append(name,email,mobile,qualification,experience,expertise,div1)
        AllReq.append(div)
    })
}



async function UpdateToPermanent(ele){
  let data = ele.Teacher_Booking_id 
  let res = await fetch(apiUrl + "/makePermanent", {
    method: "PATCH",
    body: JSON.stringify({
      Teacher_Booking_id: data,
    }),
    headers: {
      "Content-Type": "application/json",
    },

  })
  let response = await res.json()
  console.log(response)
}

async function DeleteTeacher(ele){
  let data = ele.Teacher_Booking_id 
  let res = await fetch(apiUrl + "/deleteTeacher", {
    method: "DELETE",
    body: JSON.stringify({
      Teacher_Booking_id: data,
    }),
    headers: {
      "Content-Type": "application/json",
    },

  })
  let response = await res.json()
  console.log(response.msg)
}