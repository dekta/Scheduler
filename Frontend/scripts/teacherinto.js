let tutor_image = document.getElementById("tutor_image")
let eductaion = document.getElementById("set-eductaion")
let expertise = document.getElementById("set-expertise")
let first = document.getElementById("first_para")
let second = document.getElementById("second_para")
let Name = document.getElementById("name")

let teacherDetail = JSON.parse(sessionStorage.getItem("teacherdet"))
console.log(teacherDetail)

let img = document.createElement("img")
img.src = teacherDetail.teacherDetail.avatar
eductaion.innerText = teacherDetail.qualification
expertise.innerText = teacherDetail.expertise
Name.innerText = teacherDetail.teacherDetail.name
first.innerText = teacherDetail.teacherDetail.name + " graduated from Dartmouth College with a "+teacherDetail.qualification+ " in "+ teacherDetail.expertise+"."+teacherDetail.teacherDetail.name+" was born and raised in " +teacherDetail.address.city+"."
second.innerText =  teacherDetail.teacherDetail.name + " has always loved school, and  excited to be tutoring a wide variety of subjects including "+ teacherDetail.expertise +"." +"In high school "+ teacherDetail.teacherDetail.name+ " learned that  how become a wonderful mentors by teaching their  younger brother and cousins." +teacherDetail.teacherDetail.name+" had experiencce of "+  teacherDetail.experience + " Years."


tutor_image.append(img)

let tab_1 = document.getElementById("tab-head1")
let tab2_cont = document.getElementById("tab_1")
tab_1.onclick = () =>{
  tab1_cont.style.display = "none"
  tab2_cont.style.display = "block"
}  

let tab_2 = document.getElementById("tab-head2")
let tab1_cont  =document.getElementById("tab_2")
tab_2.onclick = () =>{
  
  tab2_cont.style.display = "none"
  tab1_cont.style.display = "block"
}
