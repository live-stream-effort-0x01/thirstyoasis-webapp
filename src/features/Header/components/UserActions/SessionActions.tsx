import handleModalClick from "../../../Modal/utils/handleModalClick";
import avatar from '../../../../assets/avatar.jpg'
import token_coins from "../../../../assets/token_coins.svg"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function SessionActions(
    {setIsAuth, credits, modalKey, setModalKey}: setAuthProps & CreditProps & ReadModalProps & SetModalProps
){
    
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
    
    const handleLogout = () => {
      console.log("User logged out");
      // logout logic here
      setIsAuth(false);
    };
    
    const handleProfileClick = () => {
      navigate('/profile');
    };
    
    return (
        <ul className="header__nav-list header__nav-list--right" aria-label="User actions">

            <li className="header__nav-item header__nav-item--secondary"
                onClick={()=>handleModalClick("STREAM_NOW", {modalKey, setModalKey})}>
                Stream Now
            </li>

            <li className="header__nav-item header__nav-item--primary"
                onClick={()=>handleModalClick("BUY_TOKENS", {modalKey, setModalKey})}>
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
          <img src={avatar} alt="User Avatar" className="avatar-image" />
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