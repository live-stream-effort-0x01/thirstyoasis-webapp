import { Link } from "react-router";
import { useState } from "react";
import logo from "../../assets/ThirstyOasis.png"
import NavBar from "./components/NavBar/NavBar";
import LoginActions from "./components/UserActions/LoginActions";
import SessionActions from "./components/UserActions/SessionActions";


export default function Header(
    {isAuth, setIsAuth, credits, modalKey, setModalKey}: SessionProps & setAuthProps & ReadModalProps & SetModalProps
){
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="header">

            <div className="header__menu">
                <Link to="/">
                    <img src={logo} alt="logo" className="header__logo" />
                </Link>

                <div className="hamburger-menu" onClick={toggleMobileMenu}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>

            <div className={`header__nav-container ${isMobileMenuOpen ? 'header__nav-container--active' : ''}`}>
                <NavBar isMobileMenuOpen={isMobileMenuOpen} closeMobileMenu={closeMobileMenu} />
                {isAuth? 
                    <SessionActions 
                        setIsAuth={setIsAuth} 
                        credits={credits} 
                        modalKey={modalKey} 
                        setModalKey={setModalKey}
                        isMobileMenuOpen={isMobileMenuOpen}
                        closeMobileMenu={closeMobileMenu}
                    />
                    : 
                    <LoginActions 
                        modalKey={modalKey} 
                        setModalKey={setModalKey}
                        isMobileMenuOpen={isMobileMenuOpen}
                        closeMobileMenu={closeMobileMenu}
                    />
                }
            </div>
       </header>
    )
        
}

