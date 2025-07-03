

interface StreamChatProps {
    credits: number | undefined;
    serverUrl: string | undefined;
    token: string | undefined;
}

export default function StreamChat({ credits, serverUrl, token }: StreamChatProps) {
    // LiveKit chat integration would go here.
    // You might use LiveKit's useChat hook or similar components.
    // For example:
    // const { send, messages } = useChat();

    return (
        <aside className="sidebar-chat">
            <div className="chat-header">
                <i className="fa-solid fa-arrow-right"></i>
                <h3>STREAM CHAT</h3>
                <i className="fa-solid fa-comment-dots"></i>
            </div>

            <div className="chat-messages">
                {/* <!-- Chat messages will go here --> */}
                {/* Render LiveKit chat messages here */}
                {/* {messages.map((msg, idx) => (
                    <div key={idx}>
                        <strong>{msg.from?.identity}:</strong> {msg.message}
                    </div>
                ))} */}
                <div className="chat-message">
                    <span className="username dj-sunroof">djsunroof:</span> <span className="message-text">i dont mind</span>
                </div>
                <div className="chat-message">
                    <span className="username chaostrojan">chaostrojan:</span> <span className="message-text">psssst morning everyone...can someone tell me how Pestily got his hair growing back so quick? I could do with some magic...to get my hair back</span>
                </div>
                {!token && <p>Waiting for LiveKit token to connect to chat...</p>}
            </div>

            <div className="chat-input-container">
                <input type="text" placeholder="Send a message" className="chat-input-field" />
                <div className="chat-input-icons">
                    <i className="fa-solid fa-face-smile"></i>
                    <i className="fa-solid fa-paperclip"></i>
                </div>
            </div>

            <div className="chat-footer">
                <button className="send-tip-btn">Send Tip</button>
                <span className="credits-display">{credits} Credits</span>
                <i className="fa-solid fa-gear settings-icon"></i>
                <button className="send-message-btn">Send</button>
            </div>
        </aside>
    );
}
