import React, { useState } from 'react'
import './NavBar.css'
import Logo from '../../asset/Logo.svg';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const [showOptions, setShowOptions] = useState(false)
  return (
    <div className='navMain'> 
    <div className='navContainer bg-black flex flex-space-between'>
        <div className='flex flex-center logo'>
        <img src={Logo} />
        <p className='button-text text-white'>Sphere Tech Labs</p>
        </div>
        <div className='flex flex-space-evenly text-white text menu'>
          <NavLink to={'Home'} style={{textDecoration:'none'}} onClick={()=>setShowOptions(false)}>Home</NavLink>
          {/* <NavLink>Home</NavLink>
          <NavLink>Home</NavLink>
          <NavLink>Home</NavLink> */}
        {/* <p></p> */}
        <p onClick={()=>setShowOptions(!showOptions)} style={{cursor:'pointer'}}>Service</p>
        <p>Technologies</p>
        <p>Industries</p>
        </div>
        <div className='whiteButton button-text'>
         <p>Contact</p>   
        </div>
    </div>
    {
      showOptions ? <div className='navDropDown'>
    <p><NavLink to={'Blockchain'} className='navLink' onClick={()=>setShowOptions(!showOptions)}>Blockchain</NavLink></p>
          <p><NavLink to={'Aiml'} className='navLink' onClick={()=>setShowOptions(!showOptions)}>AI ML</NavLink></p>
          <p><NavLink to={'DataAnalytics&BI'} className='navLink' onClick={()=>setShowOptions(!showOptions)}>Data Analytics</NavLink></p>
          <p><NavLink to={'DataEngin'} className='navLink' onClick={()=>setShowOptions(!showOptions)}>Data Engineering</NavLink></p>
          <p><NavLink to={'CloudTrasformation'} className='navLink' onClick={()=>setShowOptions(!showOptions)}>Cloud Transformation</NavLink></p>
          <p><NavLink to={'Qa'} className='navLink' onClick={()=>setShowOptions(!showOptions)}>QA Excellence</NavLink></p>
    </div> : ''
    }
    
    </div>
   
  )
}

export default NavBar