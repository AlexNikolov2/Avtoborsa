import './CatalogParticle.css';
import { Link } from 'react-router-dom';
import UserContext from '../../../contexts/UserContext'
import {useContext, useState} from 'react';

export const CatalogParticle = ({id, item}) => {
    const user = useContext(UserContext);
    const [isShown, setIsShown] = useState(false);

    return(
        <section className="car"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
            
                
            <h3>{item.name}</h3>
            <img src={item.imageUrl} alt="" />
            <p className="year"><b>Year: </b>{item.year}</p>
            <p className="price"><b>Price: </b>{item.price} $</p>
            {isShown && (
            <div>
            {user?<Link  to={`/details/${id}`}>
            
          Details</Link> : ""}
          </div>
          )}
        </section>
        
    )
};