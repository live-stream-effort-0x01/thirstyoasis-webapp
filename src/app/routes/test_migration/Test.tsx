import "./css/welcome.css"

import logo from "../../../assets/ThirstyOasis.png"
import { useEffect } from "react"

export default function Test(){

    useEffect(()=>{
        document.title = "Welcome"

        // get swiper via unpkg.com
        const swiperScript = document.createElement("script");
        swiperScript.src = "https://unpkg.com/swiper@11.2.6/swiper-bundle.min.js";
        swiperScript.async = true;
    
        swiperScript.onload = () => {
          console.log("Swiper script loaded:", window.Swiper);
          loadSwiper();
        };
    
        document.body.appendChild(swiperScript);
        
        // fix styles order
        document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
            document.head.appendChild(link); // Moves links to the end of <head>
        });
        
       

        return () => {
          document.body.removeChild(swiperScript);
        };
        

    }, [])

    return (
        <div>
            <div className="container">
                {/* Navigation Bar */}
                <header className="header">
                    <div className="header__menu">
                        <img src={logo} alt="logo" className="header__logo" />
                        <div className="hamburger-menu" onClick={()=>toggleMenu()}>
                            <i className="fas fa-bars"></i>
                        </div>
                    </div>
                    <div className="header__nav-container">
                        <ul className="header__nav-list header__nav-list--left">
                            <li className="header__nav-item">Browse</li>
                            <li className="header__nav-item">Following</li>
                            <li className="header__nav-item">Merch</li>
                        </ul>
                        <ul className="header__nav-list header__nav-list--right">
                            <li className="header__nav-item header__nav-item--login" onClick={()=>openModal('login-modal')}>Login</li>
                            <li className="header__nav-item header__nav-item--signup" onClick={()=>openModal('signup-modal')}>Sign Up
                            </li>
                        </ul>
                    </div>
                </header>

                {/* <!--Main Content--> */}
                <main className="main">
                    {/* <!--Slider--> */}
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img
                                    src="https://th.bing.com/th/id/OIP.xG-Kyw5fm98NX5XJk_gzRwHaE7?w=626&h=417&rs=1&pid=ImgDetMain"
                                    alt="Slide 1"/>
                            </div>
                            <div className="swiper-slide">
                                <img
                                    src="https://images.pexels.com/photos/4045548/pexels-photo-4045548.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt="Slide 2"/>
                            </div>
                            <div className="swiper-slide">
                                <img
                                    src="https://images.pexels.com/photos/4155478/pexels-photo-4155478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Slide 3"/>
                            </div>
                            <div className="swiper-slide">
                                <img src="https://images.pexels.com/photos/597200/pexels-photo-597200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Slide 4"/>                        
                            </div>
                            <div className="swiper-slide">
                                <img src="https://images.pexels.com/photos/1615848/pexels-photo-1615848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Slide 5"/>
                            </div>
                            <div className="swiper-slide">
                                <img src="https://images.pexels.com/photos/206527/pexels-photo-206527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Slide 6"/>
                            </div>
                            <div className="swiper-slide">
                                <img src="https://images.pexels.com/photos/5066274/pexels-photo-5066274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Slide 7"/>
                            </div>
                        </div>

                        {/* <!-- Add Navigation --> */}
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>

                    {/* <!--Search Bar--> */}
                    <div className="search-container">
                        <input type="text" className="search-bar" placeholder="What are you looking for?"/>
                        <button className="fas fa-search search-icon"></button>
                    </div>

                    {/* <!--Tags--> */}
                    <div className="tags-container">
                        <button className="tags-prev" onClick={()=>scrollTags(-1)}>&#10094;</button>
                        <div className="tags">
                            <span className="tag">Tag 1</span>
                            <span className="tag">Tag 2</span>
                            <span className="tag">Tag 3</span>
                            <span className="tag">Tag 4</span>
                            <span className="tag">Tag 5</span>
                            <span className="tag">Tag 6</span>
                            <span className="tag">Tag 7</span>
                            <span className="tag">Tag 8</span>
                            <span className="tag">Tag 9</span>
                            <span className="tag">Tag 10</span>
                            <span className="tag">Tag 11</span>
                            <span className="tag">Tag 12</span>
                            <span className="tag">Tag 13</span>
                            <span className="tag">Tag 14</span>
                            <span className="tag">Tag 15</span>
                            <span className="tag">Tag 16</span>
                            <span className="tag">Tag 17</span>
                            <span className="tag">Tag 18</span>
                            <span className="tag">Tag 19</span>
                            <span className="tag">Tag 20</span>
                            <span className="tag">Tag 21</span>
                            <span className="tag">Tag 22</span>
                        </div>
                        <button className="tags-next" onClick={()=>scrollTags(1)}>&#10095;</button>
                    </div>

                    {/* <!--Section Header--> */}
                    <div className="section-header">
                        <span className="section-header__main">Live Channels</span>
                        <span className="section-header__sub">you might be interested in</span>
                    </div>

                    {/* <!--Card Grid--> */}
                    <div className="card-grid">
                        <div className="card">
                            <img src="https://images.pexels.com/photos/1882712/pexels-photo-1882712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Card Image" className="card__image"/>
                            <div className="card__content">
                                <div className="card__header">
                                    <img src="https://th.bing.com/th/id/OIP.PXhyRtw-JCHrwUAWlZnFjwHaHa?w=1920&h=1920&rs=1&pid=ImgDetMain"
                                        alt="Artist" className="card__artist"/>
                                    <div className="card__info">
                                        <h3 className="card__title">Losing my mind</h3>
                                        <p className="card__price">$9.99</p>
                                        <p className="card__artist__name">toohotkendal</p>
                                        <div className="card__tags">
                                            <span className="card__tag">Tag 1</span>
                                            <span className="card__tag">Tag 2</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src="https://images.pexels.com/photos/1882712/pexels-photo-1882712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Card Image" className="card__image"/>
                            <div className="card__content">
                                <div className="card__header">
                                    <img src="https://th.bing.com/th/id/OIP.PXhyRtw-JCHrwUAWlZnFjwHaHa?w=1920&h=1920&rs=1&pid=ImgDetMain"
                                        alt="Artist" className="card__artist"/>
                                    <div className="card__info">
                                        <h3 className="card__title">Losing my mind</h3>
                                        <p className="card__price">$9.99</p>
                                        <p className="card__artist__name">toohotkendal</p>
                                        <div className="card__tags">
                                            <span className="card__tag">Tag 1</span>
                                            <span className="card__tag">Tag 2</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src="https://images.pexels.com/photos/1882712/pexels-photo-1882712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Card Image" className="card__image"/>
                            <div className="card__content">
                                <div className="card__header">
                                    <img src="https://th.bing.com/th/id/OIP.PXhyRtw-JCHrwUAWlZnFjwHaHa?w=1920&h=1920&rs=1&pid=ImgDetMain"
                                        alt="Artist" className="card__artist"/>
                                    <div className="card__info">
                                        <h3 className="card__title">Losing my mind</h3>
                                        <p className="card__price">$9.99</p>
                                        <p className="card__artist__name">toohotkendal</p>
                                        <div className="card__tags">
                                            <span className="card__tag">Tag 1</span>
                                            <span className="card__tag">Tag 2</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src="https://images.pexels.com/photos/1882712/pexels-photo-1882712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Card Image" className="card__image"/>
                            <div className="card__content">
                                <div className="card__header">
                                    <img src="https://th.bing.com/th/id/OIP.PXhyRtw-JCHrwUAWlZnFjwHaHa?w=1920&h=1920&rs=1&pid=ImgDetMain"
                                        alt="Artist" className="card__artist"/>
                                    <div className="card__info">
                                        <h3 className="card__title">Losing my mind</h3>
                                        <p className="card__price">$9.99</p>
                                        <p className="card__artist__name">toohotkendal</p>
                                        <div className="card__tags">
                                            <span className="card__tag">Tag 1</span>
                                            <span className="card__tag">Tag 2</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Repeat card structure for other cards --> */}
                    </div>
                </main>

                {/* <!--Overlay--> */}
                <div id="age-verification-overlay" className="overlay">
                    <div className="overlay-content">
                        <h2>Are you 18+?</h2>
                        <p>You must be 18 years old and agree to our Terms and Conditions before continuing.</p>
                        <button onClick={()=>closeOverlay()} className="button__agree">I agree</button>
                        <button onClick={()=>{window.location.href='https://www.google.com'}} className="button__disagree">I am not over
                            18</button>
                    </div>
                </div>

                {/* <!--Login Modal--> */}
                <div id="login-modal" className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={()=>closeModal('login-modal')}>&times;</span>
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

                {/* <!--Sign Up Modal--> */}
                <div id="signup-modal" className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={()=>closeModal('signup-modal')}>&times;</span>
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
                            <div className="phone">
                                <input type="tel" id="signup-number" name="signup-number" required placeholder="Number"/>
                            </div>

                            <div className="option-buttons">
                                <button className="streamer-btn">I am a Streamer</button>
                                <button className="fun-btn">I am here to have Fun</button>
                            </div>

                            <div className="info">
                                <p className="signup-info">ThirstyOasis may use your phone number to call or send text messages with information regarding your account.</p>
                                <p className="signup-terms">By clicking Sign Up, you are agreeing to ThirstyOasis’s <a href="#" className="signup-infos">Terms of Service</a> and are acknowledging our <a href="#" className="signup-infos">Privacy Notice</a> applies.</p>
                            </div>
                            <button type="submit" className="signup-btn">Sign Up</button>
                        </form>
                    </div>
                </div>

 
            </div>

            <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
            
        </div>
    )
}

