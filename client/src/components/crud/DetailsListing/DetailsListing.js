import "./DetailsListing.css";
import image from "../../../assets/car-test.jpg";
import { useNavigate, useParams } from "react-router-dom";
import posts from "../../../utils/posts";
import { useEffect, useState } from "react";
import firebase from '../../../config/firebase'

export const DetailsListing = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [listing, setListing] = useState({
    product: {}
  });

  useEffect(() => {
    firebase.firestore().collection("Listings")
        .doc(id)
        .get()
        .then((doc) => setListing(doc.data()))
        /*.then((fetchedPlace) => {
            const id = fetchedPlace.id;
            const article = { ...fetchedPlace.data(), id };
            console.log(article);
            return article;
        })*/
        .catch((err) => {
            console.log(err);
        })
    /*posts
      .getOne(id)
      .then((res) => {
        setListing(res);
        
      })
      .catch((err) => console.log(err));*/
  }, [id]);

  console.log(listing.product.name);
  
  if(listing == {}){return <p>Loading...</p>;}
  else{
    return (
      <section className="container">
        <div className="details">
          <h2>{listing.product.name}</h2>
          <img src={listing.product.imageUrl} alt="alt text" />
          <article className="infos">
            <p>
              <b>Year:</b> {listing.product.year}
            </p>
            <p>
              <b>Price:</b> {listing.product.price}$
            </p>
          </article>
          <p className="description">
            {listing.product.description}
          </p>
          <div className="buttons">
            <button id="edit">Edit</button>
            <button id="delete">Delete</button>
          </div>
        </div>
      </section>
    );
  }
  
  
};
