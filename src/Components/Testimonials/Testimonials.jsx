import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../images/images/next-icon.png'
import back_icon from '../images/images/back-icon.png'
import user_1 from '../images/images/19.jpg'
import user_2 from '../images/images/Gospel.jpg'
import user_3 from '../images/images/7.jpg'
import user_4 from '../images/images/26.jpg'


export const Testimonials = () => {

    const slider = useRef();
        let tx = 0;
    const slideForward = () =>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform =  `translateX(${tx}%)`
    } 
    const slideBackward = () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform =  `translateX(${tx}%)`
    } 


  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="review">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Wizzy Kiade</h3>
                                <span>Port Harcourt</span>
                            </div>
                        </div>
                        <p>"I'm always impressed by the craftsmanship and attention to detail. Every button, seam, and lining is carefully done. My clothes feel luxurious, and I get compliments every time I wear them!"</p>
                    </div>
                </li>
                <li>
                    <div className="review">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Gospel Tigiri</h3>
                                <span>Lagos</span>
                            </div>
                        </div>
                        <p>"I needed a last-minute outfit, and this tailor pulled it off beautifully without compromising on quality. I’ll definitely be returning for future events!"</p>
                    </div>
                </li>
                <li>
                    <div className="review">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Kingsley Moore</h3>
                                <span>Akwa-Ibom</span>
                            </div>
                        </div>
                        <p>"I went in with a basic idea, and my tailor helped me shape it into something extraordinary. They gave me great design tips and created a final piece that exceeded my expectations."</p>
                    </div>
                </li>
                <li>
                    <div className="review">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Charity Tigiri</h3>
                                <span>Benin</span>
                            </div>
                        </div>
                        <p>"Not only is the sewing well done, but the tailor helped me choose high-quality fabrics that suit Nigeria’s climate. I’ve worn my outfits many times, and they still look and feel new!"</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}
