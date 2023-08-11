import React from "react";
import styles from "./OnePeople.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import noimage from "../../../public/noimage.png";
import { useNavigate } from "react-router-dom";

const Groups: React.FC = (): JSX.Element => {
  const group = useSelector((state: RootState) => state.user.oneUserGroup);
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/group/${id}`);
    location.reload();
  };
  return (
    <div className={styles.followersBlock}>
      <div className={styles.followBlock}>
        <h4>Сообщества</h4>
        <p>{group.length}</p>
      </div>
      <div className={styles.people}>
        {group.slice(0, 3).map((item) => {
          return (
            <div className={styles.oneFollow}>
              <img
                src={
                  !item.image ? noimage : `http://localhost:4000/${item.image}`
                }
                alt=""
              />
              <p onClick={() => handleClick(item._id)}>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Groups;
