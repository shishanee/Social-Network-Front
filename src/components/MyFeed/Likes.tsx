import React from "react";
import styles from "./MyFeed.module.scss";
import heart from "../../../public/heart (2).png";
import heartTwo from "../../../public/heart (3).png";

const Likes: React.FC = ({ user, item, handleLike }) => {
  const filtred = item.likes.find((item) => item.user._id == user._id);
  console.log(filtred);

  return (
    <span
      className={
        item.likes.find((item) => {
          if (item.user._id == user._id) {
            return true;
          } else {
            return false;
          }
        })
          ? styles.span2
          : styles.span
      }
      aria-hidden="true"
    >
      <button
        className={styles.buttonLike}
        onClick={() => handleLike(item._id)}
      >
        <div>
          <img
            className={styles.heart}
            src={filtred ? heartTwo : heart}
            alt=""
          />
        </div>
      </button>
    </span>
  );
};

export default Likes;
