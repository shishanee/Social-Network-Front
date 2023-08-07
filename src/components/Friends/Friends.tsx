import React from "react";
import { useState, useEffect } from "react";
import styles from "./Friends.module.scss";
import FriendsCart from "./FriendsCart";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { getUser } from "../../features/userSlice";
import noimage from "../../../public/noimage.png";
import FriendCart from "./FriendCart";

const Friends: React.FC = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const [actionYouFollowers, setActionYouFollowers] = useState<boolean>(true);
  const [open, setOpen] = useState(true);
  const [actionSubscriptions, setActionSubscriptions] =
    useState<boolean>(false);

  const followers = useSelector((item: RootState) => item.user.followers);
  const friends = useSelector((item: RootState) => item.user.friends);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const handleActionYouFollowers = (): void => {
    setActionYouFollowers(true);
    setActionSubscriptions(false);
    setOpen(true);
  };

  const handleActionSubscriptions = (): void => {
    setActionYouFollowers(false);
    setActionSubscriptions(true);
    setOpen(false);
  };

  return (
    <>
      <div className={styles.friendsContaner}>
        <div className={styles.searchFriendWords}>
          <div
            onClick={handleActionYouFollowers}
            className={
              actionYouFollowers
                ? styles.actionYouFollowers
                : styles.youFollowers
            }
          >
            Ваши подписчики
          </div>
          <div
            onClick={handleActionSubscriptions}
            className={
              actionSubscriptions
                ? styles.actionYouFollowers
                : styles.youFollowers
            }
          >
            Ваши подписки
          </div>
        </div>
        <div className={styles.liveSearch}>
          <input type="text" />
        </div>
        <div className={styles.siz}></div>
        <div>
          <div>
            {open && (
              <div>
                {followers.map((item) => {
                  return (
                    <FriendCart
                      image={
                        !item.image
                          ? noimage
                          : `http://localhost:4000/${item.image}`
                      }
                      firstName={item.firstName}
                      lastName={item.lastName}
                      buttonText="Отписать"
                      id={item._id}
                    />
                  );
                })}
              </div>
            )}
            {!open && (
              <div>
                {friends.map((item) => {
                  return (
                    <FriendsCart
                      image={
                        !item.image
                          ? noimage
                          : `http://localhost:4000/${item.image}`
                      }
                      firstName={item.firstName}
                      lastName={item.lastName}
                      buttonText="Отписаться"
                      id={item._id}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Friends;
