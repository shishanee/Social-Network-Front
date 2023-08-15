import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import close from "../../../public/close.png";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { getOnePost } from "../../features/postsSlice";
import noimage from "../../../public/noimage.png";
import CommentsPage from "../MyFeed/CommentsPage";
import InputForComments from "../MyFeed/InputForComments";
import { getAllComments } from "../../features/commentsSlice";

const ModalPost: React.FC = ({ id, setOpen }): JSX.Element => {
  const post = useSelector((state: RootState) => state.posts.onePost);
  const user = useSelector((state: RootState) => state.posts.onePostUser);
  const comments = useSelector((state: RootState) => state.comments.comments);
  useEffect(() => {
    dispatch(getAllComments())
  },[])

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getOnePost(id));
  }, []);

  return (
    <div className={styles.modal}>
      <img
        className={styles.offButton}
        onClick={() => setOpen(false)}
        src={close}
        alt=""
      />
      <div className={styles.modal__content}>
        <div className={styles.firstAvaBlock}>
          <img
            src={!user.image ? noimage : `http://localhost:4000/${user.image}`}
            alt=""
          />
          <p>{`${user.firstName} ${user.lastName}`}</p>
        </div>
        <div className={styles.onlyOnePost}>
          <h2>{post.text}</h2>
          {post.image &&
            post.image.map((item) => {
              return <img src={`http://localhost:4000/${item.path}`} alt="" />;
            })}
        </div>
        <CommentsPage item={post} comments={comments} />
        <InputForComments postId={id} />
      </div>
    </div>
  );
};

export default ModalPost;
