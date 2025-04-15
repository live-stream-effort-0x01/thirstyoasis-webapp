import { Link } from "react-router";
import logo from "../../assets/ThirstyOasis.png"
import NavBar from "./components/NavBar/NavBar";
import LoginActions from "./components/UserActions/LoginActions";
import SessionActions from "./components/UserActions/SessionActions";
import toggleMenu from "./utils/toggleMenu";


export default function Header(
    {isAuth, setIsAuth, credits, modalKey, setModalKey}: SessionProps & setAuthProps & ReadModalProps & SetModalProps
){

    return (
        <header className="header">

            <div className="header__menu">
                <Link to="/">
                    <img src={logo} alt="logo" className="header__logo" />
                </Link>

                <div className="hamburger-menu" onClick={()=>toggleMenu()}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>

            <div className="header__nav-container">
                <NavBar/>

                {isAuth? 
                    <SessionActions setIsAuth={setIsAuth} credits={credits} modalKey={modalKey} setModalKey={setModalKey} />
                    : 
                    <LoginActions modalKey={modalKey} setModalKey={setModalKey}/>
                }

            </div>
       </header>
    )
        
}

