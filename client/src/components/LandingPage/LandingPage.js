import React from 'react';
import './LandingPage.css';
import landing from '../../assets/landing-1.jpg';

function LandingPage(){
    return(
        <section className="landing">
            <img src={landing} alt=""/>
            <h1 className="landing-up">Yet to find the car you want?</h1>
        </section>
    )
}

export default LandingPage;