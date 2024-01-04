import React from 'react'
import "./Card.css"
function Card({title,batch,img,branch,email}) {
  return (
    <>
   
   
     <div className="team-card-cont" >
      <div className="rounded-circle" style={{backgroundImage:`url(${img})`,backgroundSize:"cover"}}></div>
      {/* <img src={img} className="rounded-circle" alt="..."/> */}
      <div className='team-name-cont'>
        <h2>{title}</h2>
        <p >{branch}<br/>
            {batch}<br/>
           {email}</p>
        </div>
      </div>
    
    </>
  )
}

export default Card
