import { useEffect, useState } from "react";
import styles from "../../styles/HomeCSS/ActivityType.module.css"
import { API_URL, BUNNY_URL } from "@function/wsCode";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";


SwiperCore.use([Pagination]);

function Content(menuSlug) {

    const [listActivityType, setListActivityType] = useState([]);
    const [listThumbnail, setListThumbnail] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        const getData = async () => {
            const listActivityType = await axios.get(`${API_URL}/api/post/getByMenuSlug/${menuSlug.menuSlug}`);
            if (listActivityType && listActivityType.data) {
                setListActivityType(listActivityType.data?.data);
                setTitle(listActivityType.data?.data[0]?.menu?.menuName)
            }
        }

        const getDataThumbnail = async () => {
            const listThumbnail = await axios.get(`${API_URL}/api/thumbnail/getByMenuSlug/${menuSlug.menuSlug}`);
            if (listThumbnail && listThumbnail.data) {
                setListThumbnail(listThumbnail.data?.data);
            }
        }

        getDataThumbnail();
        getData();
    }, [menuSlug]);


    return (
        <section className={styles['content']}>
            <div className={styles['content-main']}>
                <h1 className={styles['content-title']}>{title}</h1>
                <span className={styles['intro-line']}></span>

                <div className={styles['content-main-info']}>
                    <div className={styles['main-info']}>
                        <h3 className={styles['main-info-title']}>{listThumbnail[0]?.title}</h3>
                        <div className={styles['main-info-text']}>{listThumbnail[0]?.content}</div>
                    </div>
                    <div className="main-info-image">
                        <img src={BUNNY_URL + "/" + listThumbnail[0]?.image[0]} alt={listThumbnail[0]?.image[0]} />
                        <div className={styles['main-info-image-sub']}>
                            <img src={BUNNY_URL + "/" + listThumbnail[0]?.image[1]} alt={listThumbnail[0]?.image[1]} />
                            <img src={BUNNY_URL + "/" + listThumbnail[0]?.image[2]} alt={listThumbnail[0]?.image[2]} />
                        </div>
                    </div>
                </div>

                <div className="swiper-intro-active">
                    <div className={styles['intro-content']}>
                        <Swiper
                            slidesPerView={1}
                            centeredSlides={false}
                            slidesPerGroupSkip={1}
                            spaceBetween={10}
                            grabCursor={true}
                            loop={true}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                el: '.swiper-intro-active .swiper-pagination-container',
                                clickable: true
                            }}
                            className="intro-slider-about"

                        >
                            {listActivityType?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className={styles["active-container-item-slider"]}>
                                        <div className={styles["active-container-item-slider-img"]}>
                                            <img className={styles["active-item-img"]} src={BUNNY_URL + "/" + item?.thumb} alt={item?.thumb} />
                                        </div>

                                        <div className={styles["active-container-item-slider-content"]}>
                                            <div className={styles["active-container-item-slider-title"]}
                                                dangerouslySetInnerHTML={{
                                                    __html: title,
                                                }}></div>
                                            <div className={styles["active-container-item-slider-text"]}
                                                dangerouslySetInnerHTML={{
                                                    __html: item?.content,
                                                }}></div>

                                        </div>
                                        <a href="/donate" className={styles['btn-donate']}>CHUNG TAY ĐÓNG GÓP</a>
                                    </div>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                        <div className="swiper-pagination-container"></div>
                    </div>
                </div>
            </div >
            <div className={styles['content-sub']}>
                <img src="/anh-tre-em.webp" alt="anh-tre-em" />
                <img src="/net-hon-nhien.webp" alt="anh-tre-em" />
                <div className={styles['content-sub-text']}>
                    <h2>ALBUM ẢNH</h2>
                    <h2>VIDEO</h2>
                </div>
            </div>
        </section >
    );
}

export default Content;