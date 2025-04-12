import { MODALS } from "../config/modalsConfig";
import closeModal from "../utils/closeModal";
import openModal from "../utils/openModal";

export default function BuyTokens(){

    return (
        <div id="buy-tokens-modal" className="overlay">
            <div className="buy-tokens-modal-content">
                <div className="buy-tokens-modal-close-container"><span className="buy-tokens-close"
                        onClick={()=>closeModal(MODALS.BUY_TOKENS.id)}>&times;</span>
                </div>


                <div className="buy-tokens-modal-header">
                    <h1>Choose Subscription</h1>
                    <p>Unlock premium features and enjoy exclusive content with tokens</p>
                </div>

                <div className="buy-tokens-modal-body">
                    <div className="pricing-card pricing-card--standard">
                        <h3 className="standard-header">3 Months</h3>
                        <div className="price-standard">699 <small>TOKENS FOR</small> <strong>$499.99</strong></div>
                        <button className="standard-buy-button" onClick={()=>openModal(MODALS.BUY_NOW)}>Buy Now</button>
                        <div className="features-standard">
                            <h3>Features/Benefits</h3>
                            <ul>
                                <li><i className="fa fa-check"></i> Lorem ipsum dolor sit</li>
                                <li><i className="fa fa-check"></i> Lorem ipsum dolor sit</li>
                                <li><i className="fa fa-check"></i> Lorem ipsum dolor sit</li>
                                <li><i className="fa fa-check"></i> Lorem ipsum dolor sit</li>
                            </ul>
                        </div>
                        <div className="bottom-icon">
                            <i className="fa fa-diamond"></i>
                        </div>
                    </div>

                    <div className="pricing-card pricing-card--standard">
                        <h3 className="standard-header">6 Month</h3>
                        <div className="price-standard">999 <small>TOKENS FOR</small> <strong>$99.99</strong></div>
                        <button className="standard-buy-button" onClick={()=>openModal(MODALS.BUY_NOW)}>Buy Now</button>
                        <div className="features-standard">
                            <h3>Features/Benefits</h3>
                            <ul>
                                <li><i className="fa fa-check"></i> Lorem ipsum dolor sit</li>
                                <li><i className="fa fa-check"></i> Lorem ipsum dolor sit</li>
                                <li><i className="fa fa-check"></i> Lorem ipsum dolor sit</li>
                                <li><i className="fa fa-check"></i> Lorem ipsum dolor sit</li>
                            </ul>
                        </div>
                        <div className="bottom-icon">
                            <i className="fa fa-diamond"></i>
                        </div>
                    </div>

                    <div className="pricing-card pricing-card--popular">
                        <div className="badge">Most Popular</div>
                        <h3 className="popular-header">12 Months</h3>
                        <div className="price">1499 <small>TOKENS FOR</small> <strong>$899.99</strong></div>
                        <button className="popular-buy-button" onClick={()=>openModal(MODALS.BUY_NOW)}>Buy Now</button>
                        <div className="features">
                            <h3>Features/Benefits</h3>
                            <ul>
                                <li><i className="fa fa-check"></i> Lorem ipsum dolor sit</li>
                                <li><i className="fa fa-check"></i> Lorem ipsum dolor sit</li>
                                <li><i className="fa fa-check"></i> Lorem ipsum dolor sit</li>
                                <li><i className="fa fa-check"></i> Lorem ipsum dolor sit</li>
                            </ul>
                        </div>
                        <div className="bottom-icon">
                            <i className="fa fa-diamond"></i>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}