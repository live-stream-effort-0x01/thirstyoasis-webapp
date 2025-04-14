import { MODALS } from "./config/modalsConfig";
import closeModal from "./utils/closeModal";

type PurchaseRoomProps = {
    thumbnailUrl: string;
    title: string;
};

export default function PurchaseRoom({ thumbnailUrl, title }: PurchaseRoomProps) {
    return (
        <div id={MODALS.PURCHASE_ROOM.id} className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>{title}</h3>
                    <span className="close" onClick={() => closeModal(MODALS.PURCHASE_ROOM.id)}>
                        &times;
                    </span>
                </div>
                <div className="modal-body">
                    <img src={thumbnailUrl} alt={title} className="modal-image" />
                    <p>Purchase access to this room for exclusive content!</p>
                    <button className="purchase-button">Purchase</button>
                </div>
            </div>
        </div>
    );
}