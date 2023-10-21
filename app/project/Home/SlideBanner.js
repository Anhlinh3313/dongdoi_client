import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { BUNNY_URL } from "../../@function/wsCode";
import "swiper/css";
import "swiper/css/navigation";



SwiperCore.use([Navigation, Pagination]);

function SwiperComponent({ listBannerSlider }) {

    return (
        <div className="swiper-banner-about">
            <Swiper
                slidesPerView={1}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                spaceBetween={10}
                grabCursor={true}
                navigation={{ nextEl: '.swiper-banner-about .swiper-button-next', prevEl: '.swiper-banner-about .swiper-button-prev' }}
                pagination={{
                    el: '.swiper-banner-about .swiper-pagination-container',
                    clickable: true
                }}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                className="banner-slider-about"

            >
                {listBannerSlider?.map((value, index) => (
                    <SwiperSlide key={index}><img className="swiper-banner-image" src={BUNNY_URL + "/" + value?.link} alt={value?.link} /></SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-pagination-container"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    );
}

export default SwiperComponent;
