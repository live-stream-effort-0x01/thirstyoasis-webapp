import { MODALS } from "../config/modalsConfig";
import closeModal from "../utils/closeModal";

export default function Signup(){

    return (
        <div id={MODALS.SIGNUP.id} className="overlay">
            <div className="modal-content-auth">
                <span className="close" onClick={()=>closeModal(MODALS.SIGNUP.id)}>&times;</span>
                <h3>Join ThirstyOasis</h3>
                <form>
                    <label htmlFor="signup-username">Username</label>
                    <input type="email" id="signup-email" name="signup-email" required />

                    <label htmlFor="signup-password">Password</label>
                    <input type="password" id="signup-password" name="signup-password" required/>
                    
                    <label htmlFor="signup-birthday">Date of Birth</label>
                    <div className="dob">
                        <input type="text" id="signup-code" name="signup-code" required placeholder="Month"/>
                        <input type="number" id="signup-number" name="signup-number" required placeholder="Day"/>
                        <input type="number" id="signup-number" name="signup-number" required placeholder="Year"/>
                    </div>

                    <label htmlFor="signup-number">Phone Number</label>
                    <input type="tel" id="signup-number" name="signup-number" required placeholder="Number"/>

                    <div className="role-options">
                        <button type="button" className="role-btn role-btn-selected">I am a Streamer</button>
                        <button type="button" className="role-btn">I am here to have Fun</button>
                    </div>

                    <div className="info">
                        <p className="signup-info">ThirstyOasis may use your phone number to call or send text messages with information regarding your account.</p>
                        <p className="signup-terms">By clicking Sign Up, you are agreeing to ThirstyOasis’s <a href="#" className="signup-infos">Terms of Service</a> and are acknowledging our <a href="#" className="signup-infos">Privacy Notice</a> applies.</p>
                    </div>
                    <button type="submit" className="signup-btn">Sign Up</button>
                </form>

            </div>
        </div>
    )
}