import React from "react";
import styles from "./Header.module.scss";
import logo from "../../../public/letter-d (1).png";
import search from "../../../public/loupe.png";
import down from "../../../public/down-arrow (2).png";
import bell from "../../../public/bell.png";

const Header: React.FC = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.logoAndSearch}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
          <h3>DICAR</h3>
        </div>
        <img className={styles.bell} src={bell} alt="" />
        <div className={styles.search}>
          <input type="text" placeholder="Поиск" />
          <img src={search} alt="" />
        </div>
      </div>
      <div className={styles.profile}>
        <img
          src="https://grozny.tv/storage/images/27b10e7d-9d8f-4f6e-a612-865147245920.jpg"
          alt=""
        />
        <img className={styles.down} src={down} alt="" />
      </div>
    </header>
  );
};

export default Header;
