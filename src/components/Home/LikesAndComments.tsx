import React, { useState } from "react";
import likeOn from "../../../public/heart (3).png";
import unlike from "../../../public/heart (2).png";
import chat from "../../../public/chat-box.png";
import share from "../../../public/share.png";
import styles from "./Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { addLike, getOnePost } from "../../features/postsSlice";
import ModalPost from "./ModalPost";

const LikesAndComments: React.FC = ({ like, postId }): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.user);
  const [icon, setIcon] = useState(unlike);
  const [open, setOpen] = useState(false);

  const userId = user._id;
  const likeClick = (id) => {
    dispatch(addLike({ userId, postId: id }));
    location.reload();
  };

  const finded = like.find((item) => item.user === userId);

  const handleClick = (id) => {
    dispatch(getOnePost(id));
    setOpen(true);
  };
  return (
    <div className={styles.like}>
      <button onClick={() => likeClick(postId)}>
        <img src={!finded ? unlike : likeOn} alt="" />
        {like.length >= 1 && <p>{like.length}</p>}
      </button>
      <button onClick={() => handleClick(postId)}>
        <img src={chat} alt="" />
      </button>
      {open && <ModalPost id={postId} setOpen={setOpen} />}
    </div>
  );
};

export default LikesAndComments;
