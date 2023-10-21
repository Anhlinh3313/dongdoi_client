import { useEffect, useState } from "react";
import styles from "../../../styles/Donate.module.css"
import { API_URL } from "../../../app/@function/wsCode"
import axios from "axios";
import { message } from 'antd';

function DonateDetail({ id }) {
    const [listBank, setListBank] = useState([]);

    useEffect(() => {
        const getBankDetails = async () => {
            const dataBank = await axios.get(`${API_URL}/api/accountBank/getByBankId/${id}`);
            setListBank(dataBank?.data)
        }
        if (id) {
            getBankDetails();
        }

    }, [id]);

    function handleCopyBankNumber() {
        // Lấy nội dung của phần tử có id là "bank-number"
        const copyText = document.querySelector('#bank-number').textContent;

        // Sao chép nội dung vào clipboard
        navigator.clipboard.writeText(copyText)
            .then(() => {
                message.success('Đã sao chép thành công:', copyText);
            })
            .catch((error) => {
                console.error('Lỗi khi sao chép:', error);
            });
    }

    function handleCopyBankName(event) {
        const copyText = document.querySelector('#bank-name').textContent;

        navigator.clipboard.writeText(copyText)
            .then(() => {
                message.success('Đã sao chép thành công:', copyText);
            })
            .catch((error) => {
                console.error('Lỗi khi sao chép:', error);
            });
    }

    function downloadImage(link) {
        const downloadLink = document.createElement("a");
        downloadLink.href = link;
        downloadLink.download = "image.jpg";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }


    return (
        <div className={styles["listbank-details"]}>
            <h1>THÔNG TIN CHUYỂN KHOẢN</h1>
            <div className={styles["listbank-details-content"]}>
                <div className={styles["listbank-content-item"]}>
                    <div className={styles["listbank-item-info"]}>
                        <h5>NGÂN HÀNG CHUYỂN KHOẢN</h5>
                        <h6>{listBank?.accountBank?.bank?.code}</h6>

                        <h5>SỐ TÀI KHOẢN NGƯỜI NHẬN</h5>
                        <div className={styles["bank-number"]}>
                            <h6 id="bank-number">{listBank?.accountBank?.accountNo}</h6>
                            <img src="/copy-icon.png" onClick={handleCopyBankNumber} alt="copy-icon" />
                        </div>


                        <h5>TÊN NGƯỜI NHẬN</h5>
                        <div className={styles["bank-name"]}>
                            <h6 id="bank-name">{listBank?.accountBank?.accountName}</h6>
                            <img onClick={handleCopyBankName} src="/copy-icon.png" alt="copy-icon" />
                        </div>
                    </div>
                    <div className={styles["listbank-item-code"]}>
                        <img className={styles["qrCode"]} src={listBank?.qrDataURL} alt="qr_code" />
                        <h5>quét mã để lấy thông tin</h5>
                        <button onClick={() => downloadImage(listBank?.qrDataURL)}>Tải xuống</button>
                    </div>
                </div>

                <div className={styles["warnning"]}>
                    <h2>!! CHÚ Ý !!</h2>
                    <h5>Kiểm tra đúng số tài khoản và tên người nhận</h5>
                </div>
            </div>
        </div>
    );
}

export default DonateDetail;
