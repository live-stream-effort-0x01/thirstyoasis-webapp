import { MODALS } from "../config/modalsConfig";
import closeModal from "../utils/closeModal";
import handleModalClick from "../utils/handleModalClick";
import { useAuth } from "../../../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login({modalKey, setModalKey}:ReadModalProps & SetModalProps){
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await login(email, password);
            closeModal(MODALS.LOGIN.id);
            navigate('/');
        } catch (error: any) {
            // Handle login error
            console.error(error);
            alert(error.message);
        }
    };
    
    return (
        <div id={MODALS.LOGIN.id} className="overlay">
        <div className="modal-content-auth-login">
            <span className="close" onClick={()=>closeModal(MODALS.LOGIN.id)}>&times;</span>
            <h3>Log in to ThirstyOasis</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="login-email">Email</label>
                <input type="email" id="login-email" name="login-email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                
                <label htmlFor="login-password">Password</label>
                <input type="password" id="login-password" name="login-password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                
                <a className="login-trouble">Having trouble logging in?</a>
                <button type="submit" className="login-btn">Login</button>
                
                <p className="login-link">
                    Dont'have account? 
                    <a href="#" onClick={()=>handleModalClick("SIGNUP", {modalKey, setModalKey})}> Sign Up</a>
                </p>
            </form>
        </div>
    </div>  
    )
}
