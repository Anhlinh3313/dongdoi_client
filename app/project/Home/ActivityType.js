import { useEffect, useState } from "react";
import styles from "../../../styles/HomeCSS/ActivityType.module.css";
import axios from "axios";
import { API_URL, BUNNY_URL } from "@function/wsCode";

function ActivityType({ }) {
    const [listActivityType, setListActivityType] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        const getData = async () => {
            const listActivityType = await axios.get(`${API_URL}/api/post/getByMenuSlug/cac-linh-vuc-hoat-dong`);
            if (listActivityType && listActivityType.data) {
                setListActivityType(listActivityType.data?.data);
                setTitle(listActivityType.data?.data[0]?.menu?.menuName)
            }
        }
        getData();
    }, []);

    return (
        <>
            <div className={styles["activity-type"]} id="active-type">
                <div className={styles["activity-type-page"]}>
                    <div className={styles["activity-type-title"]}>
                        <h2>{title}</h2>
                    </div>
                    <div className={styles["activity-type-line"]}>
                        <div className={styles["line"]}></div>
                    </div>
                    <div className={styles["activity-type-container"]}>
                        {
                            listActivityType?.map((item, index) => (
                                <div key={index} className={styles["activity-type-container-detail"]}>
                                    {
                                        index % 2 == 0 ?
                                            <div className={styles["activity-type-container-item-img"]}>
                                                <img src={BUNNY_URL + "/" + item?.thumb} alt={item?.thumb} width="600" height="650"/>
                                            </div>
                                            :
                                            <></>
                                    }

                                    <div className={styles["activity-type-container-item-text"]}>
                                        <div className={styles["container-title"]}>
                                            <h3 className={styles["container-title-text"]}>{item?.title}</h3>
                                        </div>
                                        <div className={styles["container-title-detail"]}>
                                            <p className={styles["container-title-detail-text"]} dangerouslySetInnerHTML={{
                                                __html: item?.description,
                                            }}></p>
                                        </div>
                                        <div className={styles["container-title-detail"]}>
                                            <div className={styles["container-title-detail-depression-text"]}
                                                dangerouslySetInnerHTML={{
                                                    __html: item?.content,
                                                }}></div>
                                        </div>
                                    </div>
                                    {
                                        index % 2 != 0 ?
                                            <div className={styles["activity-type-container-item-img"]}>
                                                <img src={BUNNY_URL + "/" + item?.thumb}  alt={item?.thumb} width="600" height="650"/>
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
        </>
    );
}
export default ActivityType;
