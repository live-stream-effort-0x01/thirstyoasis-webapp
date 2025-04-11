import { ACTION_BUTTON_STYLES } from "../../../../config/buttonsConfig/buttonStyleConfig";
import handleModalClick from "../../../Modal/utils/handleModalClick";


export default function SessionActions({credits, modalKey, setModalKey}: CreditProps & ModalProps){

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

        </ul>
    )
}