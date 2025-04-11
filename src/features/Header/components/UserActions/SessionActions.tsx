import { ACTION_BUTTON_STYLES } from "../../../../config/buttonsConfig/buttonStyleConfig";

export default function SessionActions({credits, setModalKey}: CreditProps & SetModalProps){

    return (
        <ul className="header__nav-list" aria-label="User actions">

            <li className={ACTION_BUTTON_STYLES.SECONDARY}
                onClick={()=>setModalKey("STREAM_NOW")}>
                Stream Now
            </li>

            <li className={ACTION_BUTTON_STYLES.PRIMARY}
                onClick={()=>setModalKey("BUY_TOKENS")}>
                Buy Tokens
            </li>

            <li className={ACTION_BUTTON_STYLES.SECONDARY}
                onClick={()=>setModalKey("BUY_NOW")}>
                <i className="fas fa-coins"></i> {credits}
            </li>

        </ul>
    )
}