import React from "react";
import "./Register.css";
import background from "../../../assets/auth-img.jpg";
import { useContext, useState } from "react";

import UserContext from "../../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import firebase from "../../../config/firebase";

export const Register = () => {
  const user = useContext(UserContext);
  const [errors, setErrors] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    let email = e.target.email.value;
    let password = e.target.password.value;
    let errs = [];
    let isValidEmail = /^[a-zA-Z0-9.-]{4,}@\w+\.com$/.test(email);

    if (password && password.length < 6)
      errs.push("Your password should be at least 6 characters long!");
    if (email && !isValidEmail) errs.push("Invalid email!");
    if (!password) errs.push("You forgot to fill up password!");
    if (!email) errs.push("You forgot to fill up email!");

    setErrors(errs);

    if (errs.length > 0) {
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((credentials) => {
        let currUser = firebase.auth().currentUser;
        const user = credentials.user;
        const id = currUser.uid;
        const listings = [];
        firebase
          .firestore()
          .collection("Users")
          .doc(currUser.uid)
          .set({ id, email, listings })
          .then(this.checkStatus({ user }));
      })
      .catch((err) => {
        setErrors([err.message]);
      });
  };

  if (user) {
    return <Navigate to="/home" />;
  } else {
    return (
      <section className="register">
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
        <img src={background} alt="" />
        <section className="left">
          <h1>Benefits of being a logged in user at Avtoborsa:</h1>
          <ul>
            <li>
              <i className="fa-solid fa-car-side"></i>You can like as many car
              listings as you want!
            </li>
            <li>
              <i className="fa-solid fa-car-side"></i>You can list a car in our
              web app!
            </li>
            <li>
              <i className="fa-solid fa-car-side"></i>And many more...
            </li>
            <li className="special">Come on, fill up the form and sign up!</li>
          </ul>
        </section>
        <form onSubmit={onSubmit}>
          <h1>Sign up</h1>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="Your email here" />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Your password here"
            />
          </div>
          <button className="button" type="submit">
            Sign up!
          </button>
        </form>
      </section>
    );
  }
};
