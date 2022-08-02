import "./Catalog.css";
import { CatalogParticle } from "./particle/CatalogParticle.js";
import { useState, useEffect } from "react";
import firebase from "../../config/firebase";
import { Link } from "react-router-dom";

export const Catalog = () => {
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
    <section className="catalog">
      <h1>All Listings</h1>
      <div className="cars">
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
            /*return(
              <section className="car">
                  <h3>{product.info.name}</h3>
                  <img src={product.info.image} alt="" />
                  <p className="year"><b>Year: </b>{product.info.year}</p>
                  <p className="price"><b>Price: </b>{product.info.price} $</p>
                  <Link to={`/details`}>Details</Link>
              </section>
              
          )*/
          })
        ) : (
          <p>No listings yet</p>
        )}
      </div>
    </section>
  );
};
