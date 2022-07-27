import './CatalogParticle.css';
import image from '../../../assets/car-test.jpg';
import { Link } from 'react-router-dom';

export const CatalogParticle = () => {
    return(
        <section className="car">
            <h3>Chevrolet Chevron 1.6 TDI</h3>
            <img src={image} alt="" />
            <p className="year"><b>Year: </b>2006</p>
            <p className="price"><b>Price: </b>215000 $</p>
            <Link to="/details">Details</Link>
        </section>
    )
};