import React from "react";
import styles from "../../../../styles/Container.module.css";

const NewContainerLeft = ({listDataContainer}) => {
  return (
    <>
      {
        listDataContainer?.map((item, index) => (
          <>
            <div key={index} className={styles["col-left-item"]} >
              <h3 className={styles["title-left"]}>
              {item?.title}
              </h3>
              <div className={styles["content-left"]}>
                <div className={styles["img-left"]}>
                  <img src={item?.img} alt={item?.img}/>
                </div>
                <div className={styles["content-content-left"]}>
                  <span>{item?.description}</span>
                </div>
              </div>
            </div>
          </>
        ))
      }
    </>
  );
};

export default NewContainerLeft;
