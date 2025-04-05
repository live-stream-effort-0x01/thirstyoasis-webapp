import LoginModal from "../../../../../Modals/Login";
import Signup from "../../../../../Modals/Signup";
import StreamNow from "../../../../../Modals/StreamNow";

export default function renderModalSwitch(modalKey: ModalKey){

    switch(modalKey){
        case "LOGIN": return <LoginModal />
        
        case "SIGNUP": return <Signup />

        case "STREAM_NOW" : return <StreamNow />

        case "BUY_TOKENS" : return

        case "BUY_NOW" : return 
    }
}