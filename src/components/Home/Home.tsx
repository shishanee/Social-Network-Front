import React from "react";
import styles from "./Home.module.scss";
import PostBlock from "./PostBlock";

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.homePage}>
        <title>Новости</title>
        <PostBlock />
      </div>
    </>
  );
};

export default Home;
