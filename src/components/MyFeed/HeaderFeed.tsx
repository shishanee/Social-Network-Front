import React from "react";
import styles from "./MyFeed.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import noimage from '../../../public/noimage.png'

const HeaderFeed: React.FC = (): JSX.Element => {
  const loading = useSelector((state) => state.posts.loading)
  
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className={styles.contentHeader}>
      <div className={styles.avaName}>
        <img
          className={styles.avaImg}
          src={!user.user.image ? noimage : `http://localhost:4000/${user.user.image}`}
          alt="ava"
        />

        <div className={styles.blockWithoutImg}>
          <div className={styles.fullName}>
            <div
              className={styles.name}
            >{(loading) ? "Loading" : `${user.user.firstName} ${user.user.lastName}`}</div>
            <Link to={"/edit"} className={styles.linkToChangeProfile}>
              Укажите информацию о себе
              <span className={styles.arrowLink}> › </span>
            </Link>
          </div>

          <div className={styles.blockForChanging}>
            <Link to={"/edit"} className={styles.changeProfile}>
              <p>Редактировать профиль</p>
            </Link>
            <button className={styles.yet}> Ещё </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderFeed;
