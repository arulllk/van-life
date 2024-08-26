import { useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router-dom"
import axios from "axios"
import {getHostVans} from "../../../api"
import {requireAuth} from "../../../utils"

export async function loader () {
    await requireAuth();
    return getHostVans();
}


export default function HostVans() {   
    const vans = useLoaderData();         
    const hostVansEls = vans?.map(van=>{
        return(
            <Link className="host-van-link-wrapper" key={van.id} to={van.id}>
                <div className="host-van-single">
                    <img src={van.imageUrl} alt={van.name} />
                    <div className="host-van-info">
                        <h3>{van.name}</h3>
                        <p>{van.price}/day</p>
                    </div>
                </div>
            </Link>
        )
    })
    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                <section>                     
                    { hostVansEls }                    
                </section>
            </div>
        </section>
    )
} 