// document.addEventListener('DOMContentLoaded', function () {
var swiper: any;
function loadSwiper() {
    swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2000, // Delay between slides in milliseconds (3 seconds)
            disableOnInteraction: false, // Continue autoplay after user interactions
        },
        breakpoints: {
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 3,
                spaceBetween: 10
            }
        },
        
    });
}
// });

function toggleMenu() {
    const navContainer = document.querySelector('.header__nav-container')
    if (navContainer !== null) navContainer.classList.toggle('active');
}

function scrollTags(direction: number) {
    const tagsContainer = document.querySelector('.tags');
    const scrollAmount = 100;
    
    if (tagsContainer !== null) 
        tagsContainer.scrollBy({
            top: 0,
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
        
}

function closeOverlay() {
    let overlay = document.getElementById('age-verification-overlay');
    if (overlay !== null) overlay.style.display = 'none';
}

window.onload = function () {
    let overlay = document.getElementById('age-verification-overlay')
    if (overlay !== null) overlay.style.display = 'flex';
}

function openModal(modalId: string) {
    const modal = document.getElementById(modalId);
    if (modal !== null) modal.style.display = 'flex';
}

function closeModal(modalId: string) {
    const modal = document.getElementById(modalId);
    if (modal !== null) modal.style.display = 'none';
}
