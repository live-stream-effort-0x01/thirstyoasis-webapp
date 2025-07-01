import { useEffect } from "react";
import useSetupSwiper from "./hooks/useSetupSwiper";
import { useIndexedDB } from "../../utils/indexedDB";

const SLIDER_IMAGES_KEY = "sliderImages";

const defaultImages = [
    "https://th.bing.com/th/id/OIP.xG-Kyw5fm98NX5XJk_gzRwHaE7?w=626&h=417&rs=1&pid=ImgDetMain",
    "https://images.pexels.com/photos/4045548/pexels-photo-4045548.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4155478/pexels-photo-4155478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/597200/pexels-photo-597200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1615848/pexels-photo-1615848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/206527/pexels-photo-206527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5066274/pexels-photo-5066274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

export default function Slider() {
    const [sliderImages, setSliderImages, isLoading] = useIndexedDB<string[]>(
        SLIDER_IMAGES_KEY,
        []
    );

    useEffect(() => {
        if (!isLoading && sliderImages.length === 0) {
            setSliderImages(defaultImages);
        }
    }, [isLoading, sliderImages, setSliderImages]);

    useSetupSwiper();

    if (isLoading) {
        return <div>Loading slider images...</div>; // Or a loading spinner
    }

    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                {/* empty slider */}
                <div className="swiper-slide"></div>

                {sliderImages.map((src, index) => (
                    <div className="swiper-slide" key={index}>
                        <img src={src} alt={`Slide ${index + 1}`} />
                    </div>
                ))}

                {/* empty slider */}
                <div className="swiper-slide"></div>
            </div>

            {/* <!-- Add Navigation --> */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    );
}
