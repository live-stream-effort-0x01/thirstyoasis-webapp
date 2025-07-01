

interface StreamChatProps extends CreditProps {
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
                <h3> STREAM CHAT</h3>
            </div>

            <div className="chat-messages">
                {/* <!-- Chat messages will go here --> */}
                {/* Render LiveKit chat messages here */}
                {/* {messages.map((msg, idx) => (
                    <div key={idx}>
                        <strong>{msg.from?.identity}:</strong> {msg.message}
                    </div>
                ))} */}
                {!token && <p>Waiting for LiveKit token to connect to chat...</p>}
            </div>

            <div className="chat-input">
                <input type="text" placeholder="Type a message..." />
            </div>
            <div className="chat-container">
                <div className="chat-credits"> <button className="tip-btn">Send Tip</button>
                    <p>{credits} Credits</p>
                </div>
                <div className="chat-settings">
                    <i className="fas fa-cog"> </i>
                    {/* <!-- Settings icon --> */}
                    <button className="send-btn"> Send</button>
                </div>
            </div>
        </aside>
    );
}
