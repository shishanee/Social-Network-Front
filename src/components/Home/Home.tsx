import React from "react";
import styles from "./Home.module.scss";
import RightSidebar from "../rightSidebar/rightSidebar";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Home: React.FC = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <>
      <div className={styles.homePage}>
        <title>Новости</title>
        <div className={styles.post}>
          <img src={`http://localhost:4000/${user.image}`} alt="" />
          <input type="text" placeholder="Что у вас нового?" />
        </div>
      </div>
      <RightSidebar />
    </>
  );
};

export default Home;
