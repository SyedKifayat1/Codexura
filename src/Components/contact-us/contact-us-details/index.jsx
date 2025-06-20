import React from 'react'
import './contact-us-details.css'
const ContactUsDetails = () => {
  return (
    <section className='contact-us-details' data-aos="fade-up">
        <div className='contact-details-card'>
            <div className="contact-details-icon"><i class="fa-solid fa-2x fa-headset"></i></div>
            <h3>Help & Support</h3>
            <p>Email <a href="mailto:codexura@gmail.com" style={{textDecoration:"none"}}>codexura@gmail.com </a>for help with a current product or service or refer to FAQs.</p>
        </div>
        <div className='contact-details-card'>
            <div className="contact-details-icon"><i class="fa-solid fa-2x fa-phone-volume"></i></div>
            <h3>Call Us</h3>
            <p>Call us to speak to a member of our team.</p>
            <span style={{color:"blue"}}>
              <a  
              href='https://wa.me/923118120088?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Codexura.%20Could%20you%20please%20provide%20me%20with%20some%20details%3F'
              target="_blank"
              rel="noopener noreferrer" 
              style={{textDecoration:"none"}}>+923118120088</a></span>
        </div>
        <div className='contact-details-card'>
            <div className="contact-details-icon"><i class="fa-solid fa-2x fa-location-dot"></i></div>
            <h3>Location</h3>
            <p>Lahore Pakistan</p>
        </div>
    </section>
  )
}

export default ContactUsDetails