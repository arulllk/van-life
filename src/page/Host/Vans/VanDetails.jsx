import axios from "axios";
import { useEffect, useState } from "react";
import { useParams,Link,Outlet,NavLink,useLoaderData } from "react-router-dom";
import { getHostVans } from '../../../api';
import {requireAuth} from "../../../utils"

export async function loader ({params}) {
    await requireAuth();
    return getHostVans(params.id);
}


export default function HostVanDetails() {   
    const vanDetail = useLoaderData();
    const params = useParams();

    if (!vanDetail) {
        return <h1>Loading...</h1>
    }
     
    
    return (
        <section>
            <Link to=".." relative="path" className="back-button">&larr; <span> Back to all vans</span></Link>
            <div className="host-van-detail-layout-container">                
                <div className="host-van-detail">
                    <img src={vanDetail.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i className={`van-type van-type-${vanDetail.type}`} >
                            {vanDetail.type}
                        </i>
                        <h3>{vanDetail.name}</h3>
                        <h4>${vanDetail.price}/day</h4>
                    </div>                                    
                </div>
                <nav className="host-van-detail-nav">
                    <NavLink to="." end>Details</NavLink>
                    <NavLink to="pricing">Pricing</NavLink>
                    <NavLink to="photos">Photos</NavLink>         
                </nav>
               {console.log('vanDetail ' , vanDetail)}
                <Outlet context={{vanDetail}} />
            </div>
        </section>
    )
} 