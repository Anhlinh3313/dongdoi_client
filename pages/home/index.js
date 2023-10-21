import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css"
import BannerSlider from "./BannerSlide"
import Slide from "./Slide"
import { API_URL } from "../../app/@function/wsCode"
import axios from "axios";
import ListDonate from "./ListDonate"

function Home() {
    const [listNewEvents, setListNewEvents] = useState([]);
    const [listBannerSlider, setListBannerSlider] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        const getDataSlide = async () => {
            const dataaNewsEvents = await axios.get(`${API_URL}/api/post/getByMenuSlug/tin-tuc-su-kien`);
            if (dataaNewsEvents && dataaNewsEvents.data) {
                setListNewEvents(dataaNewsEvents.data?.data);
                setTitle(dataaNewsEvents.data?.data[0]?.menu?.menuName)
                setDescription(dataaNewsEvents.data?.data[0]?.menu?.description)
            }
        }
        const getDataBannerSlider = async () => {
            const dataBannerSlider = await axios.get(`${API_URL}/api/slide/getAll`);
            if (dataBannerSlider && dataBannerSlider.data) {
                setListBannerSlider(dataBannerSlider.data);
            }
        }
        getDataSlide();
        getDataBannerSlider();
    }, []);

    return (
        <>
            <div className={styles["banner"]}>
                <img src="/banner.webp" alt="Banner" width="100%" height="811" />
            </div>
            <div className={styles["banner_sider"]}>
                <div className={styles["banner_sider_connent"]}>
                    <BannerSlider listBannerSlider={listBannerSlider} />
                </div>
            </div>
            <ListDonate />
            <section className={styles["event"]} id="section-event">
                <div className={styles["event_text"]}>
                    <h1 className={styles["event_text-title"]}>{title}</h1>
                    <div className={styles["event_text-detail"]}>{description}</div>
                    <div className={styles["event_line"]}></div>
                </div>

                <div className={styles["event_slide"]}>
                    <Slide listSlide={listNewEvents} />
                </div>

            </section>
        </>
    );
}

export default Home;