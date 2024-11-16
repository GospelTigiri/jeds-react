import React from 'react'
import './Photos.css'
import photo_1 from '../images/images/J.JPG.jpg'
import photo_2 from '../images/images/G.JPG.jpg'
import photo_3 from '../images/images/K.JPG.jpg'
import photo_4 from '../images/images/N.JPG.jpg'
import Reactwhatsapp from 'react-whatsapp'

const Photos = () => {
  return (
    <div className='photos'>
        <div className="gallery">
            <img src={photo_1} alt="" />
            <img src={photo_2} alt="" />
            <img src={photo_3} alt="" />
            <img src={photo_4} alt="" />
        </div>
        <Reactwhatsapp number='+234 076 551 8443' className='mybtn'>Whatsapp Inquiry</Reactwhatsapp>
    </div>
  )
}

export default Photos