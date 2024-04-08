import React from 'react'
import './Services.css'
import ServicesCard from '../../Generic/ServicesCard/ServicesCard'
import { Data } from '../../Constants/Data/Data';
import RightArrow from '../../Assets/Arrow Right.svg'

function Services() {
  return (
    <div className='services flex flex-column flex-center gap50'>
      <div>
        <div className='servicesHeading subheading-text text-center'>
        Your Trusted Partner for <span className='focused-color'>Technology</span> and<span className='focused-color'> Digital Transformation</span> 
        </div>
        <div className='servicesText gray-text'>
        our mission is to be your dedicated partner in propelling your vision forward, our commitment lies in advancing and accelerating your business outcomes. we provide the expertise and resources to bolster your journey.
        </div>
      </div>
        
        <div className='servicesList flex flex-wrap'>
            {
              Data.home.map((data)=>(
                <ServicesCard data={data} />
              ))
            }
        </div>
        <div className='seeAllBtn button-text flex flex-center'>
          <p>See all</p>
          <div style={{marginTop:'0.278vw'}}>
          <img src={RightArrow} alt='>' />  
        </div>
        </div>
    </div>
  )
}

export default Services