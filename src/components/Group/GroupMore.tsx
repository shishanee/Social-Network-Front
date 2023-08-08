import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./Group.module.scss";
import noimage from "../../../public/noimage.png";

const GroupMore: React.FC = (): JSX.Element => {
  const groups = useSelector((state) => state.group.group);
  const { id } = useParams();

  const filterGroup = groups.filter((i) => i._id === id);

  return (
    <div>
      {filterGroup.map((item) => {
        return (
          <>
            <div className={styles.groupHeader}>
              <img
                src={
                  item.image ? `http://localhost:4000/${item.image}` : noimage
                }
                alt=""
              />
              <h3>{item.name}</h3>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default GroupMore;
