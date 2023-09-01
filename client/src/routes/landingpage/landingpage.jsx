import { useState, useRef } from 'react'
import '../general.css'
import './landingpage.css'

import Navbar from './navbar.jsx'
import { Outlet, Link } from "react-router-dom";

export default function Landing() {
    const supportSection = useRef(null)
    const aboutSection = useRef(null)

    const scrollTo = () => { window.scrollTo({ top: supportSection.current.offsetTop, behavior: 'smooth', }) }
    const scrollToAbout = () => { window.scrollTo({ top: aboutSection.current.offsetTop, behavior: 'smooth', }) }

  return (
    <>
        <Navbar scrollTo={scrollTo} scrollToAbout={scrollToAbout} />
        <div className="landing__first-section">
            <div className="landing__first-section__main">
                <div className="landing__first-section__title">Igniting Change Through Education and Equality</div>
                <div className="landing__first-section__text">EmpowerYou is more than just a learning hub; it's a transformative platform dedicated to fostering gender equality and empowering women worldwide.</div>
                <Link className="landing__first-section__button" to={`Signup`}>Learn More</Link>
            </div>
            <div className="landing__first-section__graphic-container">
                <div className="landing__first-section__graphic-overlay"></div>
                <div className="landing__first-section__graphic"></div>
            </div>
        </div>
        <div className="landing__fourth-section">
                <div className="landing__fourth-section__left">
                    <img className="landing__fourth-section__graphic" src="../womenprotest.png"></img>
                </div>
                <div className="landing__fourth-section__right">
                    <div className="landing__fourth-section__main">
                        <div className="landing__fourth-section__title">Goal of Unity</div>
                        <div className="landing__fourth-section__text">
                            Through collaboration with local organizations, NGOs, and global partners, EmpowerYou strives to empower women to reclaim their narratives. We recognize that progress is a collective endeavor, and our mission underscores the power of unity.
                            <br/>
                            <br/>
                            Embark on a journey towards personal growth, collective progress, and impactful change.
                        </div>
                    </div>
                </div>
            </div>
        <div className="landing__third-fourth-section-container">
            <div className="landing__third-section" ref={supportSection}>
                <div className="landing__third-section__title">How we can help!</div>
                <div className="landing__third-section__text">In Afghanistan, South Sudan, Chad, Iran, Syria, (where domestic abuse cases are rampant) and beyond, we are driven by a shared vision: to provide unwavering support to women facing adversity. Our mission transcends borders, as we amplify the voices of survivors and champion their rights to safety and dignity. By offering helplines, resources, and networks, we're building bridges to hope.</div>
                <div className="landing__third-section__graphics-container">
                    <div className="landing__third-section__icons-text-container">
                        <img className="landing__third-section__icon" src="../mental-health.png"></img>
                        <div className="landing__third-third-section__icons-text-container__text">Frequent mental health checkups</div>
                    </div>
                    <div className="landing__third-section__icons-text-container">
                        <img className="landing__third-section__icon" src="../mortarboard.png"></img>
                        <div className="landing__third-third-section__icons-text-container__text">Lessons on dealing with adversities & local movements</div>
                    </div>
                    <div className="landing__third-section__icons-text-container">
                        <img className="landing__third-section__icon" src="../growth.png"></img>
                        <div className="landing__third-third-section__icons-text-container__text">Ever-lasting personal growth</div>
                    </div>
                </div>
            </div>
            <div className="landing__sec-section" ref={aboutSection}>
                <div className="landing__sec-section__left">
                    <img className="landing__sec-section__graphic" src="https://images.pexels.com/photos/6457579/pexels-photo-6457579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                </div>
                <div className="landing__sec-section__right">
                    <div className="landing__sec-section__main">
                        <div className="landing__sec-section__title">Mission and Values</div>
                        <div className="landing__sec-section__text">
                            Through collaboration with local organizations, NGOs, and global partners, EmpowerYou strives to empower women to reclaim their narratives. We recognize that progress is a collective endeavor, and our mission underscores the power of unity. 
                            <br/><br/>
                            From education to employment, from battling abuse to championing mental health, EmpowerYou stands as a beacon of solidarity, committed to a brighter future for women around the world.
                        </div>
                    </div>
                </div>

            </div>
            <div className="landing__fifth-section">
                <div className="landing__fifth-section__title">Make a Difference Today</div>
                <Link className="landing__first-section__button" to={`Signup`}>Join the Movement</Link>
            </div>
            

            <footer>
                <div>EmpowerYou © 2023</div>
                <div>Privacy</div>
                <div>Terms</div>
                <div>Status</div>
                <div>Cookies</div>
            </footer>
        </div>

    </>
  )
}