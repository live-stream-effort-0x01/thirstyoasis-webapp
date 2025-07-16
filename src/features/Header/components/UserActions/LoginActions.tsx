import handleModalClick from "../../../Modal/utils/handleModalClick";

interface LoginActionsProps extends ReadModalProps, SetModalProps {
    isMobileMenuOpen?: boolean;
    closeMobileMenu?: () => void;
}

export default function LoginActions(
    {modalKey, setModalKey, isMobileMenuOpen, closeMobileMenu}: LoginActionsProps
){
    
    const handleModalAction = (modalType: ModalKey) => {
        handleModalClick(modalType, {modalKey, setModalKey});
        if (closeMobileMenu) {
            closeMobileMenu();
        }
    };

    return (
        <ul className={`header__nav-list header__nav-list--auth ${isMobileMenuOpen ? 'header__nav-list--active' : ''}`} aria-label="Auth actions">

            <li className="header__nav-item header__nav-item--secondary"
                onClick={() => handleModalAction("LOGIN")}>
                Login
            </li>

            <li className="header__nav-item header__nav-item--primary"
                onClick={() => handleModalAction("SIGNUP")}>
                Sign Up
            </li>

        </ul>
    )
}

