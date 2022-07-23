import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom';

export const Header = () => {
    return(
        <header className="">
            <section className="logo">
                <h1>Avtoborsa</h1>
            </section>
            <ul>
                <li><Link to="/home"><i class="fa-solid fa-house"></i>Home</Link></li>
                {/*<li><Link to="/login"><i class="fa-solid fa-right-to-bracket"></i>Login</Link></li>
                <li><Link to="/register"><i class="fa-solid fa-user-plus"></i>Sign up</Link></li>*/}
                <li><Link to="/create"><i class="fa-solid fa-square-plus"></i>Create</Link></li>
                <li><Link to="/profile"><i class="fa-solid fa-address-card"></i>Profile</Link></li>
                <li><Link to="/"><i class="fa-solid fa-right-from-bracket"></i>Log out</Link></li>
                <li><Link to="/"><i class="fa-solid fa-magnifying-glass"></i>Search</Link></li>
            </ul>
        </header>
    )
}