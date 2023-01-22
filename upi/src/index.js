const express = require("express");
const app = express();

const upiRouter = require("./routes/upiRoutes"); 
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const mongoose = require("mongoose");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());

app.use(cors());

app.use("/upi", upiRouter);


app.get("/", (req, res) =>{
    res.send("Test API");
});

const PORT = process.env.PORT;
//const PORT = 5003;

mongoose.connect(process.env.MONGO_URL)
//mongoose.connect("mongodb://127.0.0.1/upiDB")
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server started on port no. " + PORT);
    });
})
.catch((error)=>{
    console.log(error);
})


