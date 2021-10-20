import React from 'react';

import image from "../../Images/About.jpg"
import "./About.css"
const About = () => {
    return (
        <div className="my-class"> 
            <img src={image} alt="" />
            <h2>Founder & CEO of MedRay Diagnostic Center</h2>
            <h4>Dr. Monisha Chawdhury</h4>
            <h4>P.H.D From London University</h4>
        </div>
    );
};

export default About;