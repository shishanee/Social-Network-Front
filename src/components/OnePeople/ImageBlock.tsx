import React from "react";
import styles from "./OnePeople.module.scss";
import image from "../../../public/image.png";

const ImageBlock: React.FC = ():JSX.Element => {
  return (
    <div className={styles.imgBlock}>
      <div className={styles.buttonBlock}>
        <img src={image} alt="" />
        <button>Фото</button>
      </div>
      <div className={styles.images}>
        <img src="https://i.ibb.co/qJBKH3D/Abdurrahman.jpg" alt="" />
        <img src="https://i.ibb.co/qJBKH3D/Abdurrahman.jpg" alt="" />
        <img src="https://i.ibb.co/qJBKH3D/Abdurrahman.jpg" alt="" />
      </div>
    </div>
  );
};

export default ImageBlock;
