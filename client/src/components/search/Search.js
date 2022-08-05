import "./Search.css";
import "../catalog/particle/CatalogParticle.js";
import { CatalogParticle } from "../catalog/particle/CatalogParticle.js";
import { useState, useEffect} from "react";
import firebase from "../../config/firebase"

export const Search = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("Listings")
      .get()
      .then((data) => {
        let arr = [];
        data.forEach((doc) => {
          
          let info = doc.data();
          arr.push({
            id: doc.id,
            info: info
          });
          
        });
        
        setProducts(arr);
        //console.log(arr);
      });
  }, []);

  return (
    <section className="search">
      <h1>Search Page</h1>
      <form action="">
        <input type="text" placeholder="Car name/model" className="model"/>
        <button>Search <i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
      <article className="results">
      {products.length > 0 ? (
          products.map((product) => {
            console.log(product.info);

            return(
              <CatalogParticle
              key={product.id}
              id={product.id}
              item={product.info}
            />
            )
          })
        ) : (
          <p>No listings yet</p>
        )}
      </article>
    </section>
  );
};
