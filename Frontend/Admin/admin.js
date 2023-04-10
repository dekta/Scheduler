const apiUrl = "https://odd-teal-caridea-tux.cyclic.app/adminRoute/"

let Ucount = document.getElementById("tu")
async function countUsers(){
    let res = await fetch(apiUrl + "allusers", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      let response = await res.json()
      let obj = response.users 

     Ucount.innerText =  Object.keys(obj).length
}
countUsers()


let Tcount = document.getElementById("tt")
async function countTeachers(){
    let res = await fetch(apiUrl + "/allperTeacher", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      let response = await res.json()
      console.log(response)
      let obj = response.teachers 

     Tcount.innerText =  Object.keys(obj).length
}
countTeachers()

let Scount = document.getElementById("ts")
async function countSudentss(){
    let res = await fetch(apiUrl + "allStudents", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      let response = await res.json()
      //console.log(response)
      let obj = response.students 

     Scount.innerText =  Object.keys(obj).length
}
countSudentss()


let fb = document.getElementById("feedbacks")
async function feedback(){
    let res = await fetch(apiUrl + "allFeedback", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      let response = await res.json()
      Appendfb(response.feedback)
}

feedback()

function Appendfb(response){
    console.log(response)
    response.forEach((ele)=>{
        let div = document.createElement("div")
        div.style.boxShadow  =  "rgba(149, 157, 165, 0.2) 0px 8px 24px"
        div.style.marginTop = "10px"
        div.style.padding = " 5px"
        
        let h15 = document.createElement("h5")
        let h25 = document.createElement("h5")
        let h35 = document.createElement("h5")

        h15.innerText = ele.name
        h25.innerText = ele.email
        h35.innerText = ele.message

        div.append(h15,h25,h35)
        fb.append(div)
    })
}