import "./DetailsListing.css";
import image from "../../../assets/car-test.jpg";

export const DetailsListing = () => {
  return (
    <section className="container">
      <div className="details">
        <h2>Chevrolet Chevron 1.6 HDI</h2>
        <img src={image} alt="alt text" />
        <article className="infos">
          <p>
            <b>Year:</b> 2003
          </p>
          <p>
            <b>Price:</b> 226000$
          </p>
          <p>
            <b>Type:</b> Petrol
          </p>
        </article>
        <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          iure eos soluta vitae aliquam quos numquam distinctio quisquam
          deserunt quasi aut ipsum quidem, eligendi voluptas facere nemo culpa
          sequi hic.
        </p>
        <div className="buttons">
            <button id="edit">Edit</button>
            <button id="delete">Delete</button>
        </div>
      </div>
    </section>
  );
};
