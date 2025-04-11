import { ACTION_BUTTON_STYLES } from "../../../../config/buttonsConfig/buttonStyleConfig";


export default function LoginActions({setModalKey}: SetModalProps){
    
    return (
        <ul className="header__nav-list" aria-label="Auth actions">

            <li className={ACTION_BUTTON_STYLES.SECONDARY}
                onClick={()=>setModalKey("LOGIN")}>
                Login
            </li>

            <li className={ACTION_BUTTON_STYLES.PRIMARY}
                onClick={()=>setModalKey("SIGNUP")}>
                Sign Up
            </li>

        </ul>
    )
}

