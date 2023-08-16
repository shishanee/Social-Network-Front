import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./Group.module.scss";
import GroupHeader from "./GroupHeader";
import GroupDiscription from "./GroupDiscription";
import GroupFollowers from "./GroupFollowers";
import { AppDispatch, RootState } from "../../app/store";
import { getOneGroups } from "../../features/groupSlice";
import GroupPoster from "./GroupPoster";
import { postInGroupById } from "../../features/groupPostSlice";
import noimage from "../../../public/noimage.png";

const GroupMore: React.FC = (): JSX.Element => {
  const userId = useSelector((state: RootState) => state.user.user._id);
  const groups = useSelector((state: RootState) => state.group.oneGroup);
  const groupPost = useSelector(
    (state: RootState) => state.groupPost.groupPosts
  );
  const loading = useSelector((state: RootState) => state.groupPost.loading);
  const { id } = useParams();
  const groupAdmin = groups.user;
  console.log(groupPost);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getOneGroups(id));
    dispatch(postInGroupById(id));
  }, []);

  return (
    <div>
      <GroupHeader />
      <div className={styles.groupBody}>
        <div className={styles.groupsMain}>
          {userId == groupAdmin ? <GroupPoster /> : null}
          <div>
            {groupPost.length == 0 ? (
              <div>Нет постов</div>
            ) : (
              <div>
                {groupPost.map((post) => {
                  return (
                    <div className={styles.Post}>
                      <div >
                        <div className={styles.postHeader}>
                        <img
                          src={
                            groups.image
                              ? `http://localhost:4000/${groups.image}`
                              : noimage
                          }
                          alt=""
                        />{" "}
                        <h3>{groups.name}<div className={styles.datePost}><span>{post.date.split("T").join(" ").slice(0, 16)}</span></div></h3>{" "}
                        </div>
                        
                      </div>
                      <span className={styles.postText}>{post.text}</span>
                      <div>
                        {post.image.map((image) => {
                          return (
                            <img
                              className={styles.postImage}
                              src={`http://localhost:4000/${image.path}`}
                              alt=""
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className={styles.leftSideber}>
          <GroupDiscription />
          <GroupFollowers />
        </div>
      </div>
    </div>
  );
};

export default GroupMore;
