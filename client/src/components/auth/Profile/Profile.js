import "./Profile.css";
import { CatalogParticle } from "../../catalog/particle/CatalogParticle";
import { useState, useEffect } from "react";
import firebase from "../../../config/firebase"

export const Profile = () => {
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
            info: info,
          });
        });

        setProducts(arr);
        //console.log(arr);
      });
  }, []);

  return (
    <section className="profile">
      <h1>Alex Nikolov's uploaded listings</h1>
      <div className="cars">
        {products.length > 0 ? (
          products.map((product) => {
            console.log(product.info);

            return (
              <CatalogParticle
                key={product.id}
                id={product.id}
                item={product.info}
              />
            );
          })
        ) : (
          <p>No listings yet</p>
        )}
      </div>
    </section>
  );
};
