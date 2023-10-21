import { useEffect, useState } from "react";
import styles from "../../styles/HomeCSS/ActivityType.module.css"
import { API_URL, BUNNY_URL } from "@function/wsCode";
import axios from "axios";
import SlideBanner from "../../app/project/Home/SlideBanner"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import Content from "./content";

SwiperCore.use([Pagination]);

function Home() {
    const [listBannerSlider, setListBannerSlider] = useState([]);
    const [listMenu, setListMenu] = useState([]);
    const [menuSlug, setMenuSlug] = useState("van-hoa-giao-duc");



    useEffect(() => {
        const getDataBannerSlider = async () => {
            const dataBannerSlider = await axios.get(`${API_URL}/api/bannerSildes/getByMenuSlug/cac-linh-vuc-hoat-dong`);
            if (dataBannerSlider && dataBannerSlider.data) {
                setListBannerSlider(dataBannerSlider.data);
            }
        }

        const getMenuByMenuSlug = async () => {
            const dataMenu = await axios.get(`${API_URL}/api/menu/getMenuByParent/cac-linh-vuc-hoat-dong`);
            if (dataMenu && dataMenu.data) {
                setListMenu(dataMenu.data);
            }
        }

        getDataBannerSlider();
        getMenuByMenuSlug();
    }, [])

    return (
        <>
            <div className={styles["banner"]}>
                <SlideBanner listBannerSlider={listBannerSlider.data} />
            </div>

            {/* <section className={styles['active-content']}>
                <ul className={styles['menu']}>
                    {listMenu.map((menu) => (
                        <li
                            key={menu._id}
                            className={menu.menuSlug === menuSlug ? styles['menu-list-active'] : styles['menu-list']}
                            onClick={() => setMenuSlug(menu.menuSlug)}
                        >
                            {menu.menuName}
                        </li>
                    ))}
                </ul>
            </section> */}

            <Content menuSlug={menuSlug} />
        </>
    );
}

export default Home;