import { MODALS } from "../config/modalsConfig";
import closeModal from "../utils/closeModal";
import selectPriceOption from "../utils/selectPriceOption";

export default function StreamNow(){

    return (
        <div id={MODALS.STREAM_NOW.id} className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Start Your Stream</h2>
                    <span className="close" onClick={()=>closeModal(MODALS.STREAM_NOW.id)}>&times;</span>
                </div>

                <div className="modal-columns">
                    <div className="modal-column">

                        <div className="webcam-preview">
                            <video id="webcam" autoPlay></video>
                        </div>

                        <label htmlFor="webcam-select">Webcam:</label>
                        <select id="webcam-select"></select>

                        <label htmlFor="microphone-select">Microphone:</label>
                        <select id="microphone-select"></select>

                    </div>


                    <div className="modal-column">

                        <label htmlFor="stream-title">Title:</label>
                        <input type="text" id="stream-title" name="stream-title" className="stream-title-input"
                            placeholder="Enter stream title"/>

                        <label htmlFor="stream-description">Description:</label>
                        <textarea id="stream-description" name="stream-description" className="stream-textarea"
                            placeholder="Enter stream description"></textarea>
                        
                        <div className="steam-price-selection">
                            <label htmlFor="price-options">Room Price:</label>
                            <div className="price-options" id="price-options">
                                <div className="price-option" onClick={(e)=>selectPriceOption(e.currentTarget)}>$24.99</div>
                                <div className="price-option" onClick={(e)=>selectPriceOption(e.currentTarget)}>$49.99</div>
                                <div className="price-option" onClick={(e)=>selectPriceOption(e.currentTarget)}>$99.99</div>
                            </div>
                        </div>

                        <button className="start-stream-button">Start Stream</button>
                    </div>
                </div>
            </div>
        </div>
    )
}