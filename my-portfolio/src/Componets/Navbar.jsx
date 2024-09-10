import React from "react";
import './Navbar.css';

function Navbar(){
    return(
        <>
        <nav>
            <div className="Navmain">
                <div className="leftside">
                    <p>Kesha Web</p>
                </div>

                <div className="center">
                    <div className="iteams">
                        <a href="#home">Home</a>
                        <a href="#aboutme">About Me</a>
                        <a href="#service">Services</a>
                        <a href="#contact">Contact Me</a>
                    </div>
                </div>

                <div className="rightside">
                    <button className="button" onClick={()=>document.getElementById('contact').scrollIntoView({behavior:'smooth'})}>Contact Me</button>
                </div>
            </div>
        </nav>
        </>
    );
}
export default Navbar