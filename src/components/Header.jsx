import { Link,NavLink } from "react-router-dom"; 

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
            </nav>
        </header>
    );
}