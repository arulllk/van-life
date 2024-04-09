import { Outlet, Link, NavLink } from "react-router-dom"

export default function HostLayout () {
    return(
        <>
             <nav className="host-nav">
                <NavLink to="." end>Dashboard</NavLink>
                <NavLink to="income">Income</NavLink>
                <NavLink to="vans">Van</NavLink>
                <NavLink  to="reviews">Reviews</NavLink> 
             </nav>
            <Outlet />
        </>
    )
}