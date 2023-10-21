import React, { useEffect, useState } from "react";
import axios from "axios";
import Marquee from 'react-fast-marquee';
import styles from "../../styles/Donate.module.css";
import { API_URL } from "../../app/@function/wsCode";

function ListDonate() {
    const [listDonate, setListDonate] = useState([]);

    useEffect(() => {
        const fetchDataDonate = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/transaction/getAll?filter=in`);
                const data = response?.data;
                setListDonate(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchDataDonate();
    }, []);

    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });

    const getListDonateWithNames = () => {
        return listDonate?.map((donate) => {
            const content = donate.content;

            // Tìm vị trí của từ "chuyen tien"
            const startIndex = content.indexOf("chuyen tien");

            // Nếu không tìm thấy từ "chuyen tien" trong chuỗi
            if (startIndex === -1) {
                return { ...donate, name: "Noname***" };
            }

            // Lấy chuỗi trước từ "chuyen tien"
            const fullName = content.slice(0, startIndex);

            // Tách họ và tên từ chuỗi đã lấy
            const nameParts = fullName.trim().split(" ");

            // Thay thế phần tử cuối cùng của tên bằng "***"
            nameParts[nameParts.length - 1] = "***";

            // Ghép lại họ và tên đã thay thế
            const hiddenName = nameParts.join(" ");

            return { ...donate, name: hiddenName };
        });
    };

    const listDonateWithNames = getListDonateWithNames();

    return (
        <div className={styles["list-donate-home"]}>
            <h1 className={styles['intro-title']}>DANH SÁCH CÁC MẠNH THƯỜNG QUÂN</h1>
            <span className={styles['intro-line']}></span>

            <div className={styles["marquee-container"]}>
                <Marquee direction="left" speed={80} pauseOnHover>
                    {listDonateWithNames?.map((donate) => (
                        <React.Fragment key={donate._id}>
                            <span className={styles['donate-item']}>
                                <span className={styles['donate-description']}>{donate.name} đã ủng hộ vào quỹ hỗ trợ</span>
                                <span className={styles['donate-amount']}>{formatter.format(donate.money)}</span>
                            </span>
                            <span className={styles['separator']}></span>
                        </React.Fragment>
                    ))}
                </Marquee>
            </div>
        </div>
    );
}

export default ListDonate;
