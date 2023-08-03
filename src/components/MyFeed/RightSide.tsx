import React from 'react';
import styles from './MyFeed.module.scss';
import { Link } from 'react-router-dom';

const RightSide: React.FC = () => {
  const name = "Абдуррахман Навразов"
  return (
    <div className={styles.rightSide}>
      <div className={styles.blockForFriends}>

        <Link className={styles.linkToFriends} to={"#"}>Подписчики 
          <span> 1</span>
          </Link>

        <Link className={styles.blockForFriend} to={"#"}>
        <img className={styles.friendsAva} src="https://i.ibb.co/qJBKH3D/Abdurrahman.jpg" alt="" />
        <p className={styles.friendsName}>{name.split("").slice(0, 8).join("") + "..."}</p>
        </Link>
      </div>
      
      <div className={styles.blockForFriends}>

        <Link className={styles.linkToFriends} to={"#"}>Подписки 
          <span> 1</span>
          </Link>

        <Link className={styles.blockForFriend} to={"#"}>
        <img className={styles.friendsAva} src="https://i.ibb.co/qJBKH3D/Abdurrahman.jpg" alt="" />
        <p className={styles.friendsName}>{name.split("").slice(0, 8).join("") + "..."}</p>
        </Link>
      </div>

      <div className={styles.blockForFriends}>

        <Link className={styles.linkToFriends} to={"#"}>Сообщества 
          <span> 1</span>
          </Link>

        <Link className={styles.blockForFriend} to={"#"}>
        <img className={styles.friendsAva} src="https://i.ibb.co/qJBKH3D/Abdurrahman.jpg" alt="" />
        <p className={styles.friendsName}>{name.split("").slice(0, 8).join("") + "..."}</p>
        </Link>
      </div>
      

    </div>
  )
}

export default RightSide
