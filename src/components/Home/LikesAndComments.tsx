import React, { useState } from "react";
import likeOn from "../../../public/heart (1).png";
import unlike from "../../../public/heart (2).png";
import chat from "../../../public/chat-box.png";
import share from "../../../public/share.png";
import styles from "./Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { addLike } from "../../features/postsSlice";

const LikesAndComments: React.FC = ({ like, postId }): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.user);
  const userId = user._id;
  const likeClick = (id) => {
    dispatch(addLike({ userId, postId: id }));
  };

  const finded = like.find((item) => item.user === userId);

  return (
    <div className={styles.like}>
      <button onClick={() => likeClick(postId)}>
        <img src={!finded ? unlike : likeOn} alt="" />
        {like.length >= 1 && <p>{like.length}</p>}
      </button>
      <button>
        <img src={chat} alt="" />
      </button>
      <button>
        <img src={share} alt="" />
      </button>
    </div>
  );
};

export default LikesAndComments;
