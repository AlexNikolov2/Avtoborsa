import firebase from "../config/firebase";

function getOne(id) {
    return firebase.firestore.collection("Listings")
        .doc(id)
        .get()
        .then((fetchedPlace) => {
            const id = fetchedPlace.id;
            const article = { ...fetchedPlace.data(), id };

            return article;
        })
        .catch((err) => {
            console.log(err);
        })
}

export default {getOne}