import { MODALS } from "../../../../config/modalsConfig/modalConfig";
import openModal from "../../../overlays/utils/openModal";

export default function LoginActions(){
    
    return (
        <ul className="header__nav-list header__nav-list--right" 
            aria-label="Auth actions">
            
            <li className="header__nav-item header__nav-item--secondary" 
                onClick={()=>openModal(MODALS.LOGIN)}>
            Login
            </li>
            
            <li className="header__nav-item header__nav-item--primary" 
                onClick={()=>openModal(MODALS.SIGNUP)}>
            Sign Up
            </li>
        </ul>
    )
}

