import React from "react";
import styles from "./MyFeed.module.scss";
import HeaderFeed from "./HeaderFeed";
import MainFeed from "./MainFeed";


const MyFeed: React.FC = ():JSX.Element => {
    return (
        <div className={styles.allPage}>
              <HeaderFeed />
              <MainFeed />
            </div>
  
    );
  };

export default MyFeed;
