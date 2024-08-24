import React from 'react'
import Image1 from '../Images/Photo.jpg';
import './AboutMe.css';

function AboutMe() {
  return (
    <>
    <div className="aboutme">
        <div className="image">
            <img src={Image1} alt="Myphoto" className='image1'/>
        </div>
        <div className="text">
            <p>I'm <span>Kehan Kulasekara</span>,Full-Stack Developer</p>
            <p>I specialize in building modern and responsive Web Applications.</p>
        </div>
        <div className="button">
            <button>Contact with me</button>
            <button>Download CV</button>
        </div>
    </div>
    </>
  )
}

export default AboutMe
