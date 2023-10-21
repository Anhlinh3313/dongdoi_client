import React, { useEffect, useState } from "react";
import styles from "../../styles/Donate.module.css"
import { API_URL } from "../../app/@function/wsCode"
import axios from "axios";
import DonateDetailBank from "./[id]/DonateDetailBank"
import ListDonate from "../../app/project/Home/ListDonate";

function Donate() {
    const [listBank, setListBank] = useState([]);

    const [bank, setBank] = useState("");
    const [initialBankSet, setInitialBankSet] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [bankResponse, donateResponse] = await Promise.all([
                    axios.get(`${API_URL}/api/bank/getAll`),
                    axios.get(`${API_URL}/api/transaction/getSurplus`),
                ]);

                setListBank(bankResponse?.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };


        fetchData();

    }, []);

    useEffect(() => {
        if (!bank && listBank.length > 0 && !initialBankSet) {
            setBank(listBank[0]?._id);
            setInitialBankSet(true);
        }
    }, [bank, listBank, initialBankSet]);


    return (
        <>
            <div className={styles["banner"]}>
                <img src="./bg-donate.webp" alt="bg-donate" />
            </div>


            <div className={styles["donate-detail"]}>
                <div className={styles["donate-detail-content"]}>
                    <ul className={styles["donate-detail-listbank"]}>
                        {listBank?.map((item) =>
                            <li key={item?._id} className={`${styles["donate-detail-listbank-content"]} 
                            ${item?._id === bank ? styles["bank-active"] : ""}`} onClick={() => setBank(item?._id)}>
                                <img src={"/" + item?.logo} alt={item?.logo} />
                                {item?._id === bank
                                    ?
                                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5 0C27.1425 0 35 7.8575 35 17.5C35 27.1425 27.1425 35 17.5 35C7.8575 35 0 27.1425 0 17.5C0 7.8575 7.8575 0 17.5 0ZM14.3675 22.75C13.86 23.2575 13.86 24.0975 14.3675 24.605C14.63 24.8675 14.9625 24.99 15.295 24.99C15.6275 24.99 15.96 24.8675 16.2225 24.605L22.4 18.4275C22.9075 17.92 22.9075 17.08 22.4 16.5725L16.2225 10.395C15.715 9.8875 14.875 9.8875 14.3675 10.395C13.86 10.9025 13.86 11.7425 14.3675 12.25L19.6175 17.5L14.3675 22.75Z" fill="#494949" />
                                    </svg>
                                    : <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5 0C27.1425 0 35 7.8575 35 17.5C35 27.1425 27.1425 35 17.5 35C7.8575 35 0 27.1425 0 17.5C0 7.8575 7.8575 0 17.5 0ZM14.3675 22.75C13.86 23.2575 13.86 24.0975 14.3675 24.605C14.63 24.8675 14.9625 24.99 15.295 24.99C15.6275 24.99 15.96 24.8675 16.2225 24.605L22.4 18.4275C22.9075 17.92 22.9075 17.08 22.4 16.5725L16.2225 10.395C15.715 9.8875 14.875 9.8875 14.3675 10.395C13.86 10.9025 13.86 11.7425 14.3675 12.25L19.6175 17.5L14.3675 22.75Z" fill="#FFDB20" />
                                    </svg>
                                }
                            </li>
                        )}
                    </ul>
                    <DonateDetailBank id={bank} />
                </div>
                <ListDonate />
            </div>
        </>
    );
}

export default Donate;