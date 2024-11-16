import React from 'react'
import './Contact.css'
import msg_icon from '../images/images/msg-icon.png'
import mail_icon from '../images/images/mail-icon.png'
import phone_icon from '../images/images/phone-icon.png'
import location_icon from '../images/images/location-icon.png'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "e203e798-5720-4385-ba60-5ede6472226d");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Email Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Get in Touch <img src={msg_icon} alt="" /></h3>
            <p>Your feedback is essential in helping us improve. If you have questions, need support, or simply want to share your thoughts, please feel free to reach out to us!</p>
            <ul>
                <li><img src={mail_icon} alt="" />gospeltigiri@gmail.com</li>
                <li><img src={phone_icon} alt="" />+234 803-184-6516</li>
                <li><img src={location_icon} alt="" />No 9 Mini Woji Street, Woji Port Harcourt, Nigeria</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='mybtn dark-btn'>Submit now</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact