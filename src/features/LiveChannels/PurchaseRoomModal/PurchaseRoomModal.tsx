import { Link } from "react-router";
import { MODALS } from "../../Modal/config/modalsConfig";
import closeModal from "../../Modal/utils/closeModal";

type PurchaseRoomProps = {
    thumbnailUrl: string|undefined;
    thumbnailAlt: string|undefined;
    title: string|undefined;
};


//user clicks room -> setClickedRoom() -> re-render PurchaseRoom with clickedRoom state data
export default function PurchaseRoomModal({ thumbnailUrl, thumbnailAlt, title }: PurchaseRoomProps) {
    return (
        <div id={MODALS.PURCHASE_ROOM.id} className="overlay">
            <div className="purchase-now-modal-content">
                <div className="modal-header">
                    <h3>{title}</h3>
                    <span className="close" onClick={() => closeModal(MODALS.PURCHASE_ROOM.id)}>
                        &times;
                    </span>
                </div>
                <div className="modal-body">
                    <img alt={thumbnailAlt} src={thumbnailUrl}  className="modal-image" />
                    <p>Purchase access to this room for exclusive content!</p>
                    <Link to="/stream">
                        <button className="header__nav-item--primary">Purchase</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}