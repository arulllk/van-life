import './App.css';
import { Routes,Route,Link, RouterProvider, createBrowserRouter,createRoutesFromElements  } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Vans,{loader as vansLoader} from './page/Vans/Vans.jsx';
import "./server.js"
import VanDetail,{ loader as vanDetailLoader} from './page/Vans/VanDetail.jsx';
import Layout from './components/Layout.jsx';
import Dashboard from './page/Host/Dashboard.jsx';
import Income from './page/Host/Income.jsx';
import Reviews from './page/Host/Reviews.jsx';
import HostLayout from './components/HostLayout.jsx';
import HostVans, { loader as hostVansLoader} from './page/Host/Vans/Vans.jsx';
import HostVanDetails, { loader as hostVanDetailLoader} from './page/Host/Vans/VanDetails.jsx';
import HostVanInfo from './page/Host/HostVanInfo.jsx';
import HostVanPrice from './page/Host/HostVanPrice.jsx';
import HostVanPhotos from './page/Host/HostVanPhotos.jsx';
import SearchParams from './page/Vans/SearchParams.jsx';
import Notfound from './page/Notfound.jsx';
import Error from './components/Error.jsx';
import Login from './page/Login.jsx';
import { requireAuth } from './utils.js';

// const router = createBrowserRouter(createRoutesFromElements(
//       <Route element={<Layout />}>
//         <Route index element={<Home />} 
//           loader={async ()=>{
//             return null;
//           }}
//         />        
//         <Route path="about" element={<About />} 
//           loader={async ()=>{
//             return null;
//           }}
//         />  
//         <Route path="login" element={<Login />} 
//           loader={async ()=>{
//             return null;
//           }}
//         />  
//         <Route path="vans" element={<Vans />} loader={vanLoader} errorElement={<Error/> } />     
//         <Route path="vans/:id" element={<VanDetail />}  loader={vanDetailLoader} />     

//         <Route path="host" element={<HostLayout />} 
//           loader={async ()=>{
//             await requireAuth();
//           }}
//         >
//           <Route index element={<Dashboard />} 
//             loader={async ()=>{
//               await requireAuth();
//             }}
//           />    
//           <Route path="income" element={<Income />} 
//                loader={async ()=>{
//                 await requireAuth();
//               }}
//           />    
//           <Route path="reviews" element={<Reviews />} 
//                loader={async ()=>{
//                 await requireAuth();
//               }}
//           />     
//           <Route path="vans" element={<HostVans />} loader={hostVanLoader}   />   
//           <Route path="vans/:id" element={<HostVanDetails />} loader={hostVanDetailLoader} >
//             <Route index element={<HostVanInfo />}  
//                 loader={async ()=>{
//                   return null;
//                 }}
//             />
//             <Route path="pricing" element={<HostVanPrice />} 
//                 loader={async ()=>{
//                   return null;
//                 }}
//             />   
//             <Route path="photos" element={<HostVanPhotos />}
//                 loader={async ()=>{
//                   return null;
//                 }}
//             />   
//           </Route>   
//         </Route>      
//         <Route path="*" element={<Notfound />}  
//           loader={async ()=>{
//             return null;
//           }}
//         /> 
//       </Route>
// ))

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route
      path="login"
      element={<Login />}
    />
    <Route
      path="vans"
      element={<Vans />}
      errorElement={<Error />}
      loader={vansLoader}
    />
    <Route 
      path="vans/:id" 
      element={<VanDetail />} 
      loader={vanDetailLoader}
    />
    {/**
     * Tasks: 
     * 1. Check for user's auth status (fake it, like before)
     * 2. If not logged in, `redirect` to "/login"
     * 3. Profit!
     */}

    <Route path="host" element={<HostLayout />}>
      <Route
        index
        element={<Dashboard />}
        loader={async () => {
          return null
        }}
      />
      <Route
        path="income"
        element={<Income />}
        loader={async () => {
          return null
        }}
      />
      <Route
        path="reviews"
        element={<Reviews />}
        loader={async () => {
          return null
        }}
      />
      <Route
        path="vans"
        element={<HostVans />}
        loader={hostVansLoader}
      />
      <Route
        path="vans/:id"
        element={<HostVanDetails />}
        loader={hostVanDetailLoader}
      >
        <Route
          index
          element={<HostVanInfo />}
          loader={async () => {
            return null
          }}
        />
        <Route
          path="pricing"
          element={<HostVanPrice />}
          loader={async () => {
            return null
          }}
        />
        <Route
          path="photos"
          element={<HostVanPhotos />}
          loader={async () => {
            return null
          }}
        />
      </Route>
    </Route>
    <Route path="*" element={<Notfound />} />
  </Route>
))
 

function App() {
  return (    
       <RouterProvider router={router} />     
  );
}

export default App;
