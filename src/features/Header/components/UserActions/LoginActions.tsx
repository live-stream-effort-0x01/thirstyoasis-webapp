import { ACTION_BUTTON_STYLES } from "../../../../config/buttonsConfig/buttonStyleConfig";
import handleModalClick from "../../../Modal/utils/handleModalClick";


export default function LoginActions({modalKey, setModalKey}: ModalProps){
    
    return (
        <ul className="header__nav-list" aria-label="Auth actions">

            <li className={ACTION_BUTTON_STYLES.SECONDARY}
                onClick={()=>handleModalClick("LOGIN", {modalKey, setModalKey})}>
                Login
            </li>

            <li className={ACTION_BUTTON_STYLES.PRIMARY}
                onClick={()=>handleModalClick("SIGNUP", {modalKey, setModalKey})}>
                Sign Up
            </li>

        </ul>
    )
}

