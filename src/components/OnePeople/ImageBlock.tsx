import React, { useEffect } from "react";
import styles from "./OnePeople.module.scss";
import image from "../../../public/image.png";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { onePeopleImages } from "../../features/imageSlice";
import { useParams } from "react-router-dom";

const ImageBlock: React.FC = (): JSX.Element => {
  const images = useSelector((state: RootState) => state.image.oneImages);

  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(onePeopleImages(id));
  }, []);

 
  return (
    <div className={styles.imgBlock}>
      <div className={styles.buttonBlock}>
        <img src={image} alt="" />
        <button>Фото</button>
      </div>
      <div className={styles.images}>
        {images.slice(0, 3).map((item) => {
          return <img src={`http://localhost:4000/${item}`} alt="" />;
        })}
      </div>
    </div>
  );
};

export default ImageBlock;
