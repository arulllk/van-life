import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Vans() {
    const [vans, setVans] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
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
    console.log(vans);
    if(loading) {
        return(<div className='van-list-container'>Loading ...</div>)
    }

    const vanElements = vans.map((van,index)=>{
        const {name,imageUrl,type,id,price} = van;
        return(
                <Link to={`/vans/${id}`}>
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
             <div className="van-list">
                {vanElements}
             </div>
        </div>
    )
}