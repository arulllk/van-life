import './App.css';
import { Routes,Route,Link } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Vans from './page/Vans/Vans.jsx';
import "./server.js"
import VanDetail from './page/Vans/VanDetail.jsx';
import Layout from './components/Layout.jsx';
import Dashboard from './page/Host/Dashboard.jsx';
import Income from './page/Host/Income.jsx';
import Reviews from './page/Host/Reviews.jsx';
import HostLayout from './components/HostLayout.jsx';
 

function App() {
  return (
    <>     
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />        
          <Route path="about" element={<About />} />      
          <Route path="vans" element={<Vans />} />     
          <Route path="vans/:id" element={<VanDetail />} />     

          <Route path="host" element={<HostLayout />} >
            <Route index element={<Dashboard />} />    
            <Route path="income" element={<Income />} />    
            <Route path="reviews" element={<Reviews />} />     
          </Route>       
        </Route>
      </Routes>
    </>
  );
}

export default App;
