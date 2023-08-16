import React from "react";
import { Link } from "react-router-dom";
import styles from "./MyFeed.module.scss";
import {  useSelector } from "react-redux";
import { RootState } from "../../app/store";

const MainLeftSide: React.FC = () => {
  const images = useSelector((state: RootState) => state.user.images);
  return (
    <div className={styles.blockMainLeft}>
      <div className={styles.photoAndMusic}>
        <Link to={"#"} className={styles.photoBut}>
          <img
            className={styles.photoIcon}
            src="https://i.ibb.co/6vLRt6r/gallery.png"
          />
          <p>Фото</p>
        </Link>

        <Link to={"/music"} className={styles.musicBut}>
          <img
            className={styles.musicIcon}
            src="https://i.ibb.co/wNxg2sN/music.png"
            alt=""
          />
          <p>Музыка</p>
        </Link>
      </div>

      <div className={styles.photoBlock}>
        {images.slice(0, 3).map((item) => {
          return <img className={styles.photoImg} src={`http://localhost:4000/${item}`} alt="" />;
        })}
      </div>

      <div className={styles.buttonsPhoto}>
        <Link to={"/image"} className={styles.installPhoto}>
          {" "}
          <p> Загрузить фото </p>
        </Link>
        <Link to={"/image"} className={styles.showAllPhoto}>
          {" "}
          <p>Показать все </p>
        </Link>
      </div>
    </div>
  );
};

export default MainLeftSide;
