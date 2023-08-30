import { useState } from 'react'
import './general.css'
import './landingpage.css'

import Navbar from './navbar.jsx'

function App() {
  return (
    <>
        <Navbar/>
        <div className="first-section">
            <img className="first-section__graphic" src="../womenholdingfistsupgraphic.png"></img>
            <div className="first-section__main">
                <div className="first-section__title">Igniting Change Through Education and Equality</div>
                <div className="first-section__text">EmpowerYou is more than just a learning hub; it's a transformative platform dedicated to fostering gender equality and empowering women worldwide.</div>
                <div className="first-section__button">Learn More</div>
            </div>
        </div>
        <div className="sec-section">
            <div className="sec-section__left">
                <img className="sec-section__graphic" src="../graphicwomenhackathon.png"></img>
            </div>
            <div className="sec-section__right">
                <div className="sec-section__main">
                    <div className="sec-section__title">Mission and Values</div>
                    <div className="sec-section__text">
                        Through collaboration with local organizations, NGOs, and global partners, EmpowerYou strives to empower women to reclaim their narratives. We recognize that progress is a collective endeavor, and our mission underscores the power of unity. 
                        <br/><br/>
                        From education to employment, from battling abuse to championing mental health, EmpowerYou stands as a beacon of solidarity, committed to a brighter future for women around the world.
                    </div>
                </div>
            </div>

        </div>
        <div className="third-fourth-section-container">
            <div className="third-section">
                <div className="third-section__title">How we can help!</div>
                <div className="third-section__text">In Afghanistan, South Sudan, Chad, Iran, Syria, (where domestic abuse cases are rampant) and beyond, we are driven by a shared vision: to provide unwavering support to women facing adversity. Our mission transcends borders, as we amplify the voices of survivors and champion their rights to safety and dignity. By offering helplines, resources, and networks, we're building bridges to hope.</div>
                <div className="third-section__graphics-container">
                    <div className="third-section__icons-text-container">
                        <img className="third-section__icon" src="../mental-health.png"></img>
                        <div className="third-third-section__icons-text-container__text">Frequent mental health checkups</div>
                    </div>
                    <div className="third-section__icons-text-container">
                        <img className="third-section__icon" src="../mortarboard.png"></img>
                        <div className="third-third-section__icons-text-container__text">Lessons on dealing with adversities & local movements</div>
                    </div>
                    <div className="third-section__icons-text-container">
                        <img className="third-section__icon" src="../growth.png"></img>
                        <div className="third-third-section__icons-text-container__text">Ever-lasting personal growth</div>
                    </div>
                </div>
            </div>
            <div className="fourth-section">
                <div className="fourth-section__left">
                    <img className="fourth-section__graphic" src="../womenprotest.png"></img>
                </div>
                <div className="fourth-section__right">
                    <div className="fourth-section__main">
                        <div className="fourth-section__title">Goal of Unity</div>
                        <div className="fourth-section__text">
                            Through collaboration with local organizations, NGOs, and global partners, EmpowerYou strives to empower women to reclaim their narratives. We recognize that progress is a collective endeavor, and our mission underscores the power of unity.
                            <br/>
                            <br/>
                            Embark on a journey towards personal growth, collective progress, and impactful change.
                        </div>
                    </div>
                </div>
            </div>
            <div className="fifth-section">
                <div className="fifth-section__title">Make a Difference Today</div>
                <div className="first-section__button">Join the Movement</div>

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

export default App
