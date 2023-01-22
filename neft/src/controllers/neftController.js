const neftModel = require("../models/neft");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const SECRET_KEY = process.env.SECRET_KEY;

const fetch = require('node-fetch');


const signup = async (req, res) =>{

    

    // const existingUser = await userModel.findOne({ email : email});
    // if(existingUser){
    //     return res.status(400).json({message: "User already exists"});

    // }
}


const createneft = async (req, res) =>{

const {bankname,receiverano,ifsc,transamount} = req.body;


    h=req.userId
    
    j=req.body.receiverano+'*'+transamount.toString()
    const mydata = await fetch("http://localhost:5001/users/data/"+h);
    const respons = await mydata.json();
    console.log(respons.upi)
    i=respons.upi+'*'+transamount.toString()
    if(h==receiverano){
        res.status(500).json({message: "same account transfer => wrong"});
    }
    else if(transamount>respons.amount){
        res.status(500).json({message: "less amount present in your account!!!"});
    }
    else{
    const mydata1 = await fetch("http://localhost:5001/users/changeprofile/"+i,  {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        }});
    //const respons1 = await mydata1.json();
    console.log(mydata1) 
    const mydata2 = await fetch("http://localhost:5001/users/changebyneft/"+j,  {
        method: 'PUT',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0YXJrMTIzQGdtYWlsLmNvbSIsImlkIjoiNjNhYzhjN2ZjYzZmODM5NTRlYjI3NTM2IiwiaWF0IjoxNjcyMjU2OTQ0fQ.xFnyix8MuLSWQh1KEgHOyJ_x51JtRqYmvqf4qyBGBps',
          'Content-type': 'application/json',
           }});
    //const respons2 = await mydata2.json();
    console.log(mydata2) 
    const newNote = new neftModel({
        senderano: req.userId,
        bankname : bankname,
        receiverano : receiverano,
        ifsc : ifsc,
        transamount:transamount
    });

    try {
        
        await newNote.save();
        res.status(201).json(newNote);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

}

const updateneft = async (req, res) =>{
    const id = req.params.id;
    const {bankname,receiverano,ifsc} = req.body;

    const newNote = new impsModel({
    //senderano: req.userId,
    bankname : bankname,
    receiverano : receiverano,
    ifsc : ifsc
    });

    try {
        await neftModel.findByIdAndUpdate(id, newNote, {new : true});
        res.status(200).json(newNote);
    
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }

}

const deleteneft = async (req, res) =>{

const id = req.params.id;
try {
    
    const note = await neftModel.findByIdAndRemove(id);
    res.status(202).json(note);

} catch (error) {
    console.log(error);
    res.status(500).json({message: "Something went wrong"});
}
}

const getneft = async (req, res) =>{
try {
    console.log(req.userId)
    const notes = await neftModel.find({senderano : req.userId});
    res.status(200).json(notes);

} catch (error) {
    console.log(error);
    res.status(500).json({message: "Something went wrong"});
}
}
const getall = async (req, res) =>{
try {
    
    const notes = await neftModel.find({});
    res.status(200).json(notes);

} catch (error) {
    console.log(error);
    res.status(500).json({message: "Something went wrong"});
}
}

module.exports = {
createneft,
deleteneft,
getneft,
getall
}
