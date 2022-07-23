import './Catalog.css';
import {CatalogParticle} from './particle/CatalogParticle.js'

export const Catalog = () => {
    return (
        <section className="catalog">
            <h1>All Listings</h1>
            <div className="cars">
            <CatalogParticle/>
            <CatalogParticle/>
            <CatalogParticle/>
            <CatalogParticle/>
            <CatalogParticle/>
            <CatalogParticle/>
            </div>
            
        </section>
    );
}