import React from 'react'
import './About.css'
import about_img from '../images/images/CEO.jpg'
import play_icon from '../images/images/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={() => {setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h2>WHO WE ARE</h2>
              <p>Jeds Fashion is a leading clothing brand specializing in handcrafted, hand-stitched clothing that meets the highest standards of quality and craftsmanship. Our mission is to create a place where every customer can find the perfect outfit, whether it's a casual day wear, a formal event, or a special occasion, with our innovative, stylish, and affordable products.</p>
            <h2>VISION STATEMENT</h2>
              <p>Our vision is to be the best brand that provides quality clothing that meet local demands while also competing favourably with foreign fashion brands. We create clothes that combine simplicity with elegance, all within a practical and realistic budget. </p>
            <h2>QUALITY AND STYLE</h2>
            <p>We specialize in making custom fashion items for men, women, and children from the finest fabrics available on the market today! JEDS FASHION is one of the best brand in Nigeria. We are a team with expertise and creativity that will make your custom fashion items from what fabric is available today!</p>
        </div>
    </div>
  )
}

export default About