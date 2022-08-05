import "./DetailsListing.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import firebase from "../../../config/firebase";
import UserContext from "../../../contexts/UserContext";

export const DetailsListing = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = useContext(UserContext);

  const [listing, setListing] = useState({
    product: {},
  });

  useEffect(() => {
    firebase
      .firestore()
      .collection("Listings")
      .doc(id)
      .get()
      .then((doc) => setListing(doc.data()))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const onDelete = () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete your listing?"
    );

    if (confirmation) {
      firebase
        .firestore()
        .collection("Listings")
        .doc(id)
        .delete()
        .then(() => {
          navigate("/home");
        });
    }
  };

  const toEdit = () => {
    navigate("/edit/" + id);
  };

  console.log(user);
  const isOwner = listing.product.creator === user.uid;

  console.log(isOwner);

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
        <p className="description">{listing.product.description}</p>
        {isOwner ? (
          <div className="buttons">
            <button id="edit" onClick={toEdit}>
              Edit
            </button>
            <button id="delete" onClick={onDelete}>
              Delete
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};
