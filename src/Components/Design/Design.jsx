import React from 'react'
import './Design.css'
import native_1 from '../images/images/13.jpg'
import native_2 from '../images/images/2.jpg'
import native_3 from '../images/images/4.jpg'
import native_4 from '../images/images/25.jpg'

const Design = () => {
  return (
    <div className='design'>
        <div className='native'>
            <img src={native_1} alt="native_6" />
        </div>
        <div className='native'>
            <img src={native_2} alt="native_2" />
        </div>
        <div className='native'>
            <img src={native_3} alt="native_8" />
        </div>
        <div className='native'>
            <img src={native_4} alt="native_25" />
        </div>
    </div>
  )
}

export default Design