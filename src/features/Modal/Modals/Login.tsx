import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

// Import MODALS and ModalKey from the updated config
import { MODALS, ModalKey } from '../config/modalsConfig';
import { closeModal, handleModalClick } from '../utils/modalUtils'; // Import both from modalUtils

// Define the props this component expects for modal management
interface LoginModalProps {
    modalKey: ModalKey; // The current active modal key (e.g., 'LOGIN' or null)
    setModalKey: React.Dispatch<React.SetStateAction<ModalKey>>; // Setter for the modal key
}

export default function Login({ modalKey, setModalKey }: LoginModalProps) {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const { login } = useAuth();
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        if (!email || !password) {
            return setError('Please enter both email and password.');
        }

        setError('');
        setLoading(true);

        try {
            await login(email, password);
            // closeModal expects the actual DOM ID string: MODALS.LOGIN.id
            closeModal(MODALS.LOGIN.id, { currentModalKey: modalKey, setModalKey });
            navigate('/dashboard');
        } catch (err: any) {
            setError('Failed to log in: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id={MODALS.LOGIN.id} className="modal-content-auth-login">
            <span className="close" onClick={() => closeModal(MODALS.LOGIN.id, { currentModalKey: modalKey, setModalKey })}>&times;</span>
            <h3>Log in to ThirstyOasis</h3>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="login-email">Email</label>
                    <input type="email" id="login-email" ref={emailRef} required />
                </div>

                <div>
                    <label htmlFor="login-password">Password</label>
                    <input type="password" id="login-password" ref={passwordRef} required />
                </div>

                <a className="login-trouble">Having trouble logging in?</a>
                <button type="submit" className="login-btn" disabled={loading}>
                    {loading ? 'Logging In...' : 'Login'}
                </button>

                <p className="login-link">
                    Don't have account?
                    <a href="#" onClick={(e) => {
                        e.preventDefault();
                        // handleModalClick expects the ModalKey (e.g., 'SIGNUP')
                        handleModalClick('SIGNUP', { currentModalKey: modalKey, setModalKey });
                    }}> Sign Up</a>
                </p>
            </form>
        </div>
    );
}