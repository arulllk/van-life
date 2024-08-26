import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link,useSearchParams,useLoaderData } from 'react-router-dom';
import { getVans } from '../../api';
import {requireAuth} from "../../utils"
export async function loader () {    
    await requireAuth();
    return getVans();
} 

export default function Vans() {    
    const [searchParams,setSearchParams] = useSearchParams();
    const typeFilter  = searchParams.get("type")
    const vans = useLoaderData();
    const displayVans = typeFilter
        ? vans.filter(van=>van.type === typeFilter)
        : vans
    const vanElements = displayVans.map((van,index)=>{
        const {name,imageUrl,type,id,price} = van;
        return(
                <div className="van-tile" key={id}>
                    <Link to={id} key={index} state={{search:`?${searchParams.toString()}` , type: typeFilter }}>
                        <img alt={name} src={imageUrl} />
                        <div className="van-info">
                            <h3> {name}</h3>
                            <p>${price}<span>/day</span></p>
                        </div>
                        <i className={`van-type ${type} selected`}>{type}</i>
                    </Link>
                </div>
            ) 
       })

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div style={{'display':'flex', 'gap': '10px'}}>
                {/* <Link className='van-type simple' to="?type=simple">Simple</Link>
                <Link className='van-type rugged' to="?type=rugged">Rugged</Link>
                <Link className='van-type luxury' to="?type=luxury">Luxury</Link>
                <Link className='van-type clear-filters' to=".">Clear Filters</Link> */}
                <button className={`van-type simple ${typeFilter === 'simple' ? 'selected' : ''}`} onClick={()=>setSearchParams({type:'simple'})}>Simple</button>
                <button className={`van-type rugged ${typeFilter === 'rugged' ? 'selected' : ''}`} onClick={()=>setSearchParams({type:'rugged'})}>Rugged</button>
                <button className={`van-type luxury ${typeFilter === 'luxury' ? 'selected' : ''}`} onClick={()=>setSearchParams({type:'luxury'})}>Luxury</button>
                { typeFilter 
                    ? (<button className='van-type clear-filters' onClick={()=>setSearchParams({})}>Clear Filters</button>)
                    : null
                }
                
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}