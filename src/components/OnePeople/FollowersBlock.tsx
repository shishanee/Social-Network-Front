import React from "react";
import styles from "./OnePeople.module.scss";
import noimage from "../../../public/noimage.png";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useNavigate } from "react-router-dom";

const FollowersBlock: React.FC = (): JSX.Element => {
  const followers = useSelector((state: RootState) => state.user.oneUserFollow);

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/people/${id}`);
    location.reload();
  };

  return (
    <div className={styles.followersBlock}>
      <div className={styles.followBlock}>
        <h4>Подписчики</h4>
        <p>{followers.length}</p>
      </div>
      <div className={styles.people}>
        {followers.slice(0, 6).map((item) => {
          return (
            <div className={styles.oneFollow}>
              <img
                src={
                  !item.image ? noimage : `http://localhost:4000/${item.image}`
                }
                alt=""
              />
              <p onClick={() => handleClick(item._id)}>{item.firstName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FollowersBlock;
