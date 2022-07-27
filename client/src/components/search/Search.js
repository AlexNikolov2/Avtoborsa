import "./Search.css";
import "../catalog/particle/CatalogParticle.js";
import { CatalogParticle } from "../catalog/particle/CatalogParticle.js";

export const Search = () => {
  return (
    <section className="search">
      <h1>Search Page</h1>
      <form action="">
        <input type="text" placeholder="Car name/model" class="model"/>
        <div className="group">
          <input type="number" placeholder="Price from" />
          <input type="number" placeholder="Price to" />
          <input type="number" placeholder="Year" />
        </div>
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
        <button>Search <i class="fa-solid fa-magnifying-glass"></i></button>
      </form>
      <article className="results">
        <CatalogParticle />
        <CatalogParticle />
        <CatalogParticle />
        <CatalogParticle />
        <CatalogParticle />
      </article>
    </section>
  );
};
