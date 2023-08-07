import React, { useEffect, useState } from "react";
import styles from "./OnePeople.module.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import noimage from "../../../public/noimage.png";
import { deleteUser, followUser, oneUser } from "../../features/userSlice";
import { AppDispatch, RootState } from "../../app/store";

const OnePeopleHeader: React.FC = ():JSX.Element => {
  useEffect(() => {
    dispatch(oneUser(id));
  }, []);

  const { id } = useParams();
  const user = useSelector((state:RootState) => state.user.oneUser);
  const friends = useSelector((state: RootState) => state.user.friends);
  const finded = friends.find((item) => item._id === id);
  const dispatch = useDispatch<AppDispatch>();
  const [text, setText] = useState("");

  const handleFollow = (id) => {
    setText("Отписаться");
    dispatch(followUser(id));
    location.reload();
  };

  const handleUnFollow = (id) => {
    setText("Подписаться");
    dispatch(deleteUser(id));
    location.reload();
  };

  return (
    <div className={styles.peopleBlock}>
      <div className={styles.avaBlock}>
        <img
          src={!user.image ? noimage : `http://localhost:4000/${user.image}`}
          alt=""
        />
        <h2>{`${user.firstName} ${user.lastName}`}</h2>
      </div>
      <div className={styles.buttonBlock}>
        {!finded ? (
          <button
            onClick={() => handleFollow(user._id)}
            className={styles.followButton}
          >
            {!finded ? "Подписаться" : text}
          </button>
        ) : (
          <button
            onClick={() => handleUnFollow(user._id)}
            className={styles.followButton}
          >
            {finded ? "Отписаться" : text}
          </button>
        )}
        <div className={styles.downArrow}>
          <button>Написать сообщение</button>
        </div>
      </div>
    </div>
  );
};

export default OnePeopleHeader;
