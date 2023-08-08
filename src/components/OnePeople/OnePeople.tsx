import React from "react";
import OnePeopleHeader from "./OnePeopleHeader";
import ImageBlock from "./ImageBlock";
import FollowersBlock from "./FollowersBlock";
import styles from "./OnePeople.module.scss";
import Friends from "./Friends";
import Groups from "./Groups";
import Records from "./Records";

const OnePeople: React.FC = (): JSX.Element => {
  return (
    <div>
      <OnePeopleHeader />
      <div className={styles.leftRightBlock}>
        <div>
          <ImageBlock />
          <Records />
        </div>
        <div>
          <FollowersBlock />
          <Friends />
          <Groups />
        </div>
      </div>
    </div>
  );
};

export default OnePeople;
