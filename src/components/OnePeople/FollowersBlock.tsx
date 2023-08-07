import React from "react";
import styles from "./OnePeople.module.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import noimage from "../../../public/noimage.png";

const FollowersBlock: React.FC = (): JSX.Element => {
  const { id } = useParams();
  const user = useSelector((state: RootState) => state.user.oneUser);
  const followers = useSelector((state: RootState) => state.user.oneUserFollow);

  return (
    <div className={styles.followersBlock}>
      <div className={styles.followBlock}>
        <h4>Подписчики</h4>
        <p>{followers.length}</p>
      </div>
      <div className={styles.people}>
        {followers.slice(0,6).map((item) => {
          return (
            <div className={styles.oneFollow}>
              <img
                src={
                  !item.image ? noimage : `http://localhost:4000/${item.image}`
                }
                alt=""
              />
              {item.firstName}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FollowersBlock;
