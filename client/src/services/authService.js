import firebase from "../config/firebase";
import {Navigate} from "react-router-dom";

function clearUserData() {
  localStorage.removeItem(`user`);
}

export default clearUserData;