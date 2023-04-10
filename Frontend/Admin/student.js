const apiUrl = "https://odd-teal-caridea-tux.cyclic.app/adminRoute"


let student = document.getElementById("student")
async function AllStudent(){
    let res = await fetch(apiUrl + "/allStudents", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      let response = await res.json()
      console.log(response.students)
      AppendDetails(response.students)
     
}
AllStudent()


function AppendDetails(data){
    data.forEach((ele)=>{
        let div = document.createElement("div")
        div.setAttribute("class","cont")
        
        let div1 = document.createElement("div")
        div1.setAttribute("id","btns")
        
        let name = document.createElement("h5")
        name.innerText =  "Name: "+ele.studentDetail.name
        let email = document.createElement("h5")
        email.innerText =  "Email: "+ele.studentDetail.email
        
        let standard = document.createElement("h5")
        standard.innerText =  "Standard: "+ele.standard

        let courseName = document.createElement("h5")
        courseName.innerText =  "courseName: "+ ele.courseName

        let mobile = document.createElement("h5")
        mobile.innerText = "Mobile: "+ele.mobile
        let price = document.createElement("h5")
        price.innerText = "Fees  : " +ele.price

        let button = document.createElement("button")
        button.innerText = "Add Teacher"
        button.onclick = ()=>  UpdateToPermanent(ele)

        let delButton = document.createElement("button")
        delButton.innerText = "Delete Teacher"
        delButton.onclick = () =>DeleteTeacher(ele)

        div1.append(button,delButton)
        
        div.append(name,email,mobile,standard)
        student.append(div)
    })
}