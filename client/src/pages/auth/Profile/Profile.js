import "./Profile.css";
import { CatalogParticle } from "../../../components/particle/CatalogParticle";
import { useState, useEffect, useContext} from "react";
import firebase from "../../../config/firebase"
import UserContext from '../../../contexts/UserContext';

export const Profile = () => {
  const user = useContext(UserContext);
  const [listings, setListings] = useState([]);

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
        
        setListings(arr);
      });
  }, []);
  let userListings = listings.filter((x) => x.info.product.creator === user.uid)

  return (
    <section className="profile">
      <h1>{user.email}'s uploaded listings</h1>
      <div className="cars">
      {userListings.length > 0 ? (
          userListings.map((product) => {

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
