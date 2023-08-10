import React, { useState } from "react";
import styles from "./Image.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { addImage } from "../../features/imageSlice";

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
          <p>Ваши фотографии:</p>{" "}
          <form onSubmit={handleClick}>
            <input onChange={handleChangeFile} type="file" />{" "}
            <button >Загрузить</button>
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
