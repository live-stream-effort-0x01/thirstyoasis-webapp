import useSetupSwiper from "./hooks/useSetupSwiper"

export default function Slider() {

    useSetupSwiper()

    return(
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
    )
}