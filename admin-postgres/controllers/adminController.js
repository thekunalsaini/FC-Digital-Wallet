const db = require('../db/index');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const SECRET_KEY = process.env.SECRET_KEY;
const SECRET_KEY = "ADMIN_API";

const signup = async (req, res) =>{

    const {username, email, password} = req.body;
    try {

        const existingUser = await db.query('SELECT * FROM admin WHERE email=$1',[req.body.email]);
        console.log(existingUser.rowCount)
        if(existingUser.rowCount){
            return res.status(400).json({message: "User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        
        const result = await db.query(
            "INSERT INTO admin ( id, username, password, email ) VALUES ($1,$2,$3,$4) RETURNING *",
            [req.body.id, req.body.username,hashedPassword,req.body.email]
          );
        const token = jwt.sign({email : result.email, id : result._id }, SECRET_KEY);
        res.status(201).json({user: result.rows[0], token: token});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }

}

const signin = async (req, res)=>{
    
    const {email, password} = req.body;

    try {
        
        const existingUser = await db.query('SELECT * FROM admin WHERE email=$1',[req.body.email]);
        console.log(existingUser.rowCount)
        if(!existingUser.rowCount){
            return res.status(404).json({message: "User not found"});
        }
        console.log(existingUser.rows[0].password)
        const matchPassword = await bcrypt.compare(password, existingUser.rows[0].password);

        if(!matchPassword){
            return res.status(400).json({message : "Invalid Credentials"});
        }

        const token = jwt.sign({email : existingUser.email, id : existingUser._id }, SECRET_KEY);
        res.status(200).json({user: existingUser.rows[0], token: token});


    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }

}
async function Deleteadmin(req, res) {
    try {
      const result = await db.query("DELETE FROM admin WHERE id=$1", [
        req.params.id
      ]);
      return res.json({ message: "Deleted" });
    } catch (err) {
      throw err;
    }
  };
module.exports = { signup, signin ,Deleteadmin};