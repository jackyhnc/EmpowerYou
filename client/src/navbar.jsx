import './navbar.css'

export default function Navbar() {
    return (
        <nav>
            <img className="nav__logo" src="../empoweryoulogo.png"></img>
            <div className="nav__buttons-container">
                <div className="nav__buttons">Home</div>
                <div className="nav__buttons">Login</div>
                <div className="nav__buttons">Signup</div>
                <div className="nav__buttons">Support</div>
                <div className="nav__buttons">About</div>
            </div>
        </nav>
    )
}