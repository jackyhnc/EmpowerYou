
import './loginpage.css';
import '../general.css'
import { Outlet, Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext"
import {useState, useRef, useEffect} from "react"



export default function Login() {
    const {login} = UserAuth()
    const navigate = useNavigate()

    const emailRef = useRef();

    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')

    useEffect(() => {
        emailRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [email, pwd])

    const handleSubmit = async (e) => {
        setErrMsg('')
        e.preventDefault()

        try {
            await login(email, pwd)
            navigate('/home')
        } catch (err) {
            setErrMsg(err.message)
            console.error(err)
        }
    }

    return(
        <>
            <div className="login__left-side">
                <Link to={`/`}><img className='login__logo' src='empoweryoulogodark.png'></img></Link>
                <div className="login__left-side__text-container">
                    <div className="login__left-side__text-1">We are...</div>
                    <div className="login__left-side__text-2">
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

            <div className="login__right-side">
                <div className="login__login-title">Login </div>
                    <form onSubmit={handleSubmit}>
                        <input className="login__email-box" type='text' placeholder='email'
                        id="email"
                        ref={emailRef}
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        />
                        <input className="login__password-box" type='password' placeholder='password'
                        id="password"
                        autoComplete="off"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                        />
                        <button className="login__continue-button">Continue</button>
                        <div className="login__err-msg">{errMsg}</div>
                    </form>
                    
                <div className="login__sign-up-container"> 
                    <div className="login__sign-up-text">Don't have an account?</div>
                    <Link className="login__sign-up-button" to={'/signup'}>Sign up</Link>

                </div>

            </div>
        </>

    )
}