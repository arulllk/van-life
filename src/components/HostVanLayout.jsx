import { Outlet,NavLink } from "react-router-dom";

export default function HostVanLayout() {
    return(
        <>      
            <div className="host-van-single">

                <nav className="host-nav">
                    <NavLink to="/details" end>Details</NavLink>
                    <NavLink to="/pricing">Pricing</NavLink>
                    <NavLink to="/photos">Photos</NavLink>                
                </nav>
            </div>
            <Outlet/>
        </>
    )
}