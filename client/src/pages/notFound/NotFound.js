import './NotFound.css'
import image from '../../assets/not-found.jpg'
import {Link} from 'react-router-dom';

export const NotFound = () => {
    return(
    <section className="notFound">
        <img src={image} alt="" />
        <p>404 Not Found</p>
        <p className="reason">The route you have selected is invalid.</p>
        <Link to="/home">Now let's go back to home <i className="fa-solid fa-house"></i></Link>
    </section>
    
    )
}