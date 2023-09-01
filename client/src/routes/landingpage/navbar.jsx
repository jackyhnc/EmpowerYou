import { useEffect, useState, useRef } from 'react'
import './navbar.css'

import { Outlet, Link } from "react-router-dom";


export default function Navbar(props) {
    const {scrollTo, scrollToAbout} = props

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
        window.addEventListener('scroll', handleScroll)
        
        return () => {
        window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    
    return (
        <>
            <div id="nav-shadow-id" className={navShadow ? `nav-shadow-true` : "nav-shadow-false"}></div>
            <nav>
                <img className="nav__logo" src="../empoweryoulogolight.png"></img>
                <div className="nav__buttons-container">
                    <div className="nav__buttons" onClick={scrollTo}>Contribution</div>
                    <div className="nav__buttons" onClick={scrollToAbout}>About</div>
                    <p>|</p>
                    <Link className="nav__buttons" to={`Login`}>Login</Link>
                    <Link className="nav__buttons-special" to={`Signup`}>Get Started</Link>
                </div>
            </nav>
        </>
    )
}