import './CatalogParticle.css';
//import image from '../../../assets/car-test.jpg';
import { Link } from 'react-router-dom';

export const CatalogParticle = ({id, item}) => {
    console.log(item);
    return(
        <section className="car">
            <h3>{item.name}</h3>
            <img src={item.imageUrl} alt="" />
            <p className="year"><b>Year: </b>{item.year}</p>
            <p className="price"><b>Price: </b>{item.price} $</p>
            <Link to={`/details/${id}`}>Details</Link>
        </section>
        
    )
};