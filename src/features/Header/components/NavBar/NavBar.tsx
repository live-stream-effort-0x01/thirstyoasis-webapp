import { Link, useLocation } from "react-router";

export default function NavBar(){

    const {pathname} = useLocation()


    return (
        <nav aria-label="Main navigation">
            <ul className="header__nav-list header__nav-list--left">
                
                <Link to="/" >
                    <li className={`header__nav-item ${pathname === "/"?"header__nav-item--active":""}`}>
                        Browse
                    </li>
                </Link>
                
                <Link to="/404">
                    <li className={`header__nav-item ${pathname === "/following"?"header__nav-item--active":""}`}>
                        Following
                    </li>
                </Link>

                <Link to="/404">
                    <li className={`header__nav-item ${pathname === "/merch"?"header__nav-item--active":""}`}>
                        Merch
                    </li>
                </Link>
            </ul>
        </nav>
    )
}