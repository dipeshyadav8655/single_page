import React from 'react'
import './ServicesCard.css'
import Icon from '../../Assets/image 3icon.svg'
import { Data } from '../../Constants/Data/Data'

function ServicesCard({data}) {
  return (
    <div className='ServicescardContainer flex flex-column flex-center'>
        <div className='w'>
            <img src={data.image} style={{width:'4.861vw'}} />
        </div>
        <div className='text-center'>
            <p className='title-text'>{data.title}</p>
            <p className='cardText  text text-left'>{data.discription}</p>
        </div>
        <div className='button-text'>
            Learn more 
        </div>
    </div>
  )
}

export default ServicesCard