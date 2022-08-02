import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../../contexts/UserContext'
import {onLogout} from '../../'

export const Header = () => {
    const user = useContext(UserContext);

    return(
        <header className="">
            <section className="logo">
                <h1>Avtoborsa</h1>
            </section>
            <ul>
                <li><Link to="/home"><i className="fa-solid fa-house"></i>Home</Link></li>
                <li><Link to="/search"><i className="fa-solid fa-magnifying-glass"></i>Search</Link></li>
                {
                    user && 
                    <>
                        <li><Link to="/create"><i className="fa-solid fa-square-plus"></i>Create</Link></li>
                        <li><Link to="/profile"><i className="fa-solid fa-address-card"></i>Profile</Link></li>
                        <li><Link to="/"><i className="fa-solid fa-right-from-bracket"></i>Log out</Link></li>
                    </>
                }
                {
                    !user && 
                    <>
                        <li><Link to="/login"><i className="fa-solid fa-right-to-bracket"></i>Login</Link></li>
                        <li><Link to="/register"><i className="fa-solid fa-user-plus"></i>Sign up</Link></li>
                    </>
                }
            </ul>
        </header>
    )
}