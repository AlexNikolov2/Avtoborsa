import './Profile.css';
import {CatalogParticle} from '../../catalog/particle/CatalogParticle'

export const Profile = () => {
    return (
        <section className="profile">
            <h1>Alex Nikolov's uploaded listings</h1>
            <div className="cars">
            <CatalogParticle/>
            <CatalogParticle/>
            <CatalogParticle/>
            <CatalogParticle/>
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