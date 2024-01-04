const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema(({
    name:{
        type:String,
        required: true
    },
    contact:{
        type:Number,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    wish_description:{
        type:String,
        required: true
    },

}))

mongoose.model("REGISTER", registerSchema);
