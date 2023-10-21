import React, { useEffect, useState } from "react";
import styles from "../../../styles/Donate.module.css"
import { API_URL } from "../../@function/wsCode"
import axios from "axios";
import Marquee from './Marquee';

function ListDonate() {
    const [totalDonate, setTotalDonate] = useState("");
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
        const fetchData = async () => {
            try {
                const donateResponse = await axios.get(`${API_URL}/api/transaction/getSurplus`);
                setTotalDonate(donateResponse?.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchDataDonate();
        fetchData();
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
                // return { ...donate, name: "Noname***" };
                return { ...donate, name: content.slice(0, 15) + "***" };
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
        <div className={styles["list-donate"]}>
            <h1 className={styles['intro-title']}>DANH SÁCH CÁC MẠNH THƯỜNG QUÂN</h1>
            <span className={styles['intro-line']}></span>

            <h2 className={styles['total-donate']}>Tổng số tiền đã được ủng hộ: <b>{formatter.format(totalDonate)}</b> <br></br>
                Dongdoi.com trân thành cảm ơn các mạnh thường quân đã ủng hộ quỹ từ thiện !!!</h2>

            <div className={styles['list-donate-info']}>
                <Marquee>
                    {listDonateWithNames?.map((donate) => (
                        <div key={donate._id} className={styles['list-donate-content']}>
                            <div className={styles['donate-item']}>
                                <span className={styles['donate-description']}>{donate.name} đã ủng hộ vào quỹ hỗ trợ</span>
                                <span className={styles['donate-amount']}>{formatter.format(donate.money)}</span>
                            </div>
                        </div>
                    ))}
                </Marquee>

            </div>
        </div>
    )
}


export default ListDonate;