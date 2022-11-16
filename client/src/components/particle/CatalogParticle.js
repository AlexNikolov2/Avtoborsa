import './CatalogParticle.css';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext'
import {useContext} from 'react';

export const CatalogParticle = ({id, item}) => {
    const user = useContext(UserContext);

    return(
        <section className="car"
        >
            
                
            <h3>{item.name}</h3>
            <img src={item.imageUrl} alt="" />
            <p className="year"><b>Year: </b>{item.year}</p>
            <p className="price"><b>Price: </b>{item.price} $</p>

            <div>
            {user?<Link  to={`/details/${id}`}>
            
          Details</Link> : ""}
          </div>
        </section>
        
    )
};