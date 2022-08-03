import "./Catalog.css";
import { CatalogParticle } from "./particle/CatalogParticle.js";
import { useState, useEffect } from "react";
import firebase from "../../config/firebase";
//import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  doc,
} from "firebase/firestore";
import { db } from "../../config/firebase";

export const Catalog = () => {
  const [products, setProducts] = useState([]);
  const listingsCollectionRef = collection(db, "Listings");

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
            //console.log(product.info.product);

            return(
              <CatalogParticle
              key={product.id}
              id={product.id}
              item={product.info.product}
            />
            )
          })
        ) : (
          <p>No listings yet</p>
        )}
      </div>
    </section>
  );
};
