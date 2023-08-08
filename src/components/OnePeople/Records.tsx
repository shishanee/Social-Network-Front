import React from "react";
import styles from "./OnePeople.module.scss";

const Records: React.FC = (): JSX.Element => {
  return (
    <div className={styles.recordsBlock}>
      <div className={styles.recordsButton}>
        <button>Все записи</button>
      </div>
      <div className={styles.hr}></div>
    </div>
  );
};

export default Records;
