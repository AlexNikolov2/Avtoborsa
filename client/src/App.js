import './App.css';
import {Header} from './components/common/Header/Header';
import {Footer} from './components/common/Footer/Footer';
import {LandingPage} from './components/common/LandingPage/LandingPage';
import { Catalog } from './components/catalog/Catalog';
import { Profile } from './components/auth/Profile/Profile';
import {EditListing } from './components/crud/EditListing/EditListing'
import { Login } from './components/auth/Login/Login';
import { Register } from './components/auth/Register/Register';
import {Routes, Route} from 'react-router-dom';
import { CreateListing } from './components/crud/CreateListing/CreateListing';
import { DetailsListing } from './components/crud/DetailsListing/DetailsListing';
import {Search} from './components/search/Search';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/create" element={<CreateListing/>}/>
        <Route path="/edit" element={<EditListing/>}/>
        <Route path="/home" element={<Catalog/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/details" element={<DetailsListing/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
