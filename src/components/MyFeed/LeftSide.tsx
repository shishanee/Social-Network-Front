import React from "react";
import { Link } from "react-router-dom";
import styles from "./MyFeed.module.scss";

const LeftSide: React.FC = () => {
  return (
    <div className={styles.leftSide}>
      <div className={styles.blockMainLeft}>
        <div className={styles.photoAndMusic}>
          <Link to={"#"} className={styles.photoBut}>
            <img
              className={styles.photoIcon}
              src="https://i.ibb.co/6vLRt6r/gallery.png"
            />
            <p>Фото</p>
          </Link>

          <Link to={"#"} className={styles.musicBut}>
            <img
              className={styles.musicIcon}
              src="https://i.ibb.co/wNxg2sN/music.png"
              alt=""
            />
            <p>Музыка</p>
          </Link>
        </div>

        <div className={styles.photoBlock}>
          <img
            className={styles.photoImg}
            src="https://i.ibb.co/qJBKH3D/Abdurrahman.jpg"
            alt="photo"
          />
        </div>

        <div className={styles.buttonsPhoto}>
          <Link to={"#"} className={styles.installPhoto}>
            {" "}
            <p> Загрузить фото </p>
          </Link>
          <Link to={"#"} className={styles.showAllPhoto}>
            {" "}
            <p>Показать все </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
