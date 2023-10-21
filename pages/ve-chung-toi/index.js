import { useEffect, useState } from "react";
import styles from "../../styles/HomeCSS/AboutUS.module.css"
import { API_URL, BUNNY_URL } from "@function/wsCode";
import axios from "axios";
import SlideBanner from "../../app/project/Home/SlideBanner"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";


SwiperCore.use([Pagination]);

function Home() {
    const [listActiveType, setListActiveType] = useState([]);
    const [listAboutUS, setListAboutUS] = useState([]);
    const [listBannerSlider, setListBannerSlider] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const listAboutUs = await axios.get(
                    `${API_URL}/api/post/getByMenuSlug/cac-linh-vuc-hoat-dong`
                );
                if (listAboutUs && listAboutUs.data) {
                    setListActiveType(listAboutUs.data?.data);
                }
            } catch (error) {
                console.error('Lỗi khi lấy danh sách các loại hoạt động:', error);
            }
        };

        const getDataAbout = async () => {
            try {
                const listAboutUs = await axios.get(
                    `${API_URL}/api/post/getByMenuSlug/ve-chung-toi`
                );
                if (listAboutUs && listAboutUs.data) {
                    setListAboutUS(listAboutUs.data?.data);
                }
            } catch (error) {
                console.error('Lỗi khi lấy danh sách về chúng tôi:', error);
            }
        };

        const getDataBannerSlider = async () => {
            const dataBannerSlider = await axios.get(`${API_URL}/api/bannerSildes/getByMenuSlug/ve-chung-toi`);
            if (dataBannerSlider && dataBannerSlider.data) {
                setListBannerSlider(dataBannerSlider.data);
            }
        }

        getData();
        getDataAbout();
        getDataBannerSlider();
    }, []);


    return (
        <>
            <div className={styles["banner"]}>
                <SlideBanner listBannerSlider={listBannerSlider.data} />
            </div>

            <section className={styles['intro']}>
                <h1 className={styles['intro-title']}>GIỚI THIỆU VỀ CHÚNG TÔI </h1>
                <span className={styles['intro-line']}></span>
                <img className={styles['about-message']} src="/about-message.png" alt="about-message" />
                <div className="swiper-intro-about">
                    <div className={styles['intro-content']}>
                        <Swiper
                            slidesPerView={1}
                            centeredSlides={false}
                            slidesPerGroupSkip={1}
                            spaceBetween={10}
                            grabCursor={true}
                            pagination={{
                                el: '.swiper-intro-about .swiper-pagination-container',
                                clickable: true
                            }}
                            className="intro-slider-about"

                        >
                            {listActiveType?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className={styles["aboutUS-container-item-slider"]}>
                                        <div className={styles["aboutUS-container-item-slider-text"]} dangerouslySetInnerHTML={{
                                            __html: item?.content,
                                        }}>
                                        </div>
                                        <div className={styles["aboutUS-container-item-slider-img"]}>
                                            <img className={styles["aboutUS-item-img"]} src={BUNNY_URL + "/" + item?.thumb} alt={item.thumb} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                        <div className="swiper-pagination-container"></div>
                    </div>
                </div>
            </section>

            <section className={styles['grate']}>
                <h1 className={styles['grate-title']}>DONGDOI.COM XIN CẢM ƠN NHỮNG TẤM LÒNG CÙNG ĐỒNG HÀNH CÙNG CHÚNG TÔI TRÊN CON ĐƯỜNG ƯỚC MƠ, HÀNH ĐỘNG VÀ KIẾN TẠO SỰ THAY ĐỔI!</h1>
                <div className={styles['grate-list']}>
                    {
                        listAboutUS?.map((item, index) => (
                            index < 3 &&
                            <div className={styles["grate-list-content"]} key={index}>
                                <img className={styles["aboutUS-grate-img"]} src={BUNNY_URL + "/" + item?.thumb} alt={item.thumb} />
                                <h2 className={styles['aboutUS-container-grate-button']}>QUỸ TÀI TRỢ</h2>
                                <div className={styles["aboutUS-container-grate-text"]} dangerouslySetInnerHTML={{
                                    __html: item?.description,
                                }}>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    );
}

export default Home;