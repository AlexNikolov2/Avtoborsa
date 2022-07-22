import './CatalogParticle.css';
import image from '../../../assets/car-test.jpg';

export const CatalogParticle = () => {
    return(
        <section className="car">
            <h3>Chevrolet</h3>
            <img src={image} alt="" />
            <p className="year">2006</p>
            <p className="price">215000</p>
            <p className="description"></p>
        </section>
    )
}