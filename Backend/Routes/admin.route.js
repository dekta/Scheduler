const express = require('express');

const {CourseModel} = require('../Models/course.model');
const {UserModel}  = require("../Models/User.model")
const {Feedback} = require('../Models/feedback.model')
const {BookingModel} = require('../Models/booking')
const {StudentModel} =  require("../Models/student.model")
const {TeacherModel} = require('../Models/teacher.model')
const AdminRouter = express.Router();


//All users
AdminRouter.get("/allusers", async(req,res)=>{
    try{
        const users= await UserModel.find()
        res.status(201).send({"users":users});
    }
    catch(err){
        res.status(500).json({message: 'Internal server error'});
    }
})


//All Reg. teachers
AdminRouter.get("/allRegTeacher", async(req,res)=>{
    try{
        const teachers= await TeacherModel.find({ispermanent:false})
        res.status(201).send({"teachers":teachers});
    }
    catch(err){
        res.status(500).json({message: 'Internal server error'});
    }
})


//change reg Teacher to permanent teacher
AdminRouter.patch("/makePermanent", async(req,res)=>{
    const id  = req.body.Teacher_Booking_id ;
    try{
        let filter = {Teacher_Booking_id:id}
        let update = {ispermanent:true}
        await TeacherModel.findOneAndUpdate(filter,update)
        res.send({"msg":"data updated"})
    }
    catch(err){
        res.send(err)
    }
   
})


// allPermanentTeacher
AdminRouter.get("/allperTeacher", async(req,res)=>{
    try{
        const teachers= await TeacherModel.find({ispermanent:true})
        res.status(201).send({"teachers":teachers});
    }
    catch(err){
        res.status(500).json({message: 'Internal server error'});
    }
})

//delete teacher
AdminRouter.delete("/deleteTeacher", async(req,res)=>{
    const id  = req.body.Teacher_Booking_id ;
    try{
        await TeacherModel.findOneAndDelete(id)
        res.send({"msg":"app deleted"})
    }
    catch(err){
        res.send(err)
    }
        
})


//All courses
AdminRouter.get("/allCourse", async(req,res)=>{
    try{
        const course= await CourseModel.find()
        res.status(201).send({"course":course});
    }
    catch(err){
        res.status(500).json({message: 'Internal server error'});
    }
})



//All Students
AdminRouter.get("/allStudents", async(req,res)=>{
    try{
        const students= await StudentModel.find()
        res.status(201).send({"students":students});
    }
    catch(err){
        res.status(500).json({message: 'Internal server error'});
    }
})


//All feedback
AdminRouter.get("/allFeedback", async(req,res)=>{
    try{
        const feed= await Feedback.find()
        res.status(201).send({"feedback":feed});
    }
    catch(err){
        res.status(500).json({message: 'Internal server error'});
    }
})

//All Booking
AdminRouter.get("/allBooking", async(req,res)=>{
    try{
        const bookings= await BookingModel.find()
        res.status(201).send({"bookings":bookings});
    }
    catch(err){
        res.status(500).json({message: 'Internal server error'});
    }
})


module.exports = {AdminRouter} ;