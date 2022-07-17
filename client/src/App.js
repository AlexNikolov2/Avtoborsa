import './App.css';
import {Header} from './components/common/Header/Header';
import {Footer} from './components/common/Footer/Footer';
//import { CreateListing } from './components/crud/CreateListing/CreateListing';
import {LandingPage} from './components/common/LandingPage/LandingPage';
//import {EditListing } from './components/crud/EditListing/EditListing'
//import { Login } from './components/auth/Login/Login';
//import { Register } from './components/auth/Register/Register';

function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
      <Footer/>
    </div>
  );
}

export default App;
