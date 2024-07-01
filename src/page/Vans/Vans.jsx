import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link,useSearchParams } from 'react-router-dom';

export default function Vans() {
    const [vans, setVans] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    const [searchParams,setSearchParams] = useSearchParams();
    const typeFilter  = searchParams.get("type")
    
    console.log(`typeFilter `, typeFilter);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await axios.get('api/vans')
                setVans(response.data.vans)              
            } catch (error) {
                setError(error)
            }finally{
                setLoading(false)
            }
        }

        fetchData();
    },[])
    
    function generateNewParamString(key,value) {

    }

    if(loading) {
        return(<div className='van-list-container'>Loading ...</div>)
    }

    const displayVans = typeFilter
        ? vans.filter(van=>van.type === typeFilter)
        : vans

    const vanElements = displayVans.map((van,index)=>{
        const {name,imageUrl,type,id,price} = van;
        return(
                <Link to={id} key={index}>
                    <div className="van-tile" key={id}>
                        <img alt={name} src={imageUrl} />
                        <div className="van-info">
                            <h3> {name}</h3>
                            <p>${price}<span>/day</span></p>
                        </div>
                        <i className={`van-type ${type} selected`}>{type}</i>
                    </div>
                </Link>
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