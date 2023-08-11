import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MyFeed.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { createPosts, getPosts } from "../../features/postsSlice";
import FormForLeftSide from "./FormForLeftSide";
import MainLeftSide from "./MainLeftSide";
import Posts from "./Posts";
import { getAllComments, getPostComments } from "../../features/commentsSlice";

const LeftSide: React.FC = (): JSX.Element => {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.userPosts);
  

  const loading = useSelector((state) => state.posts.loading);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getAllComments())
  }, [loading]);

  const handleClick = (e) => {
    e.preventDefault();
    if (text !== " ") {
    dispatch(createPosts({ text, image }));
    setText("");
  }};

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
