import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styles from "./Group.module.scss";
import GroupPoster from "./groupPoster";
import GroupHeader from "./GroupHeader";
import GroupDiscription from "./GroupDiscription";
import GroupFollowers from "./GroupFollowers";

const GroupMore: React.FC = (): JSX.Element => {
  const userId = useSelector((state) => state.user.user._id);
  const groups = useSelector((state) => state.group.group);
  const { id } = useParams();
  const filterGroup = groups.find((i) => i._id === id);
  const groupAdmin = filterGroup.user;
  const followers = filterGroup.followers;
  const [popUp, setPopUp] = useState(false);

  console.log(groupAdmin == userId);

  // const handlePopOpen = () => {
  //   setPopUp(true);
  // };
  // const handlePopClose = () => {
  //   setPopUp(false);
  // };

  return (
    <div>
      <GroupHeader/>
      <div className={styles.groupBody}>
        {userId == groupAdmin ? (
          <GroupPoster/>
        ) : null}
        <div>
          <div className={styles.posts}></div>
          <GroupDiscription/>
          <GroupFollowers/>
          </div>
        </div>
      </div>
  );
};

export default GroupMore;

{
  /* <div className={styles.favorite_main}>
          <div className={styles.favorite}>
            <span>
              <img
                src={
                  filterGroup.image
                    ? `http://localhost:4000/${filterGroup.image}`
                    : noimage
                }
                alt=""
              />{" "}
              <p>
                {filterGroup.name}<span>27.05.23</span>
              </p>{" "}
              <span
                className={styles.popUp}
                onMouseMove={handlePopOpen}
                onMouseOut={handlePopClose}
              >
                . . .
              </span>
            </span>
            {popUp ? (
              <div
                className={styles.Pop}
                onMouseMove={handlePopOpen}
                onMouseOut={handlePopClose}
              >
                {" "}
                <span>Удалить из закладок</span>
              </div>
            ) : null}
            <p>
              ⚡ Нэйт Диаз и Джейк Поул провели стердаун перед боксерским
              поединком (5 августа)
            </p>
            <img
              className={styles.postImg}
              src="https://sun61-1.userapi.com/impg/Qt_a7pYakmos38Bv3GhQPBWi1JDM07IsZvYHoA/QVUin7qYg_s.jpg?size=829x841&quality=95&sign=3fac12426cb1e9a2fd5387e222ba37fe&type=album"
              alt=""
            />
          </div>
        </div> */
}
