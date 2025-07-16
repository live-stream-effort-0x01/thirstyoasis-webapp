import handleModalClick from "../../../Modal/utils/handleModalClick";
import { useAuth } from '../../../../hooks/useAuth';
import avatar from '../../../../assets/avatar.jpg'
import token_coins from "../../../../assets/token_coins.svg"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SessionActionsProps extends setAuthProps, CreditProps, ReadModalProps, SetModalProps {
    isMobileMenuOpen?: boolean;
    closeMobileMenu?: () => void;
}

export default function SessionActions(
    {setIsAuth, credits, modalKey, setModalKey, isMobileMenuOpen, closeMobileMenu}: SessionActionsProps
){
    
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const { logout } = useAuth();

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
    
    const handleLogout = () => {
      console.log("User logged out");
      logout();
      navigate('/');
      setIsAuth(false);
      if (closeMobileMenu) {
          closeMobileMenu();
      }
    };
    
    const handleProfileClick = () => {
      navigate('/profile');
      if (closeMobileMenu) {
          closeMobileMenu();
      }
    };

    const handleModalAction = (modalType: ModalKey) => {
        handleModalClick(modalType, {modalKey, setModalKey});
        if (closeMobileMenu) {
            closeMobileMenu();
        }
    };
    
    return (
        <ul className={`header__nav-list header__nav-list--right ${isMobileMenuOpen ? 'header__nav-list--active' : ''}`} aria-label="User actions">

            <li className="header__nav-item header__nav-item--secondary"
                onClick={() => handleModalAction("STREAM_NOW")}>
                Stream Now
            </li>

            <li className="header__nav-item header__nav-item--primary"
                onClick={() => handleModalAction("BUY_TOKENS")}>
                Buy Tokens
            </li>

            <li className="header__nav-item header__nav-item--secondary header__nav-item--tertiary"
              >
                <img src={token_coins} alt="token coins"/>{credits}
            </li>
            <li>
        <button
          className="avatar-button"
          onClick={toggleDropdown}
          aria-label="User Profile"
        >
          <img src={avatar} alt="User Avatar" className="avatar-image" /> <span>Jane</span>
        </button>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-profile"
            >
              <img
                src={avatar}
                alt="User Avatar"
                className="dropdown-avatar"
              />
              <p className="dropdown-profile-name">Jane Doe</p>
            </div>

            <button className="dropdown-item" onClick={handleProfileClick}>Settings</button>
            
            <button className="dropdown-item" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </li>

        </ul>
    )
}
