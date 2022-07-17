import './EditListing.css'
import image from '../../../assets/crud-img.jpg'

export const EditListing = () => {
  return (
    <section className="edit">
        <img src={image} alt=""/>
      <form>
        <input type="text" placeholder="Car name/model" />
        <div className="numbers">
          <input type="number" placeholder="price in $$$" />$
          <input type="number" placeholder="year" />
        </div>
        <input type="file" id="file"/>
        <fieldset>
          <legend>Fuel type</legend>
          <div>
            <input type="radio" />
            <label htmlFor="gas">LPG</label>

            <input type="radio" />
            <label htmlFor="gas">Gasoline</label>

            <input type="radio" />
            <label htmlFor="diesel">Diesel</label>

            <input type="radio" />
            <label htmlFor="electricity">Electricity</label>
          </div>
        </fieldset>
        <textarea name="description" id="" cols="30" rows="10" placeholder="Description"></textarea>
        <button>Edit Listing</button>
      </form>
    </section>
  );
};
