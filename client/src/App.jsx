import { useState } from 'react'
import './general.css'
import './app.css'

import Navbar from './navbar.jsx'

function App() {
  return (
    <>
        <Navbar/>
        <div className="first-section">
            <img className="first-section__graphic" src="../womenholdingfistsupgraphic.png"></img>
            <div className="first-section__main">
                <div className="first-section__title">Igniting Change Through Education and Equality</div>
                <div className="first-section__text">EmpowerYou is more than just a learning hub; it's a transformative platform dedicated to fostering gender equality and empowering women worldwide. Our mission is to amplify the voices of women's rights movements at the local level, provide vital resources through accessible hotlines, facilitate a supportive network for abuse victims to connect and heal, and prioritize daily mental health checkups to ensure holistic well-being.</div>
                <div className="first-section__button">Learn More</div>
            </div>
        </div>
        <div className="sec-section">
            <div className="sec-section__left">

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
            <div className="sec-section__left">
                <img className="sec-section__graphic" src="../graphicwomenhackathon.png"></img>
            </div>
        </div>

    </>
  )
}

export default App
