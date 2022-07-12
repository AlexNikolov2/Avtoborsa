import React from 'react';
import './Register.css';
import background from '../../../assets/auth-img.jpg'

export const Register = () =>{
    return(
        <section className="register">
            <img src={background} alt="" />
            <section className="left">
                <h1>Benefits of being a logged in user at Avtoborsa:</h1>
                <ul>
                    <li><i class="fa-solid fa-car-side"></i>You can like as many car listings as you want!</li>
                    <li><i class="fa-solid fa-car-side"></i>You can list a car in our web app!</li>
                    <li><i class="fa-solid fa-car-side"></i>And many more...</li>
                    <li className="special">Come on, fill up the form and sign up!</li>
                </ul>
            </section>
            <form action="">
                <h1>Sign up</h1>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Your email here"/>
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Your password here"/>
                </div>
                <button type='submit'>Sign up!</button>
            </form>
        </section>
    )
}