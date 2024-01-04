import React from 'react'

function QnaCard({question, ans,color}) {
  return (
    <div className='qna-card' style={color?{backgroundColor:"rgb(245, 179, 48)"}:{}}>
        <h2>{question}</h2>
        <hr
      style={{ borderTop: "3px solid black",width:"25em",marginLeft:"2.5em"}}
      />  
        <p>{ans}</p>
        
      
    </div>
  )
}

export default QnaCard
