import React from "react";
import styles from "./Group.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { followGroup, unFollowGroup } from "../../features/groupSlice";
import { postInGroupById } from "../../features/groupPostSlice";

const GroupCard: React.FC = (props: Props): JSX.Element => {
  const { id, image, name, followers } = props;
  const dispatch = useDispatch();
  const handleFollow = (id) => {
    dispatch(unFollowGroup(id));
    location.reload();
  };
  const handleClick = () => {
    dispatch(id);
    dispatch(postInGroupById(id));
  }

  const handleUnFollow = (id) => {
    dispatch(followGroup(id));
    location.reload();
  };

  const userId = useSelector((state) => state.user.user._id);

  const newUser = followers.find((item) => item._id === userId);

  return (
    <div>
      <div className={styles.oneGroup}>
        <div className={styles.groupName}>
          <img src={image} alt="" />
          <div>
            <Link onClick={() => handleClick(id)} to={`/group/${id}`}>
              {name}
            </Link>
            <h5>{followers.length} участников</h5>
          </div>
        </div>
        {newUser ? (
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
