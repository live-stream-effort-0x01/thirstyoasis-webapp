import { Link, useLocation } from "react-router";

interface NavBarProps {
    isMobileMenuOpen?: boolean;
    closeMobileMenu?: () => void;
}

export default function NavBar({ isMobileMenuOpen, closeMobileMenu }: NavBarProps){
    const {pathname} = useLocation()

    const handleLinkClick = () => {
        if (closeMobileMenu) {
            closeMobileMenu();
        }
    };

    return (
        <nav aria-label="Main navigation">
            <ul className={`header__nav-list header__nav-list--left ${isMobileMenuOpen ? 'header__nav-list--active' : ''}`}>
                <li>
                    <Link 
                        to="/" 
                        className={`header__nav-item ${pathname === "/"?"header__nav-item--active":""}`}
                        onClick={handleLinkClick}
                    >
                        Browse
                    </Link>
                </li>
                
                <li>
                    <Link 
                        to="/404" 
                        className={`header__nav-item ${pathname === "/following"?"header__nav-item--active":""}`}
                        onClick={handleLinkClick}
                    >
                        Following
                    </Link>
                </li>

                <li>
                    <Link 
                        to="/404" 
                        className={`header__nav-item ${pathname === "/merch"?"header__nav-item--active":""}`}
                        onClick={handleLinkClick}
                    >
                        Merch
                    </Link>
                </li>
            </ul>
        </nav>
    )
}