import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import { BUNNY_URL } from "../../app/@function/wsCode";

SwiperCore.use([Navigation]);

function SwiperComponent({ listBannerSlider }) {
    return (
        <div className="swiper-banner">
            <Swiper
                slidesPerView={1}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                spaceBetween={10}
                grabCursor={true}
                loop={true}
                breakpoints={{
                    768: {
                        slidesPerView: 4,
                        slidesPerGroupSkip: 4,
                        spaceBetween: 30
                    },
                    480: {
                        slidesPerView: 2,
                        slidesPerGroupSkip: 2,
                        spaceBetween: 20
                    }

                }}
                navigation={{ nextEl: '.swiper-banner .swiper-button-next', prevEl: '.swiper-banner .swiper-button-prev' }}
                className="mySwiper"

            >
                {listBannerSlider?.map((value, index) => (
                    <SwiperSlide key={index}><img className="swiper-banner-image" src={BUNNY_URL + "/" + value?.link} width="250" height="150" alt={value?.link} /></SwiperSlide>
                ))}

            </Swiper>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    );
}

export default SwiperComponent;
