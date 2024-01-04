import React from 'react'
import  './ExpCard.css'
import {BsDash} from 'react-icons/bs'
function ExpCard({content}) {
 

  return (
//     <div className="card-cont">
//      <div className="card">
//   <div className="card-body">
//     <h5 className="card-title">Name</h5>
//     <h6 className="card-subtitle mb-2 text-body-secondary">Student</h6>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
//   </div>
// </div>
// <div className="card">
//   <div className="card-body">
//     <h5 className="card-title">Name</h5>
//     <h6 className="card-subtitle mb-2 text-body-secondary">Student</h6>
//     <p className="card-text">xample teh no headi nthe campus and i am te =he geor ekrtj rrjd title and make up the bulk of the card's content.</p>
    
//   </div>
// </div>

// <div className="card">
//   <div className="card-body">
//     <h5 className="card-title">Name</h5>
//     <h6 className="card-subtitle mb-2 text-body-secondary">Student</h6>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
//   </div>
// </div>


    // </div>



    <blockquote className='quote-card'>  
   <p> {content}<p/>
   </p><cite><BsDash/> Prayaasi</cite>
</blockquote>

  )
}

export default ExpCard
