import React from 'react'
import './Button.css';
import RightArrow from '../../Assets/Arrow Right.svg'

function Button({backgroundColor,borderColor='',color,text,arrow}) {
  return (
    <div style={{backgroundColor:`${backgroundColor}`,border:`0.104vw solid ${borderColor}`,color:`${color}`}} className='button button-text flex flex-center'>
        <p>{text}</p>
        <div style={{display: arrow ? 'block' : 'none', marginTop:'0.278vw'}}>
          <img src={RightArrow} alt='>' />  
        </div>
    </div>
  )
}

export default Button