import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"


export default function HostVans() {
    const [vans,setVans] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/host/vans');
                setVans(response.data.vans);                
            } catch (error) {
                console.log({error});
                setError(error)
            }finally {
                setLoading(false)
            }
        }
        fetchData();
    },[]);
     
    console.log({vans});

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
                    {loading ? (
                        <h2>Van list is loading</h2>
                    ) : (
                        hostVansEls
                    )}
                </section>
            </div>
        </section>
    )
} 