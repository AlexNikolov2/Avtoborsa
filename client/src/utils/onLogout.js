import firebase from "../config/firebase";
import {Navigate} from "react-router-dom";

export const onLogout = () => {
    firebase.auth().signOut().then(function() {
        return <Navigate to="/"/>
      }).catch(function(error) {
        console.log(error);
      });
}