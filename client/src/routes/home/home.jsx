import { useState, useEffect, useRef } from 'react'
import './home.css'
import { UserAuth } from '../../contexts/AuthContext'
import UID from '../generateUID'

import Navbar from './navbar'

import {db} from '../../firebase'
import {query, collection, onSnapshot, updateDoc, doc, addDoc, orderBy} from 'firebase/firestore'

export default function Home() {
    const {user, logout} = UserAuth()

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

    const hotlinesSection = useRef(null)
    const networkSection = useRef(null)
    const topSection = useRef(null)

    const scrollToHotlinesSection = () => { window.scrollTo({ top: hotlinesSection.current.offsetTop, behavior: 'smooth', }) }
    const scrollToNetworkSection = () => { window.scrollTo({ top: networkSection.current.offsetTop, behavior: 'smooth', }) }
    const scrollToTopSection = () => { window.scrollTo({ top: 0, behavior: 'smooth', }) }

    //create post
    const [posts, setPosts] = useState([])

    const [postData, setPostData] = useState({
        username:"",
        title:"",
        description:"",
        media:""
    })

    const [showAddPost, setShowAddPost] = useState(false)
    const handleShowAddPost = () => {
        setShowAddPost(!showAddPost)
    }

    const handleAddPost = async (e) => {
        e.preventDefault(e)

        await addDoc(collection(db, 'posts'), {
            date: Date.now(),
            username: postData.username,
            title: postData.title,
            description: postData.description,
            media: postData.media,
            likes:[]
        })

        setShowAddPost(false)
        setPostData({
            username:"",
            title:"",
            description:"",
            media:""
        })
    }

    //read posts
    useEffect(() => {
        const q = query(collection(db, 'posts'), orderBy("date", "desc"))

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let postsArr = []
            querySnapshot.forEach((doc) => {
                postsArr.push({...doc.data(), id: doc.id})
            })
            setPosts(postsArr)
        })
        return () => unsubscribe
    },[])

    //update posts
    const updateLikes = async (post) => {
        const newLikesCount = post.likes.length + 1
        try {
            if (!post.likes.includes(user.uid)) {
                await updateDoc(doc(db, 'posts', post.id), {
                    likes: [...post.likes, user.uid]
                })
            } else {
                await updateDoc(doc(db, 'posts', post.id), {
                    likes: post.likes.filter(selectedUser => {
                        selectedUser !== user.id
                    })
                })
            }
        } catch(err) {
            console.error(err)
        }

    }

    return (
        <div className='home__body'>
            <Navbar scrollToHotlinesSection={scrollToHotlinesSection} scrollToNetworkSection={scrollToNetworkSection} scrollToTopSection={scrollToTopSection} user={user} logout={logout} />
            <main>
                <div className="home__courses-section">
                    <div className="home__courses-section-title">Courses</div>
                    <div id="courses-container" className="home__courses-container">
                        <div className="home__course">
                            <div className="home__course-title">Introduction</div>
                            <div className="home__course-description">The beginnings of a journey</div>
                            <div className="home__course-img-container">
                                <div className="home__course-img-overlay"></div>
                                <img className='home__course-img' src="../courseimgs/introduction.jpg"></img>
                            </div>
                        </div>
                        <div className="home__course">
                            <div className="home__course-title">Mental Health</div>
                            <div className="home__course-description">Signs of negative feedback thoughts</div>
                            <div className="home__course-img-container">
                                <div className="home__course-img-overlay"></div>
                                <img className='home__course-img' src="https://images.pexels.com/photos/5257604/pexels-photo-5257604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                            </div>
                        </div>
                        <div className="home__course">
                            <div className="home__course-title">Types of Abuse</div>
                            <div className="home__course-description">Abuse can even be unnoticable to the victim</div>
                            <div className="home__course-img-container">
                                <div className="home__course-img-overlay"></div>
                                <img className='home__course-img' src="https://images.pexels.com/photos/6502500/pexels-photo-6502500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                            </div>
                        </div>
                        <div className="home__course">
                            <div className="home__course-title">Relationships</div>
                            <div className="home__course-description">People around you can either bring you up or put you down</div>
                            <div className="home__course-img-container">
                                <div className="home__course-img-overlay"></div>
                                <img className='home__course-img' src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                            </div>
                        </div>
                        <div className="home__course">
                            <div className="home__course-title">Recovery</div>
                            <div className="home__course-description">How to recover from trauma</div>
                            <div className="home__course-img-container">
                                <div className="home__course-img-overlay"></div>
                                <img className='home__course-img' src="https://images.pexels.com/photos/4426522/pexels-photo-4426522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home__checkup-networking-hotlines-container">
                    <div className="home__checkup-container">
                        <div className="home__checkup">
                            <div className="home__checkup-section-title">Mental Health</div>
                            <img className='home__checkup-icon' src={`../checkupicons/${mood}.png`}></img>
                            <div className="home__checkup-title">
                                {
                                    mood == "happy" ? "Your doing great!" :
                                    mood == "neutral" ? "Feeling okay.":
                                    "Hey, you alright?"
                                }
                            </div>
                            <div className="home__checkup-section-2">
                                <div className="home__checkup-text">Take a quick checkup below</div>
                                <div className="home__checkup-button" onClick={changeMood}>Check up</div>
                            </div>
                        </div>
                    </div>
                    <div className="home__hotlines-container" ref={hotlinesSection}>
                        <div className="home__hotlines-section">
                            <div className="home__hotlines-text-title-container">
                                <div className="home__hotlines-title">Hotlines For Your Area (UK)</div>
                                <div className="home__hotlines-text">
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
                    <div className="home__networking-container" ref={networkSection}>
                        <div className="home__networking-section">
                            <div className="home__posts-container">
                                <div className="home__networking-title-add-container">
                                    <div className="home__networking-title">Network</div>
                                    <div className="home__post-button" onClick={handleShowAddPost} style={{margin:0,position: "absolute", right:0, marginRight:"90px"}}>{showAddPost ? "Delete Post" : "Add Post"}</div>
                                    
                                </div>
                                {showAddPost && 
                                    <form className="home__add-post-container" onSubmit={handleAddPost} style={{paddingTop:"30px"}}>
                                        <div className="home__hotlines-text">Your post</div>
                                        <textarea className="home__input-box"  placeholder='Username or email'
                                        id="username"
                                        autoComplete="off"
                                        onChange={(e) => setPostData({...postData, username:e.target.value})}
                                        value={postData.username}
                                        required
                                        style={{height:"20px"}}
                                        />
                                        <textarea className="home__input-box" placeholder='Title'
                                        id="title"
                                        autoComplete="off"
                                        onChange={(e) => setPostData({...postData, title:e.target.value})}
                                        value={postData.title}
                                        required
                                        style={{height:"20px"}}
                                        />
                                        <textarea className="home__input-box" placeholder='Description'
                                        id="description"
                                        autoComplete="off"
                                        onChange={(e) => setPostData({...postData, description:e.target.value})}
                                        value={postData.description}
                                        required
                                        />
                                        <textarea className="home__input-box" placeholder='Media link'
                                        id="description"
                                        autoComplete="off"
                                        onChange={(e) => setPostData({...postData, media:e.target.value})}
                                        value={postData.media}
                                        required
                                        style={{height:"20px"}}
                                        />
                                
                                        <button className="home__continue-button">Continue</button>
                                        <div className="home__err-msg"></div>
                                    </form>
                                }
                                {posts.map(post => {
                                    return (
                                        <div className="home__post" key={post.date}>
                                        <div className="home__post-profile">
                                            <img className="home__post-profile-img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"></img>
                                            <div className="home__post-username">{post.username}</div>
                                        </div>
                                        <div className="home__post-title">{post.title}</div>
                                        <div className="home__post-description">{post.description}</div>
                                        <div className="home__post-img-container">
                                            <img className="home__post-img" src={post.media}></img>
                                        </div>
                                        <div className="home__post-buttons-container">
                                            <div className="home__post-button" onClick={() => {updateLikes(post)}}>{post.likes.length} {post.likes.length > 1 ? "Likes": post.likes.length > 0 ? "Like": "Likes"}</div>
                                            <div className="home__post-button">Comment</div>
                                            <div className="home__post-button">Share</div>
                                        </div>
                                        <div className="home__post-comments">{post.comment ? post.comment.length : "0"} comments</div>
                                        </div>
                                    )
                                })}
                                <div className="home__post">
                                        <div className="home__post-profile">
                                            <img className="home__post-profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThDsB5AghscaCHlvtK1u4E1vjKgvGA7blOVVZK1iA&s"></img>
                                            <div className="home__post-username">Lancashire Women, Burnley, UK</div>
                                        </div>
                                        <div className="home__post-title">Looking for a Recovery Worker</div>
                                        <div className="home__post-description">
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
                                        <div className="home__post-img-container">
                                            <img className="home__post-img" src="https://images.pexels.com/photos/6984616/pexels-photo-6984616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                                        </div>
                                        <div className="home__post-time">Aug 23, 2023</div>
                                        <div className="home__post-buttons-container">
                                            <div className="home__post-button">74 Likes</div>
                                            <div className="home__post-button">Comment</div>
                                            <div className="home__post-button">Share</div>
                                            <div className="home__post-button">🎉 34</div>
                                            <div className="home__post-button">💓 54 </div>
                                            <div className="home__post-button">🤗 23</div>
                                        </div>
                                        <div className="home__post-comments">23 comments</div>
                                </div>
                                <div className="home__post">
                                    <div className="home__post-profile">
                                        <img className="home__post-profile-img" src="https://images.pexels.com/photos/8107686/pexels-photo-8107686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                                        <div className="home__post-username">LSE Library</div>
                                    </div>
                                    <div className="home__post-title">Ranjit Kaur's Impact at the RightsOfWomen</div>
                                    <div className="home__post-description">The late Ranjit Kaur was a committed social justice campaigner, author, and the first director of @rightsofwomen. <br/> <br/> In this clip, Ranjit tells us about some of the South Asian women who inspired her. Listen to the full interview: https://bit.ly/3rJruk8 #SouthAsianHeritageMonth</div>
                                    <div className="home__post-img-container">
                                        <img className="home__post-img" src="https://images.pexels.com/photos/8203158/pexels-photo-8203158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                                    </div>
                                    <div className="home__post-time">Aug 3, 2023</div>
                                    <div className="home__post-buttons-container">
                                        <div className="home__post-button">28 Likes</div>
                                        <div className="home__post-button">Comment</div>
                                        <div className="home__post-button">Share</div>
                                        <div className="home__post-button">🎉 19</div>
                                        <div className="home__post-button">💓 2 </div>
                                        <div className="home__post-button">🤗 10</div>
                                    </div>
                                    <div className="home__post-comments">23 comments</div>
                                </div>
                                <div className="home__post">
                                        <div className="home__post-profile">
                                            <img className="home__post-profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThDsB5AghscaCHlvtK1u4E1vjKgvGA7blOVVZK1iA&s"></img>
                                            <div className="home__post-username">Lancashire Women, Burnley, UK</div>
                                        </div>
                                        <div className="home__post-title">Looking for a Recovery Worker</div>
                                        <div className="home__post-description">
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
                                        <div className="home__post-img-container">
                                            <img className="home__post-img" src="https://images.pexels.com/photos/6984616/pexels-photo-6984616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                                        </div>
                                        <div className="home__post-time">Aug 23, 2023</div>
                                        <div className="home__post-buttons-container">
                                            <div className="home__post-button">74 Likes</div>
                                            <div className="home__post-button">Comment</div>
                                            <div className="home__post-button">Share</div>
                                            <div className="home__post-button">🎉 34</div>
                                            <div className="home__post-button">💓 54 </div>
                                            <div className="home__post-button">🤗 23</div>
                                        </div>
                                        <div className="home__post-comments">23 comments</div>
                                </div>
                            </div>
                        
                        </div>
                    </div>

                </div>
            </main>
        
        </div>

    )
}