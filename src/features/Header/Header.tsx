import logo from "../../assets/ThirstyOasis.png"
import NavBar from "./components/NavBar/NavBar";
import LoginActions from "./components/UserActions/LoginActions";
import SessionActions from "./components/UserActions/SessionActions";
import toggleMenu from "./utils/toggleMenu";


export default function Header({isAuth, credits, setModalKey}: SessionProps & SetModalProps){

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

                {isAuth? 
                    <SessionActions credits={credits} setModalKey={setModalKey}/>
                    : 
                    <LoginActions setModalKey={setModalKey}/>
                }

            </div>
       </header>
    )
        
}

