import { MODALS } from "../config/modalsConfig";
import closeModal from "../utils/closeModal";

export default function Login(){
    
    return (
        <div id={MODALS.LOGIN.id} className="overlay">
        <div className="modal-content-auth">
            <span className="close" onClick={()=>closeModal(MODALS.LOGIN.id)}>&times;</span>
            <h3>Log in to ThirstyOasis</h3>
            <form>
                <label htmlFor="login-username">Username</label>
                <input type="name" id="login-username" name="login-username"/>
                
                <label htmlFor="login-password">Password</label>
                <input type="password" id="login-password" name="login-password"/>
                
                <a className="login-trouble">Having trouble logging in?</a>
                <button type="submit" className="login-btn">Login</button>
                
                <p className="login-link">Dont'have account? <a href="#">Sign Up</a></p>
            </form>
        </div>
    </div>  
    )
}