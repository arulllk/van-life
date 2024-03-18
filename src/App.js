import logo from './logo.svg';
import './App.css';
import { Routes,Route,Link } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
 

function App() {
  return (
    <>
      <header>
        <Link className='site-logo' to="/">#vanlife</Link>
        <nav>  
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/about" element={<About />} />               
      </Routes>
    </>
  );
}

export default App;
