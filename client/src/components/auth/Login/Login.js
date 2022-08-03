import React from "react";
import "./Login.css";
import background from "../../../assets/auth-img.jpg";
import { useContext, useState } from "react";
import UserContext from "../../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import firebase from "../../../config/firebase";
import authServices from "../../../utils/authService"

export const Login = () => {
  const user = useContext(UserContext);
  const [error, setError] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    let email = e.target.email.value;
    let password = e.target.password.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        localStorage.setItem(`user`, JSON.stringify(data));
        console.log(data);
      })
      .catch((err) => {
        if (err.code === "auth/user-not-found")
          setError("There is no account corresponding to this email");
        if (err.code === "auth/wrong-password") setError("Wrong password");
      });

      
  };

  if (user) {
    return <Navigate to="/home" />;
  } else {
    return (
      <section className="login">
        <article>
               <p className="err">{error}</p>
            </article>
        <img src={background} alt="" />
        <form onSubmit={onSubmit}>
          <h1>Log In</h1>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="Your email here" />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Your password here" />
          </div>
          <button type="submit">Log in!</button>
        </form>
      </section>
    );
  }
};
