import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MyFeed.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addLike, createPosts, getPosts } from "../../features/postsSlice";

const LeftSide: React.FC = (): JSX.Element => {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const userId = useSelector((state) => state.user.user);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(createPosts({ text, image }));
    setText("");
  };
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.userPosts);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  console.log(posts);

  const handleChangeFile = (e) => {
    setImage(e.target.files);
  };

  const handleLike = (postId) => {
    dispatch(addLike({ userId, postId }));
  };
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

        <input
          value={text}
          onChange={handleChange}
          type="text"
          placeholder="Что у вас нового?"
        />
        <div>
          <input id="file" onChange={handleChangeFile} type="file" multiple />
          {/* <label htmlFor="file"></label>
        <img src="https://i.ibb.co/wWwYG8n/photo-camera-1-icon-icons-com-63898.png" alt="photo"
        </label> */}
        </div>
      </form>

      <div className={styles.blockForNotes}>
        <div className={styles.namesBlock}>
          <Link className={styles.linkk} to={"#"}>
            Все записи
          </Link>
          <Link className={styles.linkk2} to={"#"}>
            Мои записи
          </Link>
          <Link className={styles.linkk2} to={"#"}>
            Архив записей
          </Link>
        </div>
        {/* <br className={styles.br} />
        <hr className={styles.hr} />
        <br /> */}

        {posts[0] === undefined ? (
          <div className={styles.withoutNotes}>
            <div>
              <img src="https://i.ibb.co/SJnt2jL/notes.png" alt="notes" />
              <p>На стене пока нет ни одной записи</p>
            </div>
          </div>
        ) : (
          posts.map((item) => {
            return (
              <div key={item._id} className={styles.blockForPost}>
                <div className={styles.userNameAndAva}>
                  <img src="https://i.ibb.co/qJBKH3D/Abdurrahman.jpg" alt="" />
                  <div>
                    <span>
                      <p>{item.user.firstName}</p>
                      <p>{item.user.lastName}</p>
                    </span>
                    <p className={styles.date}>
                      {item.date.split("T").join(" ").slice(0, 16)}
                    </p>
                  </div>
                </div>

                <div className={styles.notePost}>
                  <p>{item.text}</p>
                </div>

                {item.image[0] === undefined ? (
                  <></>
                ) : (
                  <div className={styles.blockForImages}>
                    {item.image.map((item2) => {
                      return (
                        <div key={item2.filename} className={styles.imgBlock}>
                          <img
                            className={styles.img}
                            src={`http://localhost:4000/${item2?.path}`}
                            alt=""
                          />
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className={styles.blockForLikes}>
                  <span aria-hidden="true">
                    <button onClick={() => handleLike(item._id)}>
                      
                      <svg
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path d="M0 0h24v24H0z"></path>
                          <path
                            d="M16 4a5.95 5.95 0 0 0-3.89 1.7l-.12.11-.12-.11A5.96 5.96 0 0 0 7.73 4 5.73 5.73 0 0 0 2 9.72c0 3.08 1.13 4.55 6.18 8.54l2.69 2.1c.66.52 1.6.52 2.26 0l2.36-1.84.94-.74c4.53-3.64 5.57-5.1 5.57-8.06A5.73 5.73 0 0 0 16.27 4zm.27 1.8a3.93 3.93 0 0 1 3.93 3.92v.3c-.08 2.15-1.07 3.33-5.51 6.84l-2.67 2.08a.04.04 0 0 1-.04 0L9.6 17.1l-.87-.7C4.6 13.1 3.8 11.98 3.8 9.73A3.93 3.93 0 0 1 7.73 5.8c1.34 0 2.51.62 3.57 1.92a.9.9 0 0 0 1.4-.01c1.04-1.3 2.2-1.91 3.57-1.91z"
                            fill="#929292"
                            // fill-rule="nonzero"
                          ></path>
                        </g>
                      </svg>
                      {item.likes.length > 0 ? item.likes.length : ""}
                    </button>
                  </span>

                  <span aria-hidden="true">
                    <Link to={`${item._id}`}>
                      <svg
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path d="M0 0h24v24H0z"></path>
                          <path
                            d="M16.9 4H7.1c-1.15 0-1.73.11-2.35.44-.56.3-1 .75-1.31 1.31C3.11 6.37 3 6.95 3 8.1v5.8c0 1.15.11 1.73.44 2.35.3.56.75 1 1.31 1.31l.15.07c.51.25 1.04.35 1.95.37h.25v2.21c0 .44.17.85.47 1.16l.12.1c.64.55 1.6.52 2.21-.08L13.37 18h3.53c1.15 0 1.73-.11 2.35-.44.56-.3 1-.75 1.31-1.31.33-.62.44-1.2.44-2.35V8.1c0-1.15-.11-1.73-.44-2.35a3.17 3.17 0 0 0-1.31-1.31A4.51 4.51 0 0 0 16.9 4zM6.9 5.8h9.99c.88 0 1.18.06 1.5.23.25.13.44.32.57.57.17.32.23.62.23 1.5v6.16c-.02.61-.09.87-.23 1.14-.13.25-.32.44-.57.57-.32.17-.62.23-1.5.23h-4.02a.9.9 0 0 0-.51.26l-3.47 3.4V17.1c0-.5-.4-.9-.9-.9H6.74a2.3 2.3 0 0 1-1.14-.23 1.37 1.37 0 0 1-.57-.57c-.17-.32-.23-.62-.23-1.5V7.74c.02-.61.09-.87.23-1.14.13-.25.32-.44.57-.57.3-.16.58-.22 1.31-.23z"
                            fill="#929292"
                            fill-rule="nonzero"
                          ></path>
                        </g>
                      </svg>
                    </Link>
                  </span>

                  <span aria-hidden="true">
                    <Link to={`#`}>
                      <svg
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path d="M0 0h24v24H0z"></path>
                          <path
                            d="M12 3.73c-1.12.07-2 1-2 2.14v2.12h-.02a9.9 9.9 0 0 0-7.83 10.72.9.9 0 0 0 1.61.46l.19-.24a9.08 9.08 0 0 1 5.84-3.26l.2-.03.01 2.5a2.15 2.15 0 0 0 3.48 1.69l7.82-6.14a2.15 2.15 0 0 0 0-3.38l-7.82-6.13c-.38-.3-.85-.46-1.33-.46zm.15 1.79c.08 0 .15.03.22.07l7.82 6.14a.35.35 0 0 1 0 .55l-7.82 6.13a.35.35 0 0 1-.57-.28V14.7a.9.9 0 0 0-.92-.9h-.23l-.34.02c-2.28.14-4.4.98-6.12 2.36l-.17.15.02-.14a8.1 8.1 0 0 1 6.97-6.53.9.9 0 0 0 .79-.9V5.87c0-.2.16-.35.35-.35z"
                            fill="#929292"
                            fill-rule="nonzero"
                          ></path>
                        </g>
                      </svg>
                    </Link>
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default LeftSide;
