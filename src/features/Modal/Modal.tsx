import { useEffect } from "react";
import renderModalSwitch from "./utils/renderModalSwitch";
import { MODALS } from "./config/modalsConfig";
import openModal from "./utils/openModal";



export default function Modal({modalKey, setModalKey}:ModalProps){
    
    //after rendering (with display: none) the display styles are changed by the useEffect
    useEffect(()=>{ 
        if (modalKey === null) return;
        
        openModal(MODALS[modalKey])

    },[modalKey])


    return(
        <>
            {renderModalSwitch(modalKey, {modalKey, setModalKey})}
        </>
    )
}