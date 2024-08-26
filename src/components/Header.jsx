import { Link,NavLink } from "react-router-dom"; 
import imageUrl from "../assets/images/avatar-icon.png";

export default function Header() {
    const activeStyle = {
        'font-weight':'bold',
        'text-decoration': 'underline',
        'color': '#161616'
    }  
    return(
        <header>
            <Link className='site-logo' to="/">#vanlife</Link>
            <nav className="mainNav">  
                <NavLink to="/host">Admin</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to ="/vans">Van</NavLink>
                <Link to="/login" className="login-link">
                    <img src={imageUrl} className="login-icon" />
                </Link>
            </nav>
        </header>
    );
}