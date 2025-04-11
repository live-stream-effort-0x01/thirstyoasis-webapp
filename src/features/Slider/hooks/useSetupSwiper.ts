import { useEffect } from "react";

export default function useSetupSwiper() {

    useEffect(()=>{
        // get swiper via unpkg.com
        const swiperScript = document.createElement("script");
        swiperScript.src = "https://unpkg.com/swiper@11.2.6/swiper-bundle.min.js";
        swiperScript.async = true;
    
        //setup swiper
        swiperScript.onload = () => {
            if (import.meta.env.DEV) console.log("Swiper script loaded:", window.Swiper);
            new Swiper('.swiper-container', {
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
        };
    
        document.body.appendChild(swiperScript);
    }, [])
}