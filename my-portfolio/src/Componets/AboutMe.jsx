import React from 'react'
import Image1 from '../Images/Photo.jpg';
import './AboutMe.css';

function AboutMe() {
  return (
    <>
    <div className="aboutme">
        <div className="line">
            <hr />
        </div>
        <div className="image">
            <img src={Image1} alt="Myphoto" className='image1'/>
        </div>
        <div className="text">
            <p className='textp1'>I'm <span>Kehan Kulasekara</span>, Full-Stack Developer.</p>
            <p className='textp2'>I specialize in building modern and responsive Web Applications and Mobile Applications.</p>
        </div>
        <div className="button1">
            <button className='btn1'>Contact with me</button>
            <button className='btn1'>Download CV</button>
        </div>
    </div>
    </>
  )
}

export default AboutMe
