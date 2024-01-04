const express = require("express");
const mongoose = require("mongoose");
const instamojo = require("instamojo-nodejs")
const REGISTER = mongoose.model("REGISTER");
const suggestion = require("../Models/suggestion")
const API_KEY = "test_607c8f615a7a263932b2411596d"
const AUTH_KEY="test_839f9efa544322c3adaee07de1f"
const router = express.Router();


instamojo.setKeys(API_KEY, AUTH_KEY);
instamojo.isSandboxMode(true);

router.post("/contribute/pay", (req,res)=>{
    console.log(req.body)
    var name = req.body.name;
    var amount = req.body.amount;
  
    var data = new instamojo.PaymentData();

const REDIRECT_URL = "http://localhost:3000/contribute/success";

data.setRedirectUrl(REDIRECT_URL);
data.send_email = "False";
data.purpose = "Donation"; // REQUIRED

data.amount = amount;
data.name = name; 



  
    instamojo.createPayment(data, function (error, response) {
      if (error) {
         res.status(400).json({error:"could not connect to payment gateway"})
      } else {
        // Payment redirection link at response.payment_request.longurl
        console.log("redirected")
        console.log(response)
        const res_body = JSON.parse(response);
   
       if(res_body.success)
       return res.status( 200 ).json( {link:res_body.payment_request.longurl});
        else{
            return res.status( 400 ).json({error:"could not procced due to some prb"});
        }
      }
    });
  });


router.post("/register",async(req,res)=>{
    console.log(req.body);

    const {name, contact, address,  wish_description}=req.body

    if(!name || !contact ||!address ||!wish_description){
      return  res.status(422).json({error:"Could not Register:Please fill all the fields"})
    }
   
    try{
   const saveduser= await REGISTER.findOne({name:name})

        if(saveduser){
        return res.status(422).json({error:"Already registered"})}
   
    
    const register = new REGISTER({name, contact, address,  wish_description})

    await register.save()
    
    res.status(200).json({message:"Successfully Registered"})
        }
        catch (err){
            console.log(err)

        }
})

router.post("/suggestion",async (req,res)=>{
  try{
    const {name,message} = req.body;
    if(!message){
     return res.status(500).json({
        success:false,
       error:"please fill all the fields"
      }
      )
    }
    else{
   const response = await suggestion.create({name,message})
   if(response){
    return res.status(200).json({
      success: true,
      message: "Message send successfully"
    })
   }
    }


  } catch(eror){
    console.log(error);
    res.status(400).json(
      {
        success:false,
       error: "an error occured"
      }
    )

  }
})


module.exports = router