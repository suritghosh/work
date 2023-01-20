import React from 'react'

export default function DotContainer(props) {
  return (<>
    { props.counter===0 ? 
        <div className="dot-container">
          <div className="dot" style={{fontSize:'40px',position:'relative',bottom:'9px',color:'rgba(0, 30, 211, 1)',padding:'0px 8px'}}>●</div>
          <div className="dot" style={{color:'rgba(0, 33, 91, 1)',padding:'0px 8px'}}>●</div>
          <div className="dot" style={{color:'rgba(0, 33, 91, 1)',padding:'0px 8px'}}>●</div>
        </div>:''}
        { props.counter===1 ? 
        <div className="dot-container">
          <div className="dot" style={{color:'rgba(0, 33, 91, 1)',padding:'0px 8px'}}>●</div>
          <div className="dot" style={{fontSize:'40px',position:'relative',bottom:'9px',color:'rgba(0, 30, 211, 1)',padding:'0px 8px'}}>●</div>
          <div className="dot" style={{color:'rgba(0, 33, 91, 1)',padding:'0px 8px'}}>●</div>
        </div>:''}
        { props.counter===2 ? 
        <div className="dot-container">
          <div className="dot" style={{color:'rgba(0, 33, 91, 1)',padding:'0px 8px'}}>●</div>
          <div className="dot" style={{color:'rgba(0, 33, 91, 1)',padding:'0px 8px'}}>●</div>
          <div className="dot" style={{fontSize:'40px',position:'relative',bottom:'9px',color:'rgba(0, 30, 211, 1)',padding:'0px 8px'}}>●</div>
        </div>:''}
        </>
  )
}
