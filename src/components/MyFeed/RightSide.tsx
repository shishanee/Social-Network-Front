import React from "react";
import styles from "./MyFeed.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import noimage from "../../../public/noimage.png";

const RightSide: React.FC = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/people/${id}`);
  };
  return (
    <div className={styles.rightSide}>
      <div className={styles.blockForFriends}>
        <Link className={styles.linkToFriends} to={"#"}>
          Подписчики
          <span>{user.friends.length}</span>
        </Link>

        <div className={styles.blockForFriend} to={"#"}>
          <div className={styles.friendsBl}>
            {user.friends.slice(0, 4).map((item) => {
              return (
                <div
                  onClick={() => handleNavigate(item._id)}
                  className={styles.oneFriend}
                >
                  <img
                    className={styles.friendsAva}
                    src={
                      !item.image
                        ? noimage
                        : `http://localhost:4000/${item.image}`
                    }
                    alt=""
                  />

                  <p className={styles.friendsName}>
                    {item.firstName.split("").slice(0, 6).join("") + "..."}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.blockForFriends}>
        <Link className={styles.linkToFriends} to={"#"}>
          Подписки
          <span>{user.followers.length}</span>
        </Link>

        <div className={styles.blockForFriend} to={"#"}>
          <div className={styles.friendsBl}>
            {user.followers.slice(0, 4).map((item) => {
              return (
                <div 
                onClick={() => handleNavigate(item._id)}
                className={styles.oneFriend}>
                  <img
                    className={styles.friendsAva}
                    src={
                      !item.image
                        ? noimage
                        : `http://localhost:4000/${item.image}`
                    }
                    alt=""
                  />

                  <p className={styles.friendsName}>
                    {item.firstName.split("").slice(0, 6).join("") + "..."}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.blockForFriends}>
        <Link className={styles.linkToFriends} to={"#"}>
          Сообщества
          <span>{user.groups.length}</span>
        </Link>

        <Link className={styles.blockForFriend} to={"#"}>
          <div className={styles.friendsBl}>
            {user.groups.slice(0, 4).map((item) => {
              return (
                <div className={styles.oneFriend}>
                  <img
                    className={styles.friendsAva}
                    src={
                      !item.image
                        ? noimage
                        : `http://localhost:4000/${item.image}`
                    }
                    alt=""
                  />

                  <p className={styles.friendsName}>
                    {item.name.split("").slice(0, 6).join("") + "..."}
                  </p>
                </div>
              );
            })}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RightSide;
