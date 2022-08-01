import './Catalog.css';
import {CatalogParticle} from './particle/CatalogParticle.js'
import { useState, useEffect } from 'react';
import firebase from "../../services/firebase"

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
                  info: info,
               });
            });
            setProducts(arr);
         });
   }, []);

    return (
        <section className="catalog">
            <h1>All Listings</h1>
            <div className="cars">
            {products.map((product) =>{
                return <CatalogParticle key={product.id} id={product.id} item={product.info}/>
            })}
            <CatalogParticle/>
            <CatalogParticle/>
            <CatalogParticle/>
            <CatalogParticle/>
            <CatalogParticle/>
            <CatalogParticle/>
            <CatalogParticle/>
            <CatalogParticle/>
            <CatalogParticle/>
            <CatalogParticle/>
            </div>
            
        </section>
    );
}