import handleModalClick from "../../../Modal/utils/handleModalClick";


export default function LoginActions(
    {modalKey, setModalKey}: ReadModalProps & SetModalProps
){
    
    return (
        <ul className="header__nav-list header__nav-list--auth" aria-label="Auth actions">

            <li className="header__nav-item header__nav-item--secondary"
                onClick={()=>handleModalClick("LOGIN", {modalKey, setModalKey})}>
                Login
            </li>

            <li className="header__nav-item header__nav-item--primary"
                onClick={()=>handleModalClick("SIGNUP", {modalKey, setModalKey})}>
                Sign Up
            </li>

        </ul>
    )
}

