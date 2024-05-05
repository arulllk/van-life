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
import HostVans from './page/Host/Vans/Vans.jsx';
import HostVanDetails from './page/Host/Vans/VanDetails.jsx';
import HostVanInfo from './page/Host/HostVanInfo.jsx';
import HostVanPrice from './page/Host/HostVanPrice.jsx';
import HostVanPhotos from './page/Host/HostVanPhotos.jsx';
import SearchParams from './page/Vans/SearchParams.jsx';
 

function App() {
  return (
    <>     
      <Routes>
        <Route path="/characters" element={<SearchParams />} />
        <Route element={<Layout />}>
          <Route index element={<Home />} />        
          <Route path="about" element={<About />} />      
          <Route path="vans" element={<Vans />} />     
          <Route path="vans/:id" element={<VanDetail />} />     

          <Route path="host" element={<HostLayout />} >
            <Route index element={<Dashboard />} />    
            <Route path="income" element={<Income />} />    
            <Route path="reviews" element={<Reviews />} />     
            <Route path="vans" element={<HostVans />} />   
            <Route path="vans/:id" element={<HostVanDetails />} >
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPrice />} />   
              <Route path="photos" element={<HostVanPhotos />} />   
            </Route>   
          </Route>       
        </Route>
      </Routes>
    </>
  );
}

export default App;
