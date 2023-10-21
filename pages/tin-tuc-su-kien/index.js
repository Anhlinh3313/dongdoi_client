import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from "../../styles/Post.module.css"
import { API_URL, BUNNY_URL } from "@function/wsCode";
import axios from "axios";
import CustomPagination from "./Pagination";
import moment from "moment";
const pageSize = 12;

function Home() {
    const router = useRouter();

    const [newsData, setNewsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [dataFuture, setDataFetche] = useState([]);

    useEffect(() => {
        fetchData(currentPage);
        fetchDataFuture()
    }, [currentPage]);

    const fetchDataFuture = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/post/getFuture`);
            const data = response.data;
            setDataFetche(data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchData = async (page) => {
        try {
            const response = await axios.get(`${API_URL}/api/post/getPaging?pageIndex=${page}&pageSize=${pageSize}`);
            const { data, totalPages } = response.data;
            setNewsData(data);
            setTotalPages(totalPages);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className={styles["banner"]}>
                <img src="/banner-post.webp" alt="Banner" />
            </div>
            <div className={styles['content']}>
                <section className={styles['intro']}>
                    <h1 className={styles['intro-title']}>TIN TỨC - SỰ KIỆN</h1>
                    <span className={styles['intro-line']}></span>
                    <h2 className={styles['intro-message']}>Hãy cập nhật những dự án và chương trình mới nhất của chúng tôi.
                        Và đồng hành lan tỏa những điều thiện!</h2>
                </section>

                <section className={styles['featured-news']}>
                    <h1 className={styles['intro-title']}>TIN TỨC NỔI BẬT</h1>
                    <div className={styles['featured-new-support']}>
                        {dataFuture?.map((post) => (
                            <a href={`tin-tuc-su-kien/${post.slug}`} key={post._id} className={styles['featured-new-support-content']}>
                                <img className={styles['featured-new-image']} src={BUNNY_URL + "/" + post?.thumb} alt={post.thumb} />
                                <h3 className={styles['featured-new-title']}>{post.title}</h3>
                                <div className={styles['featured-new-time']}>{moment(new Date(post?.createdTime)).format("DD/MM/YYYY")}</div>
                                <div className={styles['featured-new-text']} dangerouslySetInnerHTML={{
                                    __html: dataFuture[0]?.description,
                                }}></div>
                            </a>
                        ))}
                    </div>
                </section>

                <section className={styles['other-news']}>
                    <h1 className={styles['intro-title']}>TIN TỨC KHÁC</h1>
                    <div className={styles['other-news-content']}>
                        {newsData.map((news) => (
                            <a href={`tin-tuc-su-kien/${news.slug}`} key={news._id} className={styles['other-news-info']}>
                                <img className={styles['other-new-image']} src={BUNNY_URL + "/" + news?.thumb} alt="News" />
                                <h4 className={styles['other-new-title']}>{news.title}</h4>
                                <div className={styles['other-new-date']}>{moment(new Date(news?.createdTime)).format("DD/MM/YYYY")}</div>
                            </a>
                        ))}
                    </div>
                    <CustomPagination
                        totalItems={totalPages * pageSize}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </section>
            </div>
        </>
    );
}

export default Home;