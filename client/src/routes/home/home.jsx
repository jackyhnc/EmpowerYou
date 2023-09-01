import { useState, useEffect, useRef } from 'react'
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

    const [mood, setMood] = useState("happy")
    const [moodCounter, setMoodCounter] = useState(0)

    const changeMood = () => {
        if (moodCounter >= 2) {
            setMoodCounter(0)
        } else {
            setMoodCounter(moodCounter + 1)
        }

        const moodsArray = ["happy", "neutral", "sad"]
        setMood(moodsArray[moodCounter])
    }

    

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
                <div className="checkup-networking-hotlines-container">
                    <div className="checkup-container">
                        <div className="checkup">
                            <div className="checkup-section-title">Mental Health</div>
                            <img className='checkup-icon' src={`../checkupicons/${mood}.png`}></img>
                            <div className="checkup-title">
                                {
                                    mood == "happy" ? "Your doing great!" :
                                    mood == "neutral" ? "Feeling okay.":
                                    "Hey, you alright?"
                                }
                            </div>
                            <div className="checkup-section-2">
                                <div className="checkup-text">Take a quick checkup below</div>
                                <div className="checkup-button" onClick={changeMood}>Check up</div>
                            </div>
                        </div>
                    </div>
                    <div className="hotlines-container">
                        <div className="hotlines-section">
                            <div className="hotlines-text-title-container">
                                <div className="hotlines-title">Hotlines For Your Area (UK)</div>
                                <div className="hotlines-text">
                                    Samaritans: 116 123 <br/>
                                    SANEline: 0300 304 7000 <br/>
                                    National Suicide Prevention Helpline UK: 0800 689 5652 <br/>
                                    Shout: text SHOUT to 85258 <br/> 
                                    The Mix: 0808 808 4994 <br/>
                                    Switchboard:  0300 330 0630 <br/>
                                    Papyrus HOPELINEUK: 0800 068 4141 <br/>
                                    Campaign Against Living Miserably (CALM): 0800 58 58 58 <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="networking-container">
                        <div className="networking-section">
                            <div className="networking-title">Network</div>
                            <div className="posts-container">
                                <div className="post">
                                        <div className="post-profile">
                                            <img className="post-profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThDsB5AghscaCHlvtK1u4E1vjKgvGA7blOVVZK1iA&s"></img>
                                            <div className="post-username">Lancashire Women, Burnley, UK</div>
                                        </div>
                                        <div className="post-title">Looking for a Recovery Worker</div>
                                        <div className="post-description">
                                            I am looking for a recovery worker to join my team.
                                            <br/>
                                            <br/>
                                            based in burnley-hybrid working
                                            <br/>
                                            <br/>
                                            to be part of a fast paced, dynamic team working with women in the criminal justice system. the role will support women with multiple unmet needs to reduce the barriers to accessing substance Misuse services.
                                            <br/>
                                            <br/>
                                            with a non judgmental and holistic approach, the successful candidate will engage women in the community by providing intensive handholding support and advocacy .<br/><br/>joint working with partner services required including statutory services and HMP Styal. successful employment is subject to enhanced DBS and Level 1 vetting</div>
                                        <div className="post-img-container">
                                            <img className="post-img" src="https://images.pexels.com/photos/6984616/pexels-photo-6984616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                                        </div>
                                        <div className="post-time">Aug 23, 2023</div>
                                        <div className="post-buttons-container">
                                            <div className="post-button">74 Likes</div>
                                            <div className="post-button">Comment</div>
                                            <div className="post-button">Share</div>
                                            <div className="post-button">🎉 34</div>
                                            <div className="post-button">💓 54 </div>
                                            <div className="post-button">🤗 23</div>
                                        </div>
                                        <div className="post-comments">23 comments</div>
                                </div>
                                <div className="post">
                                    <div className="post-profile">
                                        <img className="post-profile-img" src="https://images.pexels.com/photos/8107686/pexels-photo-8107686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                                        <div className="post-username">LSE Library</div>
                                    </div>
                                    <div className="post-title">Ranjit Kaur's Impact at the RightsOfWomen</div>
                                    <div className="post-description">The late Ranjit Kaur was a committed social justice campaigner, author, and the first director of @rightsofwomen. <br/> <br/> In this clip, Ranjit tells us about some of the South Asian women who inspired her. Listen to the full interview: https://bit.ly/3rJruk8 #SouthAsianHeritageMonth</div>
                                    <div className="post-img-container">
                                        <img className="post-img" src="https://images.pexels.com/photos/8203158/pexels-photo-8203158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                                    </div>
                                    <div className="post-time">Aug 3, 2023</div>
                                    <div className="post-buttons-container">
                                        <div className="post-button">28 Likes</div>
                                        <div className="post-button">Comment</div>
                                        <div className="post-button">Share</div>
                                        <div className="post-button">🎉 19</div>
                                        <div className="post-button">💓 2 </div>
                                        <div className="post-button">🤗 10</div>
                                    </div>
                                    <div className="post-comments">23 comments</div>
                                </div>
                                <div className="post">
                                        <div className="post-profile">
                                            <img className="post-profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThDsB5AghscaCHlvtK1u4E1vjKgvGA7blOVVZK1iA&s"></img>
                                            <div className="post-username">Lancashire Women, Burnley, UK</div>
                                        </div>
                                        <div className="post-title">Looking for a Recovery Worker</div>
                                        <div className="post-description">
                                            I am looking for a recovery worker to join my team.
                                            <br/>
                                            <br/>
                                            based in burnley-hybrid working
                                            <br/>
                                            <br/>
                                            to be part of a fast paced, dynamic team working with women in the criminal justice system. the role will support women with multiple unmet needs to reduce the barriers to accessing substance Misuse services.
                                            <br/>
                                            <br/>
                                            with a non judgmental and holistic approach, the successful candidate will engage women in the community by providing intensive handholding support and advocacy .<br/><br/>joint working with partner services required including statutory services and HMP Styal. successful employment is subject to enhanced DBS and Level 1 vetting</div>
                                        <div className="post-img-container">
                                            <img className="post-img" src="https://images.pexels.com/photos/6984616/pexels-photo-6984616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                                        </div>
                                        <div className="post-time">Aug 23, 2023</div>
                                        <div className="post-buttons-container">
                                            <div className="post-button">74 Likes</div>
                                            <div className="post-button">Comment</div>
                                            <div className="post-button">Share</div>
                                            <div className="post-button">🎉 34</div>
                                            <div className="post-button">💓 54 </div>
                                            <div className="post-button">🤗 23</div>
                                        </div>
                                        <div className="post-comments">23 comments</div>
                                </div>
                            </div>
                        
                        </div>
                    </div>

                </div>
            </main>
        
        </div>

    )
}