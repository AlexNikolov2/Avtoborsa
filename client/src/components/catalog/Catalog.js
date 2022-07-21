import './Catalog.css';
import {CatalogParticle} from './particle/CatalogParticle.js'
import image from '../../assets/landing-1.jpg';

export const Catalog = () => {
    return (
        <section className="catalog">
            <img src={image} alt="" />
            <h1>All Listings</h1>
            <CatalogParticle/>
        </section>
    );
}