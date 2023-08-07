import React from "react";
import styles from "./OnePeople.module.scss";
import noimage from "../../../public/noimage.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Friends: React.FC = (): JSX.Element => {
  const friends = useSelector((state: RootState) => state.user.oneUserFriends);

  const navigate = useNavigate();

  console.log(friends)
  const handleClick = (id) => {
    navigate(`/people/${id}`);
    location.reload();
  };
  return (
    <div className={styles.followersBlock}>
      <div className={styles.followBlock}>
        <h4>Подписки</h4>
        <p>{friends.length}</p>
      </div>
      <div className={styles.people}>
        {friends.slice(0, 6).map((item) => {
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

export default Friends;
