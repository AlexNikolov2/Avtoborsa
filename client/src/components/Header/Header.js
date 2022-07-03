import React from 'react';
import './Header.css'

function Header(){
    return(
        <header>
            <section className="logo">
                <h1>Avtoborsa</h1>
            </section>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Log in</a></li>
                <li><a href="/">Register</a></li>
            </ul>
        </header>
    )
}

export default Header;