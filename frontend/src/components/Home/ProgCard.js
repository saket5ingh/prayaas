import React from 'react'
import { useState } from 'react';


function ProgCard({title, img, content}) {
  const [isHover, setIsHover] = useState(false);

  function stylecard(){
    if(isHover){
      return {height:"auto"}
    }
  }
  const handleMouseEnter = () => {
     setIsHover(true);
  };
  const handleMouseLeave = () => {
     setIsHover(false);
  };

// const el = document.getElementById("progbox")
// const imgel = document.getElementById("imgboxid")
  return (
    <div>
      {/* {console.log(el.offsetHeight+imgel.offsetHeight)} */}
       <div className="cardd" onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}> 
          
          <div className="imgbox" id='imgboxid'>
           <img  src={img} />
            
            <h2 className='prog-title mt-2'>{title}</h2>
           
          </div>
        
          <div className="prog-content" >
            <p id="progbox">
             {content}
            </p>
          </div>
        </div>
    </div>
  )
}

export default ProgCard
