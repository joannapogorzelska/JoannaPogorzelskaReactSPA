import React from "react"

import "../style/about.css"

import imageJa from "../image/ja.jpg"

function About() {
    return (

    <div className="about">
        <h4>Cześć!</h4>
        <p>    
        Nazywam się Asia, a ta strona powstała z miłości do jedzenia. Lubię gotować i dobrze zjeść, dlatego dużo biegam. Ukończyłam nawet kilka biegów ultra! 
        PS. Tak wyglądam chwilę po przebięgnięcu 50km!
        </p>
        <img src={imageJa} alt="Joanna Pogorzelska"/>
    </div>
    )
}
export default About