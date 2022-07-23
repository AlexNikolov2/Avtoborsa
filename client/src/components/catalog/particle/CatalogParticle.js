import './CatalogParticle.css';
import image from '../../../assets/car-test.jpg';

export const CatalogParticle = () => {
    return(
        <section className="car">
            <h3>Chevrolet</h3>
            <img src={image} alt="" />
            <p className="year"><b>Year: </b>2006</p>
            <p className="price"><b>Price: </b>215000</p>
            <a href="/">Details</a>
        </section>
    )
}