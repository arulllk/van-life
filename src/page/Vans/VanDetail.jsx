import { Link, useParams,useLocation,useLoaderData }  from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { getVans } from '../../api';
import {requireAuth} from "../../utils"

export async function loader ({params}) {    
    await requireAuth();
    return getVans(params.id);
} 


export default function VanDetail() {
  
    
    const van = useLoaderData();
    const location = useLocation();
    
    const search = location.state?.search || "";
    const type = location.state?.type || " all"     
    return(
        <div className="van-detail-container">
            <Link to={`..${search}`} relative='path' className='back-button'>&larr; <span>Back to {type} vans</span></Link>
            {van ?(                
                <div className='van-detail'>
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className='van-price'><span>${van.price}</span><span>/day</span></p>
                    <p>{van.description}</p>
                    <button className='link-button'>Rent this van</button>
                </div> 
            ):<h1>Loading..</h1>}
        </div>
    )
}