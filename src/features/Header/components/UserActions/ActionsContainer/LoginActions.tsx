import ActionButton from "../ActionsButton/ActionButton";
import { ACTION_BUTTON_STYLES } from "../../../../../config/buttonsConfig/buttonStyleConfig";
import { MODALS } from "../../../../Modals/config/modalsConfig";
import openModal from "../../../../Modals/utils/openModal";

export default function LoginActions(){
    
    return (
        <ul className="header__nav-list header__nav-list--right" 
            aria-label="Auth actions">

            <ActionButton 
                classes={ACTION_BUTTON_STYLES.SECONDARY}
                content="Login"
                onClickFunction={()=>openModal(MODALS.LOGIN)}
                modalKey="LOGIN"/>

            <ActionButton 
                classes={ACTION_BUTTON_STYLES.PRIMARY}
                content="Sign Up"
                onClickFunction={()=>openModal(MODALS.SIGNUP)}
                modalKey="SIGNUP"/>

        </ul>
    )
}

