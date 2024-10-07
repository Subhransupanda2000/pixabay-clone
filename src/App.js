import './App.css';
import BodyImage from './component/BodyImage';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BodyImage/>
      <Footer/>
    </div>
  );
}

export default App;
