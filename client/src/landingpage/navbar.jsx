import { useEffect, useState } from 'react'
import './navbar.css'

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
            <img className="nav__logo" src="../empoweryoulogo.png"></img>
            <div className="nav__buttons-container">
                <div className="nav__buttons">Support</div>
                <div className="nav__buttons">About</div>
                <p>|</p>
                <div className="nav__buttons">Login</div>
                <div className="nav__buttons-special">Get Started</div>

            </div>
        </nav>
    )
}