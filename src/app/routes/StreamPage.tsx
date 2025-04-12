import Header from "../../features/Header/Header"


export default function StreamPage ({isAuth, credits, modalKey, setModalKey}:SessionProps & ModalProps) {

    document.title = "ThirstyOasis - Stream"

    return (
        <div className="container">
            <Header isAuth={isAuth} credits={credits} modalKey={modalKey} setModalKey={setModalKey}/>

            <main className="stream-main">

                <div className="content-container">
                    <div className="main-content">
                        <section className="video-player">
                            <video controls>
                                <source src="path/to/your/video.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </section>

                        {/* <!-- Profile and Buttons Section --> */}
                        <section className="profile-buttons">
                            <div className="profile">
                                <img src="https://th.bing.com/th/id/OIP.c2-_4t1v3AnqKvnZwRox8QHaHa?rs=1&pid=ImgDetMain" alt="Profile Icon" className="profile-icon"/>
                                <div className="profile-info">
                                    <h2 className="profile-name">Elisexy</h2>
                                    <p className="profile-bio">Lorem ipsum dolor sit amet consectetur</p>
                                    <div className="profile-tags">
                                        <span className="tag">NSFW</span>
                                        <span className="tag">Live</span>
                                        <span className="tag">Petite</span>
                                    </div>
                                </div>
                            </div>
                            <div className="buttons">
                                <button className="btn follow-btn">
                                    <i className="fa-solid fa-camera-retro"></i>Private Call
                                </button>
                                
                                <button className="btn subscribe-btn">
                                    <i className="fa-solid fa-heart"></i> Follow
                                </button>
                                
                                <button className="btn donate-btn">
                                    <i className="fa-solid fa-star"></i> Subscribe
                                </button>

                            </div>
                        </section>

                        <div className="streamer-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo assumenda fugit deserunt voluptatum est cumque corrupti sit praesentium exercitationem nam tempore laboriosam atque soluta porro fuga ratione, consectetur dolores dolorum?</p>
                        </div>

                    </div>
                    
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
                </div>

            </main>
        </div>
    )
}