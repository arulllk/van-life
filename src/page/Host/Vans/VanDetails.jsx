import axios from "axios";
import { useEffect, useState } from "react";
import { useParams,Link,Outlet,NavLink } from "react-router-dom";

export default function HostVanDetails() {
    const [vanDetail,setVanDetail] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const params = useParams();

    useEffect(()=>{
        console.log('fetch data runs');  
        const fetchData = async () => {
            try {            
                const response = await axios.get(`/api/host/vans/${params.id}`);
                console.log('response.data.vans ' , response.data.vans);
                setVanDetail(response.data.vans)
               
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false);
            }

        }
        fetchData();        
    },[params.id])

    console.log('error ', error);
   console.log('vanDetail ', vanDetail );
    
    return (
        <section>
            <Link to=".." relative="path" className="back-button">&larr; <span> Back to all vans</span></Link>
            <div className="host-van-detail-layout-container">

                {
                    loading ? <h2>loading ..</h2> 
                            : (
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
                            )
                }
                <nav className="host-van-detail-nav">
                    <NavLink to="." end>Details</NavLink>
                    <NavLink to="pricing">Pricing</NavLink>
                    <NavLink to="photos">Photos</NavLink>         
                </nav>
                {console.log('van is', vanDetail)}
                <Outlet context={{vanDetail}} />
            </div>
        </section>
    )
} 