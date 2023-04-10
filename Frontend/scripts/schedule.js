

const tutor = JSON.parse(sessionStorage.getItem("teacherdet"));

// const url= "https://gray-tired-gharial.cyclic.app/"
const Teacher_Booking_id = tutor.Teacher_Booking_id
// console.log(tutor)
// console.log
let myslot = "";
let slot1 = document.getElementById("slot1");
let slot2 = document.getElementById("slot2");
let slot3 = document.getElementById("slot3");
let slot4 = document.getElementById("slot4");

if (slot1.checked === true) {
  myslot = slot1.value;
}
if (slot2.checked === true) {
  myslot = slot2.value;
}
if (slot3.checked === true) {
  myslot = slot3.value;
}
if (slot4.checked === true) {
  myslot = slot4.value;
}



const signupBtn = document.getElementById("submit");

signupBtn.addEventListener("submit", async function(event){
  event.preventDefault();
  //console.log("hi")
  const StudentName = document.getElementById("fName").value;
  const courseName = document.getElementById("lName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("mbl").value;
  const teacherName = tutor.teacherDetail.name
  

  let slot = "";
  let slot1 = document.getElementById("slot1");
  let slot2 = document.getElementById("slot2");
  let slot3 = document.getElementById("slot3");
  let slot4 = document.getElementById("slot4");

  if (slot1.checked === true) {
    slot = slot1.value;
  }
  if (slot2.checked === true) {
    slot = slot2.value;
  }
  if (slot3.checked === true) {
    slot = slot3.value;
  }
  if (slot4.checked === true) {
    slot = slot4.value;
  }

  const user = { StudentName, email, phone, courseName,Teacher_Booking_id ,teacherName,slot};
  console.log(user)
  const res = await fetch("https://odd-teal-caridea-tux.cyclic.app/booking/slotBooking", {
      method: "POST",
      headers: {
        "Content-type": "application/json"},
      body: JSON.stringify(user)
  })

  const response = await res.json();
  console.log(response);
  if(response.msg=="Booking Confirmed"){
    window.location.href='payment.html'
  }
 

})

let image= document.getElementById("image")
let name= document.getElementById("name")
let email= document.getElementById("email")
let edu= document.getElementById("edu")
let sub= document.getElementById("sub")
let exp= document.getElementById("exp")
let appendimage = document.getElementById("appendimage")


appendimage.src=tutor.teacherDetail.avatar
name.textContent="Name: "+" "+tutor.teacherDetail.name;
email.textContent=tutor.teacherDetail.email;
edu.textContent="Education: "+" "+tutor.qualification;
sub.innerText="Subject:"+" "+tutor.expertise;
exp.textContent="Experience:"+" "+tutor.experience+" "+"Years";
   

