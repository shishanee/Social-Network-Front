import React from "react";
import { useState, useEffect } from "react";
import styles from "./Friends.module.scss";
import FriendsCart from "./FriendsCart";
import test from "../../a/01_18_-_.jpg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { getUser } from "../../features/userSlice";

const Friends: React.FC = (): JSX.Element => {
    
    const dispatch = useDispatch<AppDispatch>()

  const [actionYouFollowers, setActionYouFollowers] = useState<boolean>(true);
  const [actionSubscriptions, setActionSubscriptions] = useState<boolean>(false);

    const followers = useSelector((item: RootState)=>item.user.user)

    console.log(followers);
    


    useEffect(() => {
      dispatch(getUser());
    }, [])


  const handleActionYouFollowers = (): void => {
    setActionYouFollowers(true);
    setActionSubscriptions(false);
  };

  const handleActionSubscriptions = (): void => {
    setActionYouFollowers(false);
    setActionSubscriptions(true);
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
                ? styles.actionSubscriptions
                : styles.subscriptions
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
              <div>
                <FriendsCart
                  image={test}
                  firstName="Имя"
                  lastName="Фамилия"
                  buttonText="Отписаться"
                />
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Friends;
