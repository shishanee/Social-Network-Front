import React from "react";
import { useSelector } from "react-redux";
import noimage from "../../../public/noimage.png";
import styles from "./Group.module.scss";
import { RootState } from "../../app/store";

const GroupHeader:React.FC = ():JSX.Element => {
  const groups = useSelector((state:RootState) => state.group.oneGroup);

  return (
    <div className={styles.groupPage}>
      <div className={styles.groupHeader}>
        <img
          src={
            groups.image
              ? `http://localhost:4000/${groups.image}`
              : noimage
          }
          alt=""
        />
        <h3>{groups.name}</h3>
      </div>
    </div>
  );
}

export default GroupHeader;
