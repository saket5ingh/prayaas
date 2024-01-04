import React, { useState } from 'react'
import RegisterForm from './RegisterForm'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function EventCard({img, details, register, getReg}) {
  const [ reg, Setreg] = useState(true)
  const [ readmore, Setreadmore] = useState(false)
  const handlereadmore = () => {
    Setreadmore(!readmore)
   }

   const registerfun = () => {
    Setreg(true)
    getReg(reg,details.name);
   }
   const notregfun = () => {
      toast.warn("Registration has not been started")
   }

  return (
    <>
     
    <div className='event-card border border-1'>
  
        {/* <div className='event-image' style={{backgroundImage:`url(${img})`,backgroundSize:"cover"}}> */}
        <img className='event-pic' src={img}/>  
    
        <div className="event-detail">
        <div className='event-info justify-content-start'>
            <h4>{details.name}</h4>
    
           {readmore?<p>{details.para}</p>:<p>{details.para.slice(0,400)+"......"}</p>} 
                

        </div>
        <div className='regist-btn-cont'>
         
        {register?<button type="button" onClick={registerfun} class="register-btn">Register</button>:<button type="button" onClick={notregfun} style={{backgroundColor:"rgb(151, 151, 151)"}} class="register-btn">Register</button>}
        <button type="button" onClick={handlereadmore}class="readmore-btn">{readmore?"Read Less":"Read More"}</button>
        </div>
               
                
        </div>


    </div>

      
    </>
  )
}

export default EventCard
