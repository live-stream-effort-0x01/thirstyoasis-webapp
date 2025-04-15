import BuyNow from "../Modals/BuyNow";
import BuyTokens from "../Modals/BuyTokens";
import LoginModal from "../Modals/Login";
import Signup from "../Modals/Signup";
import StreamNow from "../Modals/StreamNow";

export default function renderModalSwitch({modalKey, setModalKey}: ModalProps ) {

    if (modalKey === null) return;

    switch(modalKey){
        case "LOGIN": return <LoginModal modalKey={modalKey} setModalKey={setModalKey} />
        
        case "SIGNUP": return <Signup/>

        case "STREAM_NOW" : return <StreamNow />

        case "BUY_TOKENS" : return <BuyTokens/>

        case "BUY_NOW" : return <BuyNow />


        // Modals with specific props (not ModalProps) will be scoped to the features they are used in.
        // This way the props are kept at minimum.
    }
}