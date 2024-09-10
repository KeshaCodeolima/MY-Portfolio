import {useState,useRef} from 'react'
import './ContactPage.css';
import { FaEnvelope, FaPhone, FaHome } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactPage() {
    const [formData, setForm] = useState({
        user_name: '',
        user_email: '',
        message: '',
    })

    const [error, setError] = useState({
        user_name: '',
        user_email: '',
        message: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...formData, // Spread the existing form data
            [name]: value, // Update the specific field
        });
    };

    const validation = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.user_name) {
            newErrors.user_name = "Name is Requied."
        }
        if (!formData.user_email) {
            newErrors.user_email = "Email is Requied"
        } else if (!emailRegex.test(formData.user_email)) {
            newErrors.user_email = "Email is not valid."
        }
        if (!formData.message) {
            newErrors.message = "Message is Requied."
        }
        return newErrors;
    }

    const form = useRef();

    const submit = async (e) => {
        e.preventDefault();
        const ValidationErrors = validation();
        if (Object.keys(ValidationErrors).length > 0) {
            setError(ValidationErrors)
        } else {
            emailjs
                .sendForm('service_oy4at6h', 'template_xw6se89', form.current, '6B8ivzkQOW-eECsqa')
                .then(
                    () => {
                        Notify();
                        console.log("Successfully")
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
    }
    const Notify = () => toast.success("Thank Your. Your Email Send Successfully.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
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
                            <p><FaEnvelope className='icons' />kulasekarakeshan41@gmail.com.</p>
                            <p><FaPhone className='icons' />0765858504.</p>
                            <p><FaHome className='icons' />151/1 Andagalawaththa Bamunugedara Kurunegala.</p>
                        </div>
                    </div>
                    <div className="contactright">
                        <form ref={form} onSubmit={submit}>
                            <div className="sendmail">
                                <input type="" name='user_name' placeholder='Enter Your Name' 
                                onChange={handleInputChange} 
                                value={formData.user_name} />
                                {error.user_name && <p className='errors'>{error.user_name}</p>}

                                <input type="email" name='user_email' placeholder='Enter Your Email' 
                                onChange={handleInputChange} 
                                value={formData.user_email} />
                                {error.user_email && <p className='errors'>{error.user_email}</p>}

                                <textarea name='message' placeholder='Enter Your Message' 
                                onChange={handleInputChange} 
                                value={formData.message}></textarea>
                                {error.message && <p className='errors'>{error.message}</p>}

                                <button className='btn2'>Send</button>
                            </div>
                        </form>
                        <ToastContainer/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage
