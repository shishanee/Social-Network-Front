import React, { useState } from "react";
import styles from "./Image.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { addImage } from "../../features/imageSlice";
import upload from "../../../public/upload.png";

const Image: React.FC = (): JSX.Element => {
  const images = useSelector((state: RootState) => state.image.images);
  const [image, setImage] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();
  const handleChangeFile = (e) => {
    setImage(e.target.files);
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addImage({ image }));
  };
  return (
    <div className={styles.imageContainer}>
      <div className={styles.imageText}>
        <div className={styles.addImage}>
          {" "}
          <p className={styles.youphotos}>Ваши фотографии:</p>{" "}
          <form className={styles.form} onSubmit={handleClick}>
            <label className={styles.label} htmlFor="label">
              <p>Добавить фото</p>
              <input id="label" onChange={handleChangeFile} type="file" />{" "}
            </label>
            <button>Загрузить</button>
          </form>
        </div>
      </div>
      <div className={styles.allImagesBlock}>
        {images.map((item) => {
          return (
            <img
              className={styles.oneImage}
              src={`http://localhost:4000/${item}`}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
};

export default Image;
