const apiUrl = "https://odd-teal-caridea-tux.cyclic.app/adminRoute"


let AllReq = document.getElementById("booking")
let totalFees =  document.getElementById("totalFees")
async function AllBookings(){
    let res = await fetch(apiUrl + "/allBooking", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      let response = await res.json()
      console.log(response.bookings)

      AppendDetails(response.bookings)
     
}
AllBookings()


function AppendDetails(data){
    let sum =0
    data.forEach((ele)=>{
        sum += ele.fees
        let div = document.createElement("div")
        div.setAttribute("class","cont")
        
        let name = document.createElement("h5")
        name.innerText =  "Name: "+ele.StudentName

        let CourseName = document.createElement("h5")
        CourseName.innerText =  "CourseName: "+ele.courseName

        let duration= document.createElement("h5")
        duration.innerText =  "Duration: "+ele.duration

        let email = document.createElement("h5")
        email.innerText =  "Email : "+ ele.email

        let fees = document.createElement("h5")
        fees.innerText = "Fees : "+ele.fees

        let teacherName = document.createElement("h5")
        teacherName.innerText = "teacherName  : " +ele.teacherName
        
        div.append(name,CourseName,duration, email,fees,teacherName)
        AllReq.append(div)
    })
    let h4 = document.createElement("h4")
    h4.innerText = "Total Fees:  "+ sum
    totalFees.append(h4)
}