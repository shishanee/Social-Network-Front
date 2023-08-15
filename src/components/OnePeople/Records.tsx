import React, { useEffect, useState } from "react";
import styles from "./OnePeople.module.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { getPostsAll } from "../../features/userSlice";
import { addLike } from "../../features/postsSlice";
import noimage from '../../../public/noimage.png'
import LikesAndComments from "../Home/LikesAndComments";

const Records: React.FC = (): JSX.Element => {
  const posts = useSelector((state: RootState) => state.user.posts);
  const [open,setOpen] = useState(false)
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getPostsAll(id));
  }, []);

  const handleLike = (postId) => {
    dispatch(addLike({ id, postId }));
  };

  return (
    <div className={styles.recordsBlock}>
      <div className={styles.recordsButton}>
        <button>Все записи</button>
      </div>
      <div>
        {posts === undefined ? (
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
                  <img src={!item.user.image ? noimage : `http://localhost:4000/${item.user.image}`} alt="" />
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
                        <div key={item2.filename} className={styles.imageBlock}>
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
                <LikesAndComments userId={id} postId={item._id} like={item.likes} setOpen={setOpen}/>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Records;
