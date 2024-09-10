import React from 'react'
import './ContactPage.css';
import { FaEnvelope,FaPhone,FaHome } from "react-icons/fa";

function ContactPage() {
    return (
        <>
            <div className="contactmain" id='contact'>
                <h1>Contact Page.</h1>
                <div className="contact">
                    <div className="contactleft">
                        <div className="itemscontact">
                            <span>Let's Talk,</span>
                            <p>I'm open to discussing Web Development and Mobile Application Development.</p>
                        </div>
                        <div className="contacttext">
                            <p><FaEnvelope className='icons'/>kulasekarakeshan41@gmail.com.</p>
                            <p><FaPhone className='icons'/>0765858504.</p>
                            <p><FaHome className='icons'/>151/1 Andagalawaththa Bamunugedara Kurunegala.</p>
                        </div>
                    </div>
                    <div className="contactright">
                        <div className="sendmail">
                            <input type="" placeholder='Enter Your Name' />
                            <input type="email" placeholder='Enter Your Email' />
                            <textarea name="" id="" placeholder='Enter Your Message'></textarea>
                            <button className='btn2'>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage
