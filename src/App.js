import './App.css';
import { Routes,Route,Link } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Vans from './page/Vans';
import "./server.js"
 

function App() {
  return (
    <>
      <header>
        <Link className='site-logo' to="/">#vanlife</Link>
        <nav>  
          <Link to="/about">About</Link>
          <Link to ="/van">Van</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/about" element={<About />} />      
        <Route path="/van" element={<Vans />} />               
      </Routes>
    </>
  );
}

export default App;
