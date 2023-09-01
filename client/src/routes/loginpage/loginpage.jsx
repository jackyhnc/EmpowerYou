
import './loginpage.css';
import '../general.css'
import { Outlet, Link } from "react-router-dom";


export default function Login() {
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
                <input className="login__email-box" type='text' placeholder='email'></input>
                <input className="login__password-box" type='text' placeholder='password' ></input>
                <div className="login__continue-button">Continue</div>

                <div className="login__sign-up-container"> 
                    <div className="login__sign-up-text">Don't have an account?</div>
                    <Link className="login__sign-up-button" to={'/signup'}>Sign up</Link>

                </div>

            </div>
        </>

    )
}