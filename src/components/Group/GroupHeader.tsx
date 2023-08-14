import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import noimage from "../../../public/noimage.png"
import styles from "./Group.module.scss"

function GroupHeader() {
    const groups = useSelector((state) => state.group.group);
    const { id } = useParams();
    const filterGroup = groups.find((i) => i._id === id);
    

  return (
    <div className={styles.groupPage}>
        <div className={styles.groupHeader}>
          <img
            src={
              filterGroup.image
                ? `http://localhost:4000/${filterGroup.image}`
                : noimage
            }
            alt=""
          />
          <h3>{filterGroup.name}</h3>
        </div>
      </div>
  )
}

export default GroupHeader