import React, { useState } from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
function Footer() {
  const [name,setName]=useState("");
  const [message,setMessage]=useState("");
  const [wid,setWid]=useState(window.innerWidth);


   const handleSubmit=()=>{
    
    if(message.trim() ===""){
      toast.warn("Message cannot be empty") 
      return 
    }
  
    fetch("https://jade-fawn-tam.cyclic.app/suggestion",{
      method:"post",
      headers:{
         "Content-Type" : "application/json"
      },
      body:JSON.stringify({
          name,
          message       
      })
      })
  .then(res=>res.json()).then(
      data=>{console.log(data)
        if(data.error){
          toast.warn(data.error)   
        }
          if(data.message){
            toast.success("We received your suggestion")      
          }
      }
      ).catch(
        error=>{console.log(error)
      toast.error("Something went wrong")} )
      setName("");
      setMessage("");
  }
   
  return (
    <footer >
      <div className='footer'>
     <div className='suggestion-box' >
      <div style={{display:"flex", flexDirection:"column",alignItems:"flex-start", color:"white"}}>
      <h1>Drop your suggestions</h1>
      <label style={{fontSize:"1.2rem"}}>Name {"(optional)"}</label>
      <input onChange={(e)=>setName(e.target.value)} value={name} style={{textAlign:"left", fontSize:"1rem"}} type='text' name='name' size={wid<400?40 :48}/>
      <label  style={{fontSize:"1.2rem",paddingTop:"1.5rem"}}>Suggestion</label>
      <textarea onChange={(e)=>setMessage(e.target.value)} value={message} style={{textAlign:"left", fontSize:"1rem"}} name="message"  rows={4} cols={wid<400?45 :55} />
      <button className="suggest-button" onClick={()=>{ handleSubmit()}} type="submit">Send Message</button>
      </div>
     </div>

     <div  style={{display:"grid", gridTemplateColumns:"15rem 15rem"}}>
   
      <ul className='permalinks'>
        <li><a href="/">Home</a></li>
        <li><a href="/Events">Events</a></li>
        {/* <li><a href="/Contribute">Contribute</a></li> */}
        <li><a href="/Team">Team</a></li>
      </ul>
      
      
    <div className='social-handles'>
        <h3 style={{fontWeight:"bold"}}>Connect with us</h3>
        <div className="footer__socials">
        <FaFacebookF size={35}  onClick={()=>window.location.href="https://www.facebook.com/VNIT.PRAYAAS/"} />
        {/* <a href="https://instagram.com/prayaas__vnit?igshid=YmMyMTA2M2Y="><AiFillInstagram size={50}/></a> */}
       <AiFillInstagram size={40}  onClick={()=>window.location.href="https://instagram.com/prayaas__vnit?igshid=YmMyMTA2M2Y=" }/>

       <AiFillLinkedin size={40}  onClick={()=>window.location.href="https://in.linkedin.com/in/prayaas-vnit-10b808112"}/>
      </div>
      </div>
      </div>
     
    
    </div>
     {/* <div className="footer__copyright">
        <small>&copy; Prayaas Website. All rights reserved.</small>
      </div> */}
    </footer>
  )
}

export default Footer