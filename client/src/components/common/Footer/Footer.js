import './Footer.css';
import {Link} from 'react-router-dom'

export const Footer = () => {
    return(
        <footer>
            <h1>This site is my React project defense for Softuni.</h1>
            <div className="wrap">
            <p>Created by Aleks Nikolov, 2022.</p>
            <Link to="https://github.com/AlexNikolov2/Avtoborsa"><i className="fa-brands fa-github"></i></Link>
            </div>
        </footer>
    )
}