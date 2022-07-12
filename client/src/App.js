import './App.css';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
//import LandingPage from './components/common/LandingPage/LandingPage';
//import { Login } from './components/Login/Login';
import { Register } from './components/auth/Register/Register';

function App() {
  return (
    <div className="App">
      <Header/>
      <Register/>
      <Footer/>
    </div>
  );
}

export default App;
