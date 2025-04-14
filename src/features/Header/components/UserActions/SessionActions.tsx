import { ACTION_BUTTON_STYLES } from "../../../../config/buttonsConfig/buttonStyleConfig";
import handleModalClick from "../../../Modal/utils/handleModalClick";
import avatar from '../../../../assets/avatar.jpg'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function SessionActions({credits, modalKey, setModalKey}: CreditProps & ModalProps){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
    
    const handleLogout = () => {
      console.log("User logged out");
      // logout logic here
    };
    
    const handleProfileClick = () => {
      navigate('/profile');
    };
    
    return (
        <ul className="header__nav-list" aria-label="User actions">

            <li className={ACTION_BUTTON_STYLES.SECONDARY}
                onClick={()=>handleModalClick("STREAM_NOW", {modalKey, setModalKey})}>
                Stream Now
            </li>

            <li className={ACTION_BUTTON_STYLES.PRIMARY}
                onClick={()=>handleModalClick("BUY_TOKENS", {modalKey, setModalKey})}>
                Buy Tokens
            </li>

            <li className={ACTION_BUTTON_STYLES.SECONDARY}
                onClick={()=>handleModalClick("BUY_NOW", {modalKey, setModalKey})}>
                <i className="fas fa-coins"></i> {credits}
            </li>
            <li className="header__nav-list ">
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