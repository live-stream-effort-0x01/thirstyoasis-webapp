import useFixStylesheetOrder from "../../hooks/useFixStylesheetOrder"
import Header from "../../features/Header/Header";
import Slider from "../../features/Slider/Slider";
import AgreementOverlay from "../../features/Overlay/AgreementOverlay";
import LiveChannels from "../../features/LiveChannels/LiveChannels";
import Footer from "../../features/Footer/Footer";

export default function LandingPage ({isAuth, credits}:SessionProps) {

    document.title = (isAuth)? "ThirstyOasis":"Welcome"

    useFixStylesheetOrder();


    return (
        <div className="container">

            <AgreementOverlay />

            <Header isAuth={isAuth} credits={credits}/>
           
            <Slider/>

            <LiveChannels/>

            <Footer/>
        </div>
    )
}