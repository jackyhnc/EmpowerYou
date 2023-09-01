import "../general.css"
import "./navbar.css"

export default function home__Navbar() {
  return (
    <div className="home__nav">
        <div className="home__nav__profile-container">
            <div className="home__nav__profile-container__profile-picture-container">
                <img className="home__nav__profile-container__profile-picture" src="https://i.redd.it/v0caqchbtn741.jpg"></img>
            </div>
            <div className="home__nav__profile-container__name-email-container">
                <div className="home__nav__profile-container__name">Joe Smith</div>
                <div className="home__nav__profile-container__email">example@gmail.com</div>
            </div>
        </div>
        <div className="home__nav__menu">
            <div className="home__nav__menu-button-active">
                <img className="home__nav__menu-button__icon" src="../public/dashboard icon.svg"></img>
                <div className="home__nav__menu-button__title">Dashboard</div>
            </div>
            <div className="home__nav__menu-button">
                <img className="home__nav__menu-button__icon" src="../public/dashboard icon.svg"></img>
                <div className="home__nav__menu-button__title">Example</div>
            </div>
            <div className="home__nav__menu-button">
                <img className="home__nav__menu-button__icon" src="../public/dashboard icon.svg"></img>
                <div className="home__nav__menu-button__title">Example</div>
            </div>
        </div>
        <div className="home__nav__bottom-menu">
            <img className="home__nav__logo" src="../public/empoweryoulogolight.png"></img>
            <div className="home__nav__menu-button">
                <img className="home__nav__menu-button__icon" src="../public/settings icon.svg"></img>
                <div className="home__nav__menu-button__title">Settings</div>
            </div>
            <div className="home__nav__menu-button">
                <img className="home__nav__menu-button__icon" src="../public/logout icon.svg"></img>
                <div className="home__nav__menu-button__title">Log out</div>
            </div>
        </div>
    </div>
  )
}
