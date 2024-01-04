const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const path = require("path")
require('dotenv').config()
const PORT =  5000 || process.env.PORT;
require("./Models/registerSchema")
const REGISTER = mongoose.model("REGISTER");


mongoose.connect(process.env.DBlink).then(()=>{console.log("connected")}).catch((e)=>console.log(e))


const app = express();


app.use(express.json());
app.use(cors())
app.use(require("./router/router"))

// Serving the frontend
// app.use(express.static(path.join(__dirname,'./frontend/build')));
// app.get("*",(req,res)=>{
//     res.sendFile(path.join(__dirname,"./frontend/build/index.html"),
//     function(err){
//         res.status(500).send(err);
//     }
//     )
// })
app.listen(PORT,()=> console.log("running on port",PORT))