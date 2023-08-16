import React, { useState } from "react";
import styles from "./MyFeed.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePost } from "../../features/postsSlice";

const Dot: React.FC = ({ postId }):JSX.Element => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    setActive(true);
  };
  const handleBlur = () => {
    setTimeout(() => {
      setActive(false);
    }, 140);
  };

  const handleRemove = () => {
    dispatch(deletePost({ postId }));
  };
  return (
    <div>
      <Link
        className={styles.linkBut}
        to={"#"}
        onFocus={handleClick}
        onBlur={handleBlur}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="more_horizontal_24__Page-2"
            stroke="none"
            stroke-width="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="more_horizontal_24__more_horizontal_24">
              <path id="more_horizontal_24__Bounds" d="M24 0H0v24h24z"></path>
              <path
                d="M18 10a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2Zm-6 4a2 2 0 0 1-2-2c0-1.1.9-2 2-2a2 2 0 0 1 2 2 2 2 0 0 1-2 2Zm-6 0a2 2 0 0 1-2-2c0-1.1.9-2 2-2a2 2 0 0 1 2 2 2 2 0 0 1-2 2Z"
                id="more_horizontal_24__Mask"
                fill="#929292"
              ></path>
            </g>
          </g>
        </svg>
      </Link>
      {active ? (
        <div className={styles.popUp}>
          <button onClick={handleRemove} className={styles.popUpBut}>
            Удалить запись
          </button>
          <button className={styles.popUpBut}>Сохранить в закладках</button>
          <button className={styles.popUpBut}>Архивировать запись</button>
          <button className={styles.popUpBut}>Редактировать</button>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default Dot;
