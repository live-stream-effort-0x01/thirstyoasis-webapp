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
                content="Stream Now"
                onClickFunction={()=> openModal(MODALS.STREAM_NOW)}
                modalKey="STREAM_NOW"/>

            <ActionButton 
                classes={ACTION_BUTTON_STYLES.PRIMARY}
                content="Buy Tokens"
                onClickFunction={()=> openModal(MODALS.BUY_TOKENS)}
                modalKey="BUY_TOKENS"/>
                
            <ActionButton 
                classes={ACTION_BUTTON_STYLES.PRIMARY}
                content={<><i className="fas fa-coins"></i> {credits}</>}
                onClickFunction={()=> openModal(MODALS.BUY_NOW)}
                modalKey="BUY_NOW"/>

        </ul>
    )
}