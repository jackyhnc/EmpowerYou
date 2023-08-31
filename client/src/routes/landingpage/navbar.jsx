import { useEffect, useState } from 'react'
import './navbar.css'

import { Outlet, Link } from "react-router-dom";


export default function Navbar() {
    const [navShadow, setNavShadow] = useState(false)
    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 0) {
            setNavShadow(true)
        }
        else {
            setNavShadow(false)
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <nav>
            <div id="nav-shadow-id" className={navShadow ? `nav-shadow-true` : "nav-shadow-false"}></div>
            <img className="nav__logo" src="../empoweryoulogolight.png"></img>
            <div className="nav__buttons-container">
                <div className="nav__buttons">Support</div>
                <div className="nav__buttons">About</div>
                <p>|</p>
                <Link className="nav__buttons" to={`Login`}>Login</Link>
                <Link className="nav__buttons-special" to={`Signup`}>Get Started</Link>

            </div>
        </nav>
    )
}