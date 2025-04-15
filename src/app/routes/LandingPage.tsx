import useFixStylesheetOrder from "../../hooks/useFixStylesheetOrder"
import Header from "../../features/Header/Header";
import Slider from "../../features/Slider/Slider";
import AgreementOverlay from "../../features/Overlay/AgreementOverlay";
import LiveChannels from "../../features/LiveChannels/LiveChannels";
import Footer from "../../features/Footer/Footer";
import Modal from "../../features/Modal/Modal";
import useScrollToTop from "../../hooks/useScrollToTop";
import useCloseModalOnPageLoad from "../../features/Modal/hooks/useCloseModalOnPageLoad";
import { useState } from "react";
import useFillRoomsTEST from "../../hooks/useFillRoomsTEST";
import PurchaseRoomModal from "../../features/LiveChannels/PurchaseRoomModal/PurchaseRoomModal";


export default function LandingPage (
    {isAuth, credits, modalKey, setModalKey}:SessionProps & ReadModalProps & SetModalProps
) {

    document.title = (isAuth)? "ThirstyOasis":"Welcome"

    const {roomsArray, setRoomsArray} = useFillRoomsTEST();
    const [clickedRoom, setClickedRoom] = useState<RoomData>();//used to trigger PurchaseRoom modal

    useFixStylesheetOrder();
    useScrollToTop();
    useCloseModalOnPageLoad(setModalKey);

    return (
        <div className="container">

            <AgreementOverlay />

            <Modal modalKey={modalKey} setModalKey={setModalKey} />

            <Header isAuth={isAuth} credits={credits} modalKey={modalKey} setModalKey={setModalKey}/>
           
            <Slider/>

            <LiveChannels roomsArray={roomsArray} setClickedRoom={setClickedRoom}/>
            
            <PurchaseRoomModal 
                thumbnailUrl={clickedRoom?.thumbnailUrl} 
                thumbnailAlt={clickedRoom?.thumbnailAlt} 
                title={clickedRoom?.title} />

            <Footer/>
        </div>
    )
}