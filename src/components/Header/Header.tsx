import React from "react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header>
      <div className={styles.logo}>
        <div className={styles.search}></div>
      </div>
      <div className={styles.profile}></div>
    </header>
  );
};

export default Header;
