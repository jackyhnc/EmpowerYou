import './signuppage.css'
import './general.css'
import { useRef, useState, useEffect } from 'react'
import { UserAuth } from '../../contexts/AuthContext'
import { Outlet, Link } from "react-router-dom";

const USER_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

export default function Signup() {
    const emailRef = useRef();

    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)
    const { createUser } = UserAuth()

    useEffect(() => {
        emailRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [email, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const validEmail = USER_REGEX.test(email)
        const validPwd = PWD_REGEX.test(pwd)
        if (!validEmail || !validPwd ) {
            setErrMsg('Invalid Entry. Password must include uppercase and lowercase letters, a number and a special character.')
            return
        }

        try {
            await createUser(email, pwd)
        } catch (err) {
            console.error(err)
        }
    }

    return(
        <>
            <div className="left-side">
                <Link to={`/`}><img className='logo' src='empoweryoulogodark.png'></img></Link>
                <div className="left-side__text-container">
                    <div className="left-side__text-1">We are...</div>
                    <div className="left-side__text-2">
                        Challenging Norms
                        <br/>
                        Breaking Barriers
                        <br/>
                        Fostering Education
                        <br/>
                        Raising Leaders
                        <br/>
                        Driver Progress
                        <br/>
                        Advocates for Change
                        <br/>
                        Inspiring the Future
                        <br/>
                        Cultivating Empowerment
                        <br/>
                        Building a Better World
                    </div>
                </div>
            </div>
                <div className="right-side">
                    <div className="login-title">Welcome to EmpowerYou! </div>
                    <div className="login-title-2">Join the movement for free </div>
                    <form onSubmit={handleSubmit}>
                        <input className="email-box" type='text' placeholder='email'
                        id="email"
                        ref={emailRef}
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        />
                        <input className="password-box" type='text' placeholder='password'
                        id="password"
                        autoComplete="off"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                        />
                        <button className="continue-button">Continue</button>
                        <div className='err-msg'>{errMsg}</div>
                    </form>

                <div className="sign-up-container"> 
                    <div className="sign-up-text">Have an account?</div>
                    <Link className="sign-up-button" to={'/login'}>Log in</Link>
                </div>  
            </div>
        </>
            
    )
}