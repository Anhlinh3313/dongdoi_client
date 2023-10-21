import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import styles from "../../styles/Post.module.css"
import { API_URL, BUNNY_URL } from "@function/wsCode";
import axios from "axios";
import moment from "moment";
import { Divider } from 'antd';

function Home() {
    const router = useRouter();
    const { slug } = router?.query;
    const [data, setData] = useState([]);
    const [dataMostView, setMostViewData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/post/getBySlug/${slug}`);
                const data = response.data;
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        const fetchDataMostView = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/post/getNumberOfReader?limit=5`);
                const data = response.data;
                setMostViewData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (slug) {
            fetchData();
        }
        fetchDataMostView()
    }, [slug]);

    console.log(dataMostView)

    return (
        <section className={styles['featured-news-details']}>
            <div className={styles['featured-new-support-details']}>
                <h3 className={styles['featured-detail-title']}>{data.title}</h3>
                <div className={styles['featured-detail-time']}>{moment(new Date(data?.createdTime)).format("DD/MM/YYYY")}</div>
                <img className={styles['featured-detail-image']} src={BUNNY_URL + "/" + data?.thumb} alt={data.thumb} />
                <div className={styles['featured-new-text-details']} dangerouslySetInnerHTML={{
                    __html: data?.content,
                }}></div>
            </div>

            <div className={styles['most-viewed']}>
                <h3 className={styles['most-viewed-header-title']}>Xem nhiều nhất</h3>
                {dataMostView?.map((dataView, index) => (
                    <div key={index}>
                        {index === 0 ? (
                            <a href={dataView.slug} className={styles['most-viewed-top']}>
                                <img className={styles['most-viewed-image']} src={BUNNY_URL + "/" + dataView?.thumb} alt={dataView.thumb} />
                                <div className={styles['most-viewed-text']}>
                                    <h4 className={styles['most-viewed-title']}>{dataView.title}</h4>
                                    <div className={styles['most-viewed-time']}>{moment(new Date(dataView?.createdTime)).format("DD/MM/YYYY")}</div>
                                </div>
                            </a>
                        ) : (
                            <a href={dataView.slug} className={styles['most-viewed-normal']}>
                                <img className={styles['most-viewed-image']} src={BUNNY_URL + "/" + dataView?.thumb} alt={dataView.thumb} />
                                <div className={styles['most-viewed-text']}>
                                    <h4 className={styles['most-viewed-title']}>{dataView.title}</h4>
                                    <div className={styles['most-viewed-time']}>{moment(new Date(dataView?.createdTime)).format("DD/MM/YYYY")}</div>
                                </div>
                            </a>
                        )}
                        <Divider className={styles['separator']} />
                    </div>
                ))}



            </div>

        </section>
    );
}

export default Home;