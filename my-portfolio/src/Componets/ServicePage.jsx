import './ServicePage.css';
import AoS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function ServicePage() {
    useEffect(()=>{
        AoS.init({duration:3000})
    },[])
    return (
        <>
            <div className="serviceboxmain" id='service'>
                <div className="topic">
                    <h1>My Services.</h1>
                </div>
                <div className="servicebox1">
                    <div className="boxtext" data-aos="zoom-in-up">
                        <h4>Full-Stack Developer</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, aliquid?</p>
                        <span>Read More</span>
                    </div>
                    <div className="boxtext" data-aos="zoom-in-up">
                        <h4>Frontend Developer</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, aliquid?</p>
                        <span>Read More</span>
                    </div>
                    <div className="boxtext" data-aos="zoom-in-up">
                        <h4>Backend Developer</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, aliquid?</p>
                        <span>Read More</span>
                    </div>
                    <div className="boxtext" data-aos="zoom-in-up">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, aliquid?</p>
                        <span>Read More</span>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ServicePage;