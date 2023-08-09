import React from "react";
import { DefaultPlayer as Videos } from "react-html5video";
import "react-html5video/dist/styles.css";
import styles from "./Video.module.scss";
import close from "../../../public/close.png";

const ModalVideo: React.FC = ({ text, setOpen }): JSX.Element => {
  return (
    <div className={styles.modal}>
      <img onClick={() => setOpen(false)} src={close} alt="" />
      <div className={styles.modal__content}>
        <Videos
          autoPlay
          loop
          controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
        >
          <source src={text} type="video/webm" />
        </Videos>
      </div>
    </div>
  );
};

export default ModalVideo;
