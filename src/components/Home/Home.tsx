import React from "react";
import styles from "./Home.module.scss";
import RightSidebar from "../rightSidebar/rightSidebar";

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.homePage}>
        <title>Новости</title>
        <div className={styles.post}>
          <img
            src="https://grozny.tv/storage/images/27b10e7d-9d8f-4f6e-a612-865147245920.jpg"
            alt=""
          />
          <input type="text" placeholder="Что у вас нового?" />
        </div>
      </div>
      <RightSidebar />
    </>
  );
};

export default Home;
