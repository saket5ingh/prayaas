const mongoose = require("mongoose");

const suggestionSchema = new mongoose.Schema(({
    name:{
        type:String,
        required: false
    },
    message:{
        type:String,
        required: true
    },
}))

module.exports=mongoose.model("suggestions", suggestionSchema);
