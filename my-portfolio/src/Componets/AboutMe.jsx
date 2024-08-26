import React from 'react'
import './AboutMe.css';

function AboutMe() {
  return (
    <>
    <div className="aboutmain" id='aboutme'>
      <div className="h1">
        <h1>About Me.</h1>
      </div>
      <div className="iteam">
        <div className="textAbout">
          <p className='text1'>I am a passionate Full-Stack developer with a focus on building modern and responsive Web Applications and Mobile Applications. With a strong foundation in both frontend and backend technologies,I strive to create seamless and efficient user experiences.</p>
        </div>
        <div className="lang">
          <div className="langlabel-container">
            <label htmlFor="" className='langlabel'>React JS</label>
            <div className="linerwidth">
              <div className="lineractjs"></div>
            </div>
          </div>
          <div className="langlabel-container">
            <label htmlFor="" className='langlabel'>HTML & CSS</label>
            <div className="linerwidthhtml">
              <div className="lineHTML"></div>
            </div>
          </div>
          
          <div className="langlabel-container">
            <label htmlFor="" className='langlabel'>Java</label>
            <div className="linerwidthjava">
              <div className="linejava"></div>
            </div>
          </div>
          <div className="langlabel-container">
            <label htmlFor="" className='langlabel'>Python</label>
            <div className="linerwidthpython">
            <div className="linepython"></div>
            </div>
          </div>
          <div className="langlabel-container">
            <label htmlFor="" className='langlabel'>Node JS</label>
            <div className="linerwidthnodejs">
              <div className="lineNodejs"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="experience1">
        <div className="experiencetext">
          <span>1+</span>
          <p>Years Experience</p>
        </div>
        <div className="experiencetext">
          <span>10+</span>
          <p>Projects Compeleted</p>
        </div>
        <div className="experiencetext">
          <span>6+</span>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutMe
