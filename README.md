## Tutoring Appointment Booking System

## Deploy Link
- Client-Side => https://spectacular-valkyrie-aa1b7c.netlify.app/
- Admin-Side => https://luminous-sprite-01d38d.netlify.app/

## Description

- We have developed this REST API for an Tutor Booking application. This API performs all the fundamental CRUD operations of any Tutor Booking platform with user validation at every step.
- This project is developed by team of 5 Back-end Developers during project week in Masai School.

## Techstack

- JavaScript
- MongoDB
- Nodejs
- Express
- Redis
- HTML
- CSS
- Boostrap

## Modules

- User Module
- Teacher Module
- Student Module
- Cource Module
- Booking Module
- Feedback Module

## ER Diagram
Following ER diagram indicates the database tables and thier interaction which we are using.
![WhatsApp Image 2023-03-28 at 19 55 01](https://user-images.githubusercontent.com/82109628/229362398-d2545398-01da-4b4e-8af1-9e4d747c184b.jpg)

## System Design
Following HLD diagram indicates the database build in components
<img width="626" alt="tutoring_HLD" src="https://user-images.githubusercontent.com/82109628/229363095-a1e994c8-d34c-48ee-bef1-052e37526639.png">


## Features

* User and Admin authentication & validation with session uuid having.
* Admin Features:
    * Administrator Role of the entire application
    * Only registered admins with valid session token can add/update/delete users from main database
    * Admin can access the details of different teachers and students.
    * only admin can covert register teacher to permanent tecaher.
    * Admin can see total teachers and students.
    
* Customer Features:
    * Registering themselves with application, and logging in to get the valid session token
    * Viewing list of available Tutors and booking a slot.
    * Only logged in users can update his/her slots, profile updation and other features.
    * if user forgot their password then he can update their password from their register email.
    * if user book a slot then he get notification with booked slot details.
    * students can give feedback to application and teachers.
 
 
 ## Contributors
- [@Yenda Vamshi Krishna](https://github.com/Vamshi8464)
- [@Birendra Mahto](https://github.com/bire210)
- [@Ekta Dhawal ](https://github.com/Dekta)
- [@Aniket Babariya](https://github.com/aniketbabariya24)
- [@Jay Shukla](https://github.com/jaysukla)











