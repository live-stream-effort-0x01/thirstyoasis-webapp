import { MODALS } from "../../../../config/modalsConfig/modalConfig";
import openModal from "../../../overlays/utils/openModal";

type Props = {
    coins: number
}

export default function SessionActions({coins}: Props){

    return (
        <ul className="header__nav-list header__nav-list--right"
            aria-label="User actions">

            <li className="header__nav-item header__nav-item--secondary" 
                onClick={()=>openModal(MODALS.STREAM_NOW)}
            >
                Stream Now
            </li>

            <li className="header__nav-item header__nav-item--primary" 
                onClick={()=>openModal(MODALS.BUY_TOKENS)}
            >
                Buy Tokens
            </li>

            <li className="header__nav-item header__nav-item--secondary"
                onClick={()=>openModal(MODALS.BUY_NOW)} 
            >
                <i className="fas fa-coins"></i> {coins}
            </li>
        </ul>
    )
}