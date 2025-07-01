import { useState } from 'react';
import { MODALS } from "../config/modalsConfig";
import closeModal from "../utils/closeModal";
import { useAuth } from '../../../hooks/useAuth';

export default function StreamNow(){
    const [streamTitle, setStreamTitle] = useState('');
    const [streamDescription, setStreamDescription] = useState('');
    const [allowChat, setAllowChat] = useState(true); // Default checked

    const maxParticipants = 2; // Hardcoded as per curl request
    const tags = 'love'; // Hardcoded as per curl request

    const { user, token } = useAuth();

    const handleStartStream = async () => {
        if (!user || !user.email || !token) {
            console.error("User not authenticated, email not available, or token not available.");
            // Optionally, display a user-friendly error message
            return;
        }

        const ownerId = user.email;

        const formData = new URLSearchParams();
        formData.append('name', streamTitle);
        formData.append('owner_id', ownerId || ''); // Ensure ownerId is not undefined
        formData.append('max_participants', maxParticipants.toString());
        formData.append('description', streamDescription);
        formData.append('tags', tags);

        try {
            const response = await fetch('https://dev-room-manager.demothesoftwarepls.site/api/v1/room/public/create', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Bearer ${token}`,
                },
                body: formData.toString(),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message || response.statusText}`);
            }

            const data = await response.json();
            console.log('Room created successfully:', data);
            closeModal(MODALS.STREAM_NOW.id);
            // Further actions like redirecting to the new room can be added here
        } catch (error) {
            console.error('Error creating room:', error);
            // Optionally, display a user-friendly error message
        }
    };

    return (
        <div id={MODALS.STREAM_NOW.id} className="overlay">
            <div className="stream-now-modal-content">
                <div className="modal-header">
                    <h2>Start Your Stream</h2>
                    <span className="close-button" onClick={()=>closeModal(MODALS.STREAM_NOW.id)}>&#x2715;</span>
                </div>

                <div className="modal-columns">
                    <div className="modal-column left-column">

                        <div className="cam-preview-box">
                            <video id="webcam" autoPlay></video>
                            <p className="cam-preview-text">Cam Preview</p>
                        </div>

                        <label htmlFor="webcam-select" className="input-label">Webcam</label>
                        <select id="webcam-select" className="stream-select">
                            <option>Default</option>
                        </select>

                        <label htmlFor="microphone-select" className="input-label">Microphone</label>
                        <select id="microphone-select" className="stream-select">
                            <option>Default</option>
                        </select>

                    </div>


                    <div className="modal-column right-column">

                        <label htmlFor="stream-title" className="input-label">Title</label>
                        <input type="text" id="stream-title" name="stream-title" className="stream-input"
                            placeholder="Lorem Ipsum" value={streamTitle} onChange={(e) => setStreamTitle(e.target.value)}/>

                        <label htmlFor="stream-description" className="input-label">Description</label>
                        <textarea id="stream-description" name="stream-description" className="stream-textarea"
                            placeholder="Lorem Ipsum" value={streamDescription} onChange={(e) => setStreamDescription(e.target.value)}></textarea>
                        
                        <label htmlFor="stream-price" className="input-label price-label">Price</label>
                        <div className="price-section">
                            <div className="novice-tag">
                                <span className="star-icon">&#9733;</span> Novice
                            </div>
                            <div className="price-input-container">
                                <span className="currency-symbol">$</span>
                                <input type="text" id="stream-price" name="stream-price" className="price-input" value="5.99" readOnly/>
                            </div>
                        </div>
                        <p className="price-info">Prices varies depends (<span className="beginner">Beginner</span>, <span className="novice">Novice</span>, and <span className="pro">Pro</span>)</p>

                        <div className="allow-chat-checkbox">
                            <input type="checkbox" id="allow-chat" name="allow-chat" checked={allowChat} onChange={(e) => setAllowChat(e.target.checked)}/>
                            <label htmlFor="allow-chat">Allow Chat</label>
                        </div>

                        <button className="start-stream-button" onClick={handleStartStream}>Start Stream</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
