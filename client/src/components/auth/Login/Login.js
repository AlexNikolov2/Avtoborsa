import React from 'react';
import './Login.css';
import background from '../../../assets/auth-img.jpg'

export const Login = () =>{
    return(
        <section className="login">
            <img src={background} alt="" />
            <form action="">
                <h1>Log In</h1>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Your email here"/>
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Your password here"/>
                </div>
                <button type='submit'>Log in!</button>
            </form>
        </section>
    )
}