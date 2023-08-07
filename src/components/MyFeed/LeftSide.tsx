import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MyFeed.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { createPosts, getPosts } from "../../features/postsSlice";

const LeftSide: React.FC = ():JSX.Element => {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(createPosts({text}))
    // setText('')
  }
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.userPosts);
  useEffect(() => {
  dispatch(getPosts())
  }, []);
  console.log(posts);
  
  
  return (
    <div className={styles.leftSide}>
      <div className={styles.blockMainLeft}>
        <div className={styles.photoAndMusic}>
          <Link to={"#"} className={styles.photoBut}>
            <img
              className={styles.photoIcon}
              src="https://i.ibb.co/6vLRt6r/gallery.png"
            />
            <p>Фото</p>
          </Link>

          <Link to={"#"} className={styles.musicBut}>
            <img
              className={styles.musicIcon}
              src="https://i.ibb.co/wNxg2sN/music.png"
              alt=""
            />
            <p>Музыка</p>
          </Link>
        </div>

        <div className={styles.photoBlock}>
          <img
            className={styles.photoImg}
            src="https://i.ibb.co/qJBKH3D/Abdurrahman.jpg"
            alt="photo"
          />
        </div>

        <div className={styles.buttonsPhoto}>
          <Link to={"#"} className={styles.installPhoto}>
            {" "}
            <p> Загрузить фото </p>
          </Link>
          <Link to={"#"} className={styles.showAllPhoto}>
            {" "}
            <p>Показать все </p>
          </Link>
        </div>
      </div>

      <form onSubmit={handleClick} className={styles.post}>
          <img src="https://i.ibb.co/qJBKH3D/Abdurrahman.jpg" alt="" />
          
          <input value={text} onChange={handleChange} type="text" placeholder="Что у вас нового?" />
        </form>

        <div className={styles.blockForNotes}>
            <div className={styles.namesBlock}>
              <Link className={styles.linkk} to={"#"}>Все записи</Link>
              <Link className={styles.linkk2} to={"#"}>Мои записи</Link>
              <Link className={styles.linkk2} to={"#"}>Архив записей</Link>
            </div>
            <br className={styles.br} />
            <hr className={styles.hr} />
            <br />

            {(posts[0] === false) ? 
            <div className={styles.withoutNotes}>
              <div>
              <img src="https://i.ibb.co/SJnt2jL/notes.png" alt="notes" />
              <p>На стене пока нет ни одной записи</p>
              </div>
            </div>
            : posts.map((item) => {
              return (
              <div>
                <p>{item.user.firstName}</p>
                <p>{item.user.lastName}</p>
                <p>{item.text}</p>
                <p>{item.date}</p>
                </div>
  )}) 
            }

        </div>
    </div>
  );
};

export default LeftSide;
