import React from "react";
import Styles from "../../../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={Styles["footer"]} id="contact">
      <div className={Styles["footer-container"]}>
        <div className={Styles["footer-container-item"]}>
          <div className={Styles["footer-title"]}>
            <h2>VẠN SỰ TÙY DUYÊN</h2>
          </div>
          <div className={Styles["footer-line"]}>
            <div className={Styles["line"]}></div>
          </div>
          <div className={Styles["footer-container-profile"]}>
            <div className={Styles["footer-container-profile-img"]}>
              <img src="/img_icon1.png" alt="footer-icon-1" />
            </div>
            <div className={Styles["footer-container-profile-text"]} >
              <p>Địa chỉ: 240D5 đường Đoàn Hoàn Minh, Phường 6, TP. Bến Tre</p>
            </div>
          </div>
          <div className={Styles["footer-container-profile"]}>
            <div className={Styles["footer-container-profile-img"]}>
              <img src="/img_icon2.png" alt="footer-icon-2" />
            </div>
            <div className={Styles["footer-container-profile-text"]} >
              <p>Hotline: 0877552277</p>
            </div>
          </div>
          <div className={Styles["footer-container-profile"]}>
            <div className={Styles["footer-container-profile-img"]}>
              <img src="/img_icon3.png" alt="footer-icon-3" />
            </div>
            <div className={Styles["footer-container-profile-text"]} >
              <p>Email: admin@mystore.com</p>
            </div>
          </div>
        </div>
        <div className={Styles["footer-container-item"]}>
          <div className={Styles["footer-container-text"]}>
            <img src="/logo.png" alt="logo" width="350" height="150"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
