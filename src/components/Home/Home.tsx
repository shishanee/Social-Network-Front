import React from "react";
import styles from "./Home.module.scss";
import RightSidebar from "../rightSidebar/rightSidebar";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import noimage from "../../../public/noimage.png";
import PostBlock from "./PostBlock";

const Home: React.FC = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user.user);
  const token = useSelector((state: RootState) => state.application.token);

  return (
    <>
      <div className={styles.homePage}>
        <title>Новости</title>
        <div className={styles.post}>
          {token && (
            <img
              src={user.image ? `http://localhost:4000/${user.image}` : noimage}
              alt=""
            />
          )}
          <input type="text" placeholder="Что у вас нового?" />
        </div>
        <PostBlock />
      </div>
      {/* <RightSidebar /> */}
    </>
  );
};

export default Home;
