import React from "react";
import styles from "./MyFeed.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

  
const HeaderFeed: React.FC = ():JSX.Element => {
  const user = useSelector((state) => state.user);
  
  return (
    <div className={styles.contentHeader}>
      <div className={styles.avaName}>
        <img
          className={styles.avaImg}
          src="https://i.ibb.co/qJBKH3D/Abdurrahman.jpg"
          alt="ava"
        />

        <div className={styles.blockWithoutImg}>
          <div className={styles.fullName}>
            <div className={styles.name}>{`${user.user.firstName} ${user.user.lastName}`}</div>
            <Link to={"#"} className={styles.linkToChangeProfile}>
              Укажите информацию о себе
              <span className={styles.arrowLink}> › </span>
            </Link>
          </div>

          <div className={styles.blockForChanging}>
            <button className={styles.changeProfile}>
              Редактировать профиль
            </button>
            <button className={styles.yet}> Ещё </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderFeed;
