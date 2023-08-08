import React from "react";
import styles from "./Group.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { followGroup, unFollowGroup } from "../../features/groupSlice";

const GroupCard: React.FC = (props: Props): JSX.Element => {
  const { id, image, name, followers } = props;
  const dispatch = useDispatch();
  const handleFollow = (id) => {
    dispatch(unFollowGroup(id));
    location.reload();
  };

  const handleUnFollow = (id) => {
    dispatch(followGroup(id));
    location.reload();
  };

  const userId = useSelector((state) => state.user.user._id);

  const userGroups = followers.includes(userId);

  return (
    <div>
      <div className={styles.oneGroup}>
        <div className={styles.groupName}>
          <img src={image} alt="" />
          <div>
            <Link to={`/group/${id}`}>{name}</Link>
            <h5>{followers.length} участников</h5>
          </div>
        </div>
        {userGroups ? (
          <button className={styles.unfollow} onClick={() => handleFollow(id)}>
            Вы подписаны
          </button>
        ) : (
          <button
            className={styles.followButton}
            onClick={() => handleUnFollow(id)}
          >
            Подписаться
          </button>
        )}
      </div>
      <div className={styles.hr}></div>
    </div>
  );
};

export default GroupCard;
