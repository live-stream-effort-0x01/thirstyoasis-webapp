import useFixStylesheetOrder from "../../hooks/useFixStylesheetOrder"
import Header from "../../features/Header/Header";
import Slider from "../../features/Slider/Slider";
import AgreementOverlay from "../../features/Overlay/AgreementOverlay";
import LiveChannels from "../../features/LiveChannels/LiveChannels";
import Footer from "../../features/Footer/Footer";
import Modal from "../../features/Modal/Modal";
import useScrollToTop from "../../hooks/useScrollToTop";
import useCloseModalOnPageLoad from "../../features/Modal/hooks/useCloseModalOnPageLoad";


export default function LandingPage ({isAuth, credits, modalKey, setModalKey}:SessionProps & ModalProps) {

    document.title = (isAuth)? "ThirstyOasis":"Welcome"

    useFixStylesheetOrder();
    useScrollToTop();
    useCloseModalOnPageLoad(setModalKey);


    return (
        <div className="container">

            <AgreementOverlay />

            <Modal modalKey={modalKey} setModalKey={setModalKey}/>

            <Header isAuth={isAuth} credits={credits} modalKey={modalKey} setModalKey={setModalKey}/>
           
            <Slider/>

            <LiveChannels/>

            <Footer/>
        </div>
    )
}