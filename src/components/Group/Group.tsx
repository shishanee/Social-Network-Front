import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGroups } from "../../features/group.slice";
import styles from "./Group.module.scss";
import { Link } from "react-router-dom";

const Group: React.FC = () => {
  const group = useSelector((state) => state.group.group);
  console.log(group);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGroups());
  }, []);
  return (
    <div className={styles.group}>
      <div>
        <div>
          <button>Все сообщества</button>
          <button>Управление</button>
        </div>
        <button>Создать сообщество</button>
      </div>
      <div>
        <input type="text" placeholder="Поиск сообществ" />
      </div>
      <div className={styles.groupsMain}>
        {group.map((item) => {
          return (
            <div className={styles.oneGroup}>
              <div className={styles.groupName}>
                <img
                  src="https://grozny.tv/storage/images/27b10e7d-9d8f-4f6e-a612-865147245920.jpg"
                  alt=""
                />
                <div>
                  <Link to="#">{item.name}</Link>
                  <h5>{item.followers.length} участников</h5>
                </div>
              </div>
              <button>Подписаться</button>
            </div>
          );
        })}
        <div className={styles.hr}></div>
        {/* <hr /> */}
      </div>
    </div>
  );
};

export default Group;
