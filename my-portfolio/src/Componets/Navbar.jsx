import React from "react";
import './Navbar.css';

function Navbar(){
    return(
        <>
        <nav>
            <div className="Navmain">
                <div className="leftside">
                    <p>Keshan Kulasekara</p>
                </div>

                <div className="center">
                    <div className="iteams">
                        <a href="#home">Home</a>
                        <a href="#home">About Me</a>
                        <a href="#home">Skills</a>
                        <a href="#home">Contact Me</a>
                    </div>
                </div>

                <div className="rightside">
                    <button className="button">Contact Me</button>
                </div>
            </div>
        </nav>
        </>
    );
}
export default Navbar