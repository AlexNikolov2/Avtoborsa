import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './components/LandingPage/LandingPage';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';

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
