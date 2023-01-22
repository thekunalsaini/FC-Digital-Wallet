const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const upiSchema = mongoose.Schema({

    sender : {
        type : String,
        required: true
    },
    receiver : {
        type: String,
        required: true
    },
    transamount : {
        type : Number,
        required: true
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

}, {timestamps : true});

module.exports = mongoose.model("upi", upiSchema);