
import login from './loginpage.css?inline';
import './general.css'
import { Outlet, Link } from "react-router-dom";


export default function Login() {
    return(
        <>
            <div className={login['left-side']}>
                <Link to={`/`}><img className={login.logo} src='empoweryoulogodark.png'></img></Link>
                <div className={login.left-side__text-container}>
                    <div className={login.left-side__text-1}>We are...</div>
                    <div className={login.left-side__text-2}>
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

            <div className={login.right-side}>
                <div className={login.login-title}>Login </div>
                <input className={login.email-box} type='text' placeholder='email'></input>
                <input className={login.password-box} type='text' placeholder='password' ></input>
                <div className={login.continue-button}>Continue</div>

                <div className={login.sign-up-container}> 
                    <div className={login.sign-up-text}>Don't have an account?</div>
                    <Link className={login.sign-up-button} to={'/signup'}>Sign up</Link>

                </div>

            </div>
        </>

    )
}