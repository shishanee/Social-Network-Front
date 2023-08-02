import React from "react";
import styles from "./Friends.module.scss";

const Friends: React.FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.friendsContaner}>
        <div className={styles.searchFriendWords}>
          <div className={styles.searchFriends}>Поиск друзей</div>
          <div className={styles.MoreSetting}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.24 8.9a2.9 2.9 0 0 0 5.52 0H20a.9.9 0 1 0 0-1.8h-8.24a2.9 2.9 0 0 0-5.52 0H4a.9.9 0 1 0 0 1.8h2.24ZM9 6.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2ZM3.1 16a.9.9 0 0 1 .9-.9h8.24a2.9 2.9 0 0 1 5.52 0H20a.9.9 0 1 1 0 1.8h-2.24a2.9 2.9 0 0 1-5.52 0H4a.9.9 0 0 1-.9-.9Zm10.8 0a1.1 1.1 0 1 1 2.2 0 1.1 1.1 0 0 1-2.2 0Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div>
              <a href="№">Расширенный поиск</a>
            </div>
          </div>
        </div>
        <div className={styles.liveSearch}>
            <div><input type="text" /></div>
        </div>
        <div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Friends;
