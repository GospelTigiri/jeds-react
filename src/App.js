import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Design from './Components/Design/Design'
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Photos from './Components/Photos/Photos';
import { Testimonials } from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { VideoPlayer } from './Components/VideoPlayer/VideoPlayer';


function App() {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>   
      <Hero/> 
      <div className="container">
        <Title subTitle='Our Latest Design' title='Simplicity is the Beauty of true Elegance !' />
        <Design/> 
        <About setPlayState={ setPlayState}/>
        <Title subTitle='Gallary' title='Jeds Fashion Photos'/>
        <Photos/>
        <Title subTitle='Testimonials' title='What Our Customer Says'/>
        <Testimonials/>
        <Title subTitle='Contact Us' title='Send a message'/>
        <Contact/>
        <Footer/>
      </div>
       <VideoPlayer playState={playState} setPlayState={ setPlayState}/>
    </div>
  )
}

export default App;