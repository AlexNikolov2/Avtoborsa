import React from 'react';
import './LandingPage.css';
import landing from '../../../assets/landing-1.jpg';

export const LandingPage = () => {
    return(
        <section className="landing">
            <img src={landing} alt=""/>
            <h1 className="landing-up">Yet to find the car you want?</h1>
            <h1 className="landing-center">A V T O B O R S A</h1>
            <p className="landing-bottom">Avtoborsa is the place to find the car of your dreams. Find, buy and drive!</p>
            <ul>
                <li><i class="fa-solid fa-car-side"></i>Lots of cars</li>
                <li><i class="fa-solid fa-clock"></i>Time Effecient</li>
                <li><i class="fa-solid fa-universal-access"></i>Easily accessible</li>
            </ul>
            <a href="/">Find your car now <i class="fa-solid fa-magnifying-glass"></i></a>
        </section>
    )
}