

export default function StreamChat({credits}:CreditProps){
    return (
        <aside className="sidebar-chat">

            <div className="chat-header">
                <h3> STREAM CHAT</h3>
            </div>
            
            <div className="chat-messages">
                {/* <!-- Chat messages will go here --> */}
            </div>
            
            <div className="chat-input">
                
                <input type="text" placeholder="Type a message..."/>
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
    )
}