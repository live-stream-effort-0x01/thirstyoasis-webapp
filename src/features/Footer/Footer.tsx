import logo from "../../assets/ThirstyOasis.png"

export default function Footer(){
    
    return(
        <footer className="footer">
            <img src={logo} alt="logo" className="footer__logo"/>
            <p className="footer__copyright">&copy; 2025 Thirsty Oasis. All rights reserved.</p>
        </footer>
    )
}