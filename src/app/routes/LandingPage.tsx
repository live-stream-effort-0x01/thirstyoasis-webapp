import useFixStylesheetOrder from "../../hooks/useFixStylesheetOrder";
import Header from "../../features/Header/Header";
import Slider from "../../features/Slider/Slider";
import AgreementOverlay from "../../features/Overlay/AgreementOverlay";
import LiveChannels from "../../features/LiveChannels/LiveChannels";
import Footer from "../../features/Footer/Footer";
import Modal from "../../features/Modal/Modal";
import useScrollToTop from "../../hooks/useScrollToTop";
import useCloseModalOnPageLoad from "../../features/Modal/hooks/useCloseModalOnPageLoad";
import { useState, useEffect } from "react";
import useFillRoomsTEST from "../../hooks/useFillRoomsTEST";
import PurchaseRoomModal from "../../features/LiveChannels/PurchaseRoomModal/PurchaseRoomModal";
import { useAuth } from "../../hooks/useAuth";

// Keep isAuth and setIsAuth props to minimize other changes
type LandingPageProps = SessionProps & SetAuthProps & ReadModalProps & SetModalProps & CreditProps;

export default function LandingPage({ isAuth, setIsAuth, credits, modalKey, setModalKey }: LandingPageProps) {
  // Sync auth context with parent state
  const { user } = useAuth();
  useEffect(() => {
    setIsAuth(!!user);
  }, [user, setIsAuth]);

  // Update document title
  document.title = isAuth ? "ThirstyOasis" : "Welcome";

  const { roomsArray } = useFillRoomsTEST();
  const [clickedRoom, setClickedRoom] = useState<RoomData | undefined>(undefined);

  useFixStylesheetOrder();
  useScrollToTop();
  useCloseModalOnPageLoad(setModalKey);

  return (
    <div className="container">
      <AgreementOverlay />

      <Modal modalKey={modalKey} setModalKey={setModalKey} />

      <Header isAuth={isAuth} setIsAuth={setIsAuth} credits={credits} modalKey={modalKey} setModalKey={setModalKey} />

      <Slider />

      <LiveChannels roomsArray={roomsArray} setClickedRoom={setClickedRoom} />

      <PurchaseRoomModal
        thumbnailUrl={clickedRoom?.thumbnailUrl}
        thumbnailAlt={clickedRoom?.thumbnailAlt}
        title={clickedRoom?.title}
      />

      <Footer />
    </div>
  );
}
