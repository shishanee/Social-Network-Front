import React, { useEffect, useState } from "react";
import styles from "./MyFeed.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { createPosts, getPosts } from "../../features/postsSlice";
import FormForLeftSide from "./FormForLeftSide";
import MainLeftSide from "./MainLeftSide";
import Posts from "./Posts";
import { getAllComments } from "../../features/commentsSlice";
import { AppDispatch } from "../../app/store";

const LeftSide: React.FC = (): JSX.Element => {
  const [text, setText] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state) => state.posts.userPosts);
  const loading = useSelector((state) => state.posts.loading);
  const comment = useSelector((state) => state.comments.loading);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getAllComments());
  }, [loading, comment]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(createPosts({ text, image }));
    setText("");
  };

  const handleChangeFile = (e) => {
    setImage(e.target.files);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={styles.leftSide}>
      <MainLeftSide />
      <FormForLeftSide
        text={text}
        handleChange={handleChange}
        handleChangeFile={handleChangeFile}
        handleClick={handleClick}
      />
      <Posts posts={posts} />
    </div>
  );
};

export default LeftSide;
