import axios from "axios";
import styles from "../../../styles/HomeCSS/AboutUS.module.css";
import { useEffect, useState } from "react";
import { API_URL, BUNNY_URL } from "@function/wsCode";

function AboutUS() {
    const [listAboutUS, setListAboutUS] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        const getData = async () => {
            const listAboutUS = await axios.get(`${API_URL}/api/post/getByMenuSlug/ve-chung-toi`);
            if (listAboutUS && listAboutUS.data) {
                setListAboutUS(listAboutUS.data?.data);
                setTitle(listAboutUS.data?.data[0]?.menu?.menuName)
            }
        }
        getData();
    }, []);

    return (
        <>
            <div className={styles["aboutUS"]} id="about-us">
                <div className={styles["aboutUS-page"]}>
                    <div className={styles["aboutUS-title"]}>
                        <h2>{title}</h2>
                    </div>
                    <div className={styles["aboutUS-line"]}>
                        <div className={styles["line"]}></div>
                    </div>
                    <div className={styles["aboutUS-container"]}>
                        <div className={styles["aboutUS-container-detail"]}>
                            {
                                listAboutUS?.map((item, index) => (

                                    <div key={index}>
                                        {
                                            index < 4 ?
                                                <div className={styles["aboutUS-container-item"]}>
                                                    <div className={styles["aboutUS-container-item-img"]}>
                                                        <img className={styles["aboutUS-item-img"]} src={BUNNY_URL + "/" + item?.thumb} width="278" height="281" alt={item.thumb} />
                                                    </div>
                                                    <div className={styles["aboutUS-container-item-text"]} dangerouslySetInnerHTML={{
                                                        __html: item?.description,
                                                    }}>
                                                    </div>
                                                </div>
                                                :
                                                <></>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AboutUS;
