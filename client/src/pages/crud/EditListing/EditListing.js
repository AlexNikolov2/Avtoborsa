import "./EditListing.css";
import image from "../../../assets/crud-img.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//import UserContext from "../../../contexts/UserContext";
import firebase from "../../../config/firebase";
import authServices from "../../../utils/authService";

export const EditListing = () => {
  const [listing, setListing] = useState({ product: {} });
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  //const user = useContext(UserContext);
  console.log(id);

  let listingId = id;

  useEffect(() => {
    firebase
      .firestore()
      .collection("Listings")
      .doc(listingId)
      .get()
      .then((doc) => {
        setListing(doc.data());
        console.log(doc.data());
      });
  }, [listingId]);

  const onSubmit = (e) => {
    e.preventDefault();

    let name = e.target.name.value;
    let price = Number(e.target.price.value);
    let year = Number(e.target.year.value);
    let imageUrl = e.target.imageUrl.value;
    let description = e.target.description.value;

    let errs = [];
    let checkIsUrlValid =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(
        imageUrl
      );

    if (name.length > 20) errs.push("Name shouldn't be longer than 20 chars!");
    if (isNaN(price) === true) errs.push("Price should be a valid number!");
    if (isNaN(year) === true) errs.push("Year should be a valid number!");
    if (!checkIsUrlValid) errs.push("Image url should be a valid Url!");
    if (description.length < 50)
      errs.push("Description should be at least 50 chars long!");

      if (year < 1900 || year > 2023) errs.push("Year has to be between 1900 and 2023!")
    if (price <= 0) errs.push("Price should be a positive number!")

    setErrors(errs);

    if (errs.length > 0) {
      return;
    }

    let product = {
      name,
      price,
      year,
      imageUrl,
      description,
      creator: authServices.getUserData().user.uid,
    };
    console.log(product.creator);

    firebase
      .firestore()
      .doc("Listings/" + listingId)
      .update({product});
    navigate("/home");
  };

    return (
      <section className="edit">
        {errors.length < 1 ? (
              ""
           ) : (
              <article>
                 {errors?.map((err) => {
                    return (
                       <p className="err" key={err}>
                          {err}
                       </p>
                    );
                 })}
              </article>
           )}
        <img src={image} alt="" />
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Car name/model"
            defaultValue={listing.product.name}
          />
          <div className="numbers">
            <input
              type="number"
              name="price"
              placeholder="price in $$$"
              defaultValue={listing.product.price}
            />
            $
            <input
              type="number"
              name="year"
              placeholder="year"
              defaultValue={listing.product.year}
            />
          </div>
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            defaultValue={listing.product.imageUrl}
          />
          <textarea
            name="description"
            id=""
            cols="30"
            rows="10"
            placeholder="Description"
            defaultValue={listing.product.description}
          ></textarea>
          <button>Edit Listing</button>
        </form>
      </section>
    );
  
};
