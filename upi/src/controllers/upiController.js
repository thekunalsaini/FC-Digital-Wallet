const upiModel = require("../models/upi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;
//const SECRET_KEY = "NOTES_API";
const fetch = require('node-fetch');
const signup = async (req, res) =>{

    

        // const existingUser = await userModel.findOne({ email : email});
        // if(existingUser){
        //     return res.status(400).json({message: "User already exists"});

        // }
}


//create transfer of money
const createupi = async (req, res) =>{

    


    const {sender,receiver,transamount} = req.body;
    dataid=req.userId
    connectedString1=req.body.sender+'*'+transamount.toString()
    connectedString2=req.body.receiver+'*'+transamount.toString()
    const mydata = await fetch("http://localhost:5001/users/data/"+dataid);
    console.log(mydata)
    const respons = await mydata.json();
    console.log(respons) 
    if(sender!=respons.upi){
        res.status(500).json({message: "upi went wrong"});
    }
    else if(transamount>respons.amount){
        res.status(500).json({message: "less amount present in your account!!!"});
    }
    else{
    const mydata1 = await fetch("http://localhost:5001/users/changeprofile/"+connectedString1,  {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        }});
    //const respons1 = await mydata1.json();
    console.log(mydata1) 
    const mydata2 = await fetch("http://localhost:5001/users/changebyupi/"+connectedString2,  {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        }});
        // .catch((error) => {
            //rollback() code
        //     console.error('Error:', error);
        //   });
    //const respons2 = await mydata2.json();
    console.log(mydata2) 
    const newNote = new upiModel({
        sender: sender,
        receiver : receiver,
        transamount : transamount,
        userId : req.userId
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

const updateupi = async (req, res) =>{
    const id = req.params.id;
    const {sender,receiver,transamount} = req.body;

    const newNote = new upiModel({
        sender: sender,
        receiver : receiver,
        transamount : transamount,
        //userId : req.userId
    });

    try {
        await upiModel.findByIdAndUpdate(id, newNote, {new : true});
        res.status(200).json(newNote);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }

}

const deleteupi = async (req, res) =>{

    const id = req.params.id;
    try {
        
        const note = await upiModel.findByIdAndRemove(id);
        res.status(202).json(note);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

const getupi = async (req, res) =>{
    try {
        
        const notes = await upiModel.find({userId : req.userId});
        res.status(200).json(notes);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}
const getall = async (req, res) =>{
    try {
        
        const notes = await upiModel.find({});
        res.status(200).json(notes);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

module.exports = {
    createupi,
    deleteupi,
    getupi,
    getall,
    updateupi
}