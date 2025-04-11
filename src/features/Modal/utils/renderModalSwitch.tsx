import BuyNow from "../Modals/BuyNow";
import BuyTokens from "../Modals/BuyTokens";
import LoginModal from "../Modals/Login";
import Signup from "../Modals/Signup";
import StreamNow from "../Modals/StreamNow";

export default function renderModalSwitch(newModalKey: ModalKey | null, {modalKey, setModalKey}: ModalProps){

    if (newModalKey === null) return;

    switch(newModalKey){
        case "LOGIN": return <LoginModal modalKey={modalKey} setModalKey={setModalKey} />
        
        case "SIGNUP": return <Signup/>

        case "STREAM_NOW" : return <StreamNow />

        case "BUY_TOKENS" : return <BuyTokens/>

        case "BUY_NOW" : return <BuyNow />
    }
}