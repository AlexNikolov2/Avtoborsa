import "./App.css";

import { Header } from "./components/common/Header/Header";
import { Footer } from "./components/common/Footer/Footer";
import { LandingPage } from "./components/common/LandingPage/LandingPage";
import { Catalog } from "./components/catalog/Catalog";
import { Profile } from "./components/auth/Profile/Profile";
import { EditListing } from "./components/crud/EditListing/EditListing";
import { Login } from "./components/auth/Login/Login";
import { Register } from "./components/auth/Register/Register";
import { CreateListing } from "./components/crud/CreateListing/CreateListing";
import { DetailsListing } from "./components/crud/DetailsListing/DetailsListing";
import { Search } from "./components/search/Search";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import firebase from "./services/firebase";

import UserContext from "./contexts/UserContext";

function App() {
  const [user, setUser] = useState({});
  const [newUser] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
  }, [newUser]);

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/create" exact element={<CreateListing />} />
          <Route path="/edit" exact element={<EditListing />} />
          <Route path="/home" exact element={<Catalog />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/details" exact element={<DetailsListing />} />
          <Route path="/search" exact element={<Search />} />
        </Routes>

        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
