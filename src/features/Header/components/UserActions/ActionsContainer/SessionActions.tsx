import { ACTION_BUTTON_STYLES } from "../../../../../config/buttonsConfig/buttonStyleConfig";
import { MODALS } from "../../../../Modals/config/modalsConfig";
import openModal from "../../../../Modals/utils/openModal";
import ActionButton from "../ActionsButton/ActionButton";


export default function SessionActions({credits}: CreditProps){

    return (
        <ul className="header__nav-list header__nav-list--right"
            aria-label="User actions">

            <ActionButton 
                classes={ACTION_BUTTON_STYLES.SECONDARY}
                text="Stream Now"
                onClickFunction={()=> openModal(MODALS.STREAM_NOW)}
                modalKey="STREAM_NOW"/>

            <li className="header__nav-item header__nav-item--primary" 
                onClick={()=>openModal(MODALS.BUY_TOKENS)}
            >
                Buy Tokens
            </li>

            <li className="header__nav-item header__nav-item--secondary"
                onClick={()=>openModal(MODALS.BUY_NOW)} 
            >
                <i className="fas fa-coins"></i> {credits}
            </li>
        </ul>
    )
}