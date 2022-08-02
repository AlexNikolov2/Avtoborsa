import './CatalogParticle.css';
import image from '../../../assets/car-test.jpg';
import { Link } from 'react-router-dom';

export const CatalogParticle = (item, id) => {
    console.log(item);
    return(
        <section className="car">
            <h3>{item.item.name}</h3>
            <img src={item.item.image} alt="" />
            <p className="year"><b>Year: </b>{item.item.year}</p>
            <p className="price"><b>Price: </b>{item.item.price} $</p>
            <Link to={`/details/${item.id}`}>Details</Link>
        </section>
        
    )
};