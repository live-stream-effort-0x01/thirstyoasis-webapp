import { Link, useLocation } from "react-router";

export default function NavBar(){
    const {pathname} = useLocation()

    return (
        <nav aria-label="Main navigation">
            <ul className="header__nav-list header__nav-list--left">
                <li>
                    <Link to="/" className={`header__nav-item ${pathname === "/"?"header__nav-item--active":""}`}>
                        Browse
                    </Link>
                </li>
                
                <li>
                    <Link to="/404" className={`header__nav-item ${pathname === "/following"?"header__nav-item--active":""}`}>
                        Following
                    </Link>
                </li>

                <li>
                    <Link to="/404" className={`header__nav-item ${pathname === "/merch"?"header__nav-item--active":""}`}>
                        Merch
                    </Link>
                </li>
            </ul>
        </nav>
    )
}