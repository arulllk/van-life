import { useParams }  from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';

export default function VanDetail() {
    const params = useParams();
    const [van,setVan] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    useEffect(()=>{
        const fetchData = async () => {
            console.log('comes');
            try {    
                const response = await axios.get(`/api/vans/${params.id}`);
                console.log('response' , response.data);
                setVan(response.data.vans)
            } catch (error) {
                setError(error)
            }finally {
                setLoading(false)
            }          
        }

        fetchData();
    },[params.id])
    
    
    
    return(
        <div className="van-detail-container">
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