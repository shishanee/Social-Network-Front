import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MyFeed.module.scss";
import Likes from "./Likes";
import { useDispatch, useSelector } from "react-redux";
import { addLike } from "../../features/postsSlice";
import Comments from "./Comments";
import Reports from "./Reports";
import Dot from "./Dot";
import CommentsPage from "./CommentsPage";
// import { format, formatDistance, formatRelative, subDays } from 'date-fns'
// import { es, ru } from 'date-fns/locale'

const Posts: React.FC = ({ posts }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const handleLike = (postId) => {
    dispatch(addLike({ user, postId }));
  };
  const comments = useSelector((state) => state.comments.comments);

  const handleComment = () => {};

  // function createDate_DTO(date: Date) {
  //   return format(date, "d/MMMM/yy/hh/mm/ss", { locale: ru })
  // }

  return (
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
                    {/* {createDate_DTO(Date.now(), item.date)} */}
                    {item.date.split("T").join(" ").slice(0, 16)}
                  </p>
                </div>

                <Dot postId={item._id} />
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
                <Likes user={user} item={item} handleLike={handleLike} />
                <Comments item={item} handleComment={handleComment} />
                <Reports />
              </div>
                  <CommentsPage item={item} comments={comments}/>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Posts;
