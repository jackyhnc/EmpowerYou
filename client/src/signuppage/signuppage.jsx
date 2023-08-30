
import './signuppage.css'
import './general.css'


function App() {
    return(
        <>
            <div className="left-side">
                <img className='logo' src='empoweryoulogodark.png'></img>
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
                <div className="login-title">Welcome! </div>
                <div className="login-title-2">Join the movement for free </div>
                <input className="email-box" type='text' placeholder='email'></input>
                <input className="password-box" type='text' placeholder='password' ></input>
                <div className="continue-button">Continue</div>

                <div className="sign-up-container"> 
                    <div className="sign-up-text">Have an account?</div>
                    <div className="sign-up-button">Log in</div>
                </div>

            </div>
        </>

    )
}

export default App