import React from "react";
import styles from "./MyFeed.module.scss";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const MainFeed: React.FC = () => {
  return (
    <div className={styles.contentMain}>
      <LeftSide />
      <RightSide />
    </div>
  );
};


export default MainFeed;
