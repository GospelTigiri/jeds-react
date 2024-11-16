import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './Hero.css';
import images from '../images/images/background2.webp'
import images1 from '../images/images/background3.webp'
import images2 from '../images/images/background4.webp'
import Reactwhatsapp from 'react-whatsapp';


const Hero = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item className='carousel-item'>
          <img className='carousel-image' src={images} alt={images} text="First slide" />
          <Carousel.Caption className='carousel-caption'> 
            <h3>The Perfect Fit, Every Time</h3>
            <p>Jeds Fashion</p>
            <Reactwhatsapp number='+234 076 551 8443' className='mybtn'>Whatsapp Inquiry</Reactwhatsapp>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='carousel-item'>
          <img className='carousel-image' src={images1} alt={images} text="Second slide" />
          <Carousel.Caption className='carousel-caption'>
            <h3>Elegance Redefined, Confidence Ignited</h3>
            <p>Timeless Style</p>
            <Reactwhatsapp number='+234 076 551 8443' className='mybtn'>Whatsapp Inquiry</Reactwhatsapp>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='carousel-item'>
          <img className='carousel-image' src={images2} alt={images} text="Third slide" />
          <Carousel.Caption className='carousel-caption'>
          <h3>Discover Your Perfect Fit Today</h3>
          <p>Simple but Classic</p>
          <Reactwhatsapp number='+234 076 551 8443' className='mybtn'>Whatsapp Inquiry</Reactwhatsapp>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Hero;