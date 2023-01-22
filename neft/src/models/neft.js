const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const neftSchema = mongoose.Schema({

    senderano : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    bankname : {
        type : String,
        required: true
    },
    receiverano : {
        type : String,
        required: true
    },
    ifsc : {
        type : String,
        required: true
    },
    transamount : {
        type: Number,
        required: true
    }


    

}, {timestamps : true});

module.exports = mongoose.model("neft", neftSchema);