import { MODALS } from "../config/modalsConfig"
import openModal from "./openModal"


export default function handleModalClick(
    newModalKey: ModalKey, 
    {modalKey, setModalKey}: ModalProps
) {
    
    if (modalKey !== newModalKey) setModalKey(newModalKey)
    else openModal(MODALS[newModalKey])
}