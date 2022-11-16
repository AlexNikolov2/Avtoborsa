import "./Search.css";
import { CatalogParticle } from "../../components/particle/CatalogParticle";
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

  const search = (val) => {
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
          let filtered = arr.filter((x) => {
             return x.info.product.name.toLowerCase().includes(val.toLowerCase());
          });
          setProducts(filtered);
       });
 };

 const onSubmit = e => {     
  e.preventDefault()
    search(e.target.name.value);
  };

  return (
    <section className="search">
      <h1>Search Page</h1>
      <form onSubmit={onSubmit}>
        <input name="name" type="text" placeholder="Car name/model" className="model"/>
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
              item={product.info.product}
            />
            )
          })
        ) : (
          <p>No listings found!</p>
        )}
      </article>
    </section>
  );
};
