import './CreateListing.css'

export const CreateListing = () => {
  return (
    <section className="create">
        <img src="" alt=""/>
      <form>
        <input type="text" placeholder="Car name/model" />
        <input type="number" placeholder="price" />
        <input type="number" placeholder="year" />
        <input type="file" />
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
      </form>
    </section>
  );
};
