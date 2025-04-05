import logo from "../../assets/ThirstyOasis.png"
import NavBar from "./components/NavBar";
import LoginActions from "./components/UserActionsComponents/LoginActions";
import SessionActions from "./components/UserActionsComponents/SessionActions";
import toggleMenu from "./utils/toggleMenu";


export default function Header({isAuth}: AuthProps){

    return (
        <header className="header">

            <div className="header__menu">
                <img src={logo} alt="logo" className="header__logo" />
                <div className="hamburger-menu" onClick={()=>toggleMenu()}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>

            <div className="header__nav-container">
                <NavBar/>

                {isAuth? <SessionActions coins={5600}/>: <LoginActions/>}

            </div>
       </header>
    )
        
}

