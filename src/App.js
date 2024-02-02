import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import RouteCompo from './Route/RouteCompo';
import HeaderCompo from './Components/HeaderCompo';
import Footer from './Route/Footer';

function App() {
  return (
    <div className="App">
      
      <RouteCompo />
      <Footer />
      
    </div>
  );
}

export default App;
