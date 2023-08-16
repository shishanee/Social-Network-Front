import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import noimage from "../../../public/noimage.png";
import styles from "./Home.module.scss";
import Dots from "./Dots";
import LikesAndComments from "./LikesAndComments";
import { allPosts } from "../../features/postsSlice";
import { Link } from "react-router-dom";

const PostBlock: React.FC = (): JSX.Element => {
  const posts = useSelector((state: RootState) => state.posts.allPosts);
  const friends = useSelector((state: RootState) => state.user.friends);
  const [open, setOpen] = useState<boolean>(false);
  const filtered = posts.filter((item) => {
    return friends.some((friend) => friend._id === item.user._id);
  });
  

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(allPosts());
  }, []);
  return (
    <div className={styles.postsBlock}>
      {filtered.reverse().map((item) => {
        return (
          <div className={styles.onePostBlock}>
            <div className={styles.personalBlock}>
              <div className={styles.firstBlock}>
                <img
                  src={
                    !item.user.image
                      ? noimage
                      : `http://localhost:4000/${item.user.image}`
                  }
                  alt=""
                />
                <div>
                  <Link
                    to={`/people/${item.user._id}`}
                  >{`${item.user.firstName} ${item.user.lastName}`}</Link>
                  <h6>Сегодня {item.date.slice(11, 16)}</h6>
                </div>
              </div>
              <Dots postId = {item._id} />
            </div>
            <div className={styles.onePost}>
              <p>{item.text}</p>
              {item.image.map((item) => {
                return (
                  <img
                    className={styles.image}
                    src={`http://localhost:4000/${item.path}`}
                    alt=""
                  />
                );
              })}
              <LikesAndComments
                userId={item.user._id}
                postId={item._id}
                like={item.likes}
                setOpen={setOpen}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostBlock;
