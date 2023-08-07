import React from "react";
import OnePeopleHeader from "./OnePeopleHeader";
import ImageBlock from "./ImageBlock";
import FollowersBlock from "./FollowersBlock";
import styles from "./OnePeople.module.scss";
import Friends from "./Friends";

const OnePeople: React.FC = (): JSX.Element => {
  return (
    <div>
      <OnePeopleHeader />
      <div className={styles.leftRightBlock}>
        <div>
          <ImageBlock />
        </div>
        <div>
          <FollowersBlock />
          <Friends />
        </div>
      </div>
    </div>
  );
};

export default OnePeople;
