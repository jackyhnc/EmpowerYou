import { useEffect, useRef } from 'react'
import './home.css'

import Navbar from './navbar'


export default function Home() {
    useEffect(() => {
        const element = document.getElementById("courses-container")
        const handleWheel = (event) => {
            event.preventDefault()
        
            element.scrollBy({
            left: event.deltaY < 0 ? -30 : 30,
        })
    }
    
    element.addEventListener('wheel', handleWheel)
    
    return () => {
        element.removeEventListener('wheel', handleWheel)
    }
    }, [])
    

    return (
        <div className='body'>
            <Navbar/>
            <main>
                <div className="courses-section">
                    <div className="courses-section-title">Courses</div>
                    <div id="courses-container" className="courses-container">
                        <div className="course">
                            <div className="course-title">Introduction</div>
                            <div className="course-description">The beginnings of a journey</div>
                            <div className="course-img-container">
                                <div className="course-img-overlay"></div>
                                <img className='course-img' src="../courseimgs/introduction.jpg"></img>
                            </div>
                        </div>
                        <div className="course">
                            <div className="course-title">Mental Health</div>
                            <div className="course-description">Signs of negative feedback thoughts</div>
                            <div className="course-img-container">
                                <div className="course-img-overlay"></div>
                                <img className='course-img' src="https://images.pexels.com/photos/5257604/pexels-photo-5257604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                            </div>
                        </div>
                        <div className="course">
                            <div className="course-title">Types of Abuse</div>
                            <div className="course-description">Abuse can even be unnoticable to the victim</div>
                            <div className="course-img-container">
                                <div className="course-img-overlay"></div>
                                <img className='course-img' src="https://images.pexels.com/photos/6502500/pexels-photo-6502500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                            </div>
                        </div>
                        <div className="course">
                            <div className="course-title">Relationships</div>
                            <div className="course-description">People around you can either bring you up or put you down</div>
                            <div className="course-img-container">
                                <div className="course-img-overlay"></div>
                                <img className='course-img' src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                            </div>
                        </div>
                        <div className="course">
                            <div className="course-title">Recovery</div>
                            <div className="course-description">How to recover from trauma</div>
                            <div className="course-img-container">
                                <div className="course-img-overlay"></div>
                                <img className='course-img' src="https://images.pexels.com/photos/4426522/pexels-photo-4426522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="checkup">
                    <img className='checkup-icon' src="../public/checkupicons/happy.png"></img>
                    <div className="checkup-title">Your doing great!</div>
                    <div className="checkup-section-2">
                        <div className="checkup-text">Take a quick checkup below</div>
                        <div className="checkup-button">Check up</div>
                    </div>
                </div>
                <div className="networking-section">

                </div>
            </main>
        
        </div>

    )
}