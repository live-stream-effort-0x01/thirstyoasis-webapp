import { MODALS } from "./config/modalsConfig";
import closeModal from "./utils/closeModal";

export default function BuyNow(){

    return (
        <div id="buy-now-modal" className="buy-now-modal">
            <div className="buy-now-modal-content">
                <div className="buy-now-modal-header">
                    <h3>Pay With</h3>
                    <span className="buy-now-close" onClick={()=>closeModal(MODALS.BUY_NOW.id)}>&times;</span>
                </div>
                <div className="payment-options">
                    <div className="option-card">
                        <i className="fa-solid fa-credit-card"></i>
                        <p>Card</p>
                    </div>
                    <div className="option-bitcoin">
                        <i className="fa-brands fa-bitcoin"></i>
                        <p>Crypto</p>
                    </div>
                </div>
            </div>
        </div>
    )
}