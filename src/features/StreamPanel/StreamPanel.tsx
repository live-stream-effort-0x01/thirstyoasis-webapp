export default function StreamPanel (){
    return (
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
    )
}