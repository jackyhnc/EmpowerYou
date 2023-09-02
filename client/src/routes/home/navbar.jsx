import "../general.css"
import "./navbar.css"
import { useNavigate } from "react-router-dom"

export default function home__Navbar(props) {
    const {scrollToNetworkSection,scrollToHotlinesSection,scrollToTopSection,user,logout} = props
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logout()
            navigate("/")
            console.log("logged out!")
        } catch(e) {
            console.log(e.message)
        }
    }

  return (
    <div className="home__nav">
        <div className="home__nav__profile-container">
            <div className="home__nav__profile-container__profile-picture-container">
                <img className="home__nav__profile-container__profile-picture" src="https://i.redd.it/v0caqchbtn741.jpg"></img>
            </div>
            <div className="home__nav__profile-container__name-email-container">
                <div className="home__nav__profile-container__name">Hey,</div>
                <div className="home__nav__profile-container__email">  {user && user.email}!</div>
            </div>
        </div>
        <div className="home__nav__menu">
            <div className="home__nav__menu-button-active" onClick={scrollToTopSection}>
                <img className="home__nav__menu-button__icon" src="../dashboard icon.svg"></img>
                <div className="home__nav__menu-button__title">Dashboard</div>
            </div>
            <div className="home__nav__menu-button" onClick={scrollToNetworkSection}>
                <img className="home__nav__menu-button__icon" src="../people.svg"></img>
                <div className="home__nav__menu-button__title">Network</div>
            </div>
            <div className="home__nav__menu-button" onClick={scrollToHotlinesSection}>
                <img className="home__nav__menu-button__icon" src="../call.svg"></img>
                <div className="home__nav__menu-button__title">Hotlines</div>
            </div>
        </div>
        <div className="home__nav__bottom-menu">
            <img className="home__nav__logo" src="../empoweryoulogolight.png"></img>
            <div className="home__nav__menu-button">
                <img className="home__nav__menu-button__icon" src="../settings icon.svg"></img>
                <div className="home__nav__menu-button__title">Settings</div>
            </div>
            <div className="home__nav__menu-button" onClick={handleLogout}>
                <img className="home__nav__menu-button__icon" src="../logout icon.svg"></img>
                <div className="home__nav__menu-button__title">Log out</div>
            </div>
        </div>
    </div>
  )
}
