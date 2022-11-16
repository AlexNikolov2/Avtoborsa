import "./App.css";

import { Header } from "./components/common/Header/Header";
import { Footer } from "./components/common/Footer/Footer";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { Catalog } from "./pages/catalog/Catalog";
import { Profile } from "./pages/auth/Profile/Profile";
import { EditListing } from "./pages/crud/EditListing/EditListing";
import { Login } from "./pages/auth/Login/Login";
import { Register } from "./pages/auth/Register/Register";
import { CreateListing } from "./pages/crud/CreateListing/CreateListing";
import { DetailsListing } from "./pages/crud/DetailsListing/DetailsListing";
import { Search } from "./pages/search/Search";

import { Routes, Route} from "react-router-dom";
import { useState, useEffect } from "react";

import firebase from "./config/firebase";

import UserContext from "./contexts/UserContext";
import { NotFound } from "./pages/notFound/NotFound";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

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
        <ErrorBoundary>
        <Routes>
          
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/create" exact element={<CreateListing />} />
          <Route path="/edit/:id" exact element={<EditListing />} />
          <Route path="/home" exact element={<Catalog />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/profile/:id" exact element={<Profile />} />
          <Route path="/details/:id" exact element={<DetailsListing />}/>
          <Route path="/search" exact element={<Search />} />
          <Route path="*" element={<NotFound/>} />
          
        </Routes>
        </ErrorBoundary>

        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
