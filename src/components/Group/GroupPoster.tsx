import React from 'react'
import styles from "./Group.module.scss"
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import noimage from "../../../public/noimage.png"
import PhotoSvg from '../MyFeed/PhotoSvg';

function GroupPoster() {
  
  const filterGroup = useSelector((state) => state.group.oneGroup);
  // const filterGroup = groups.find((i) => i._id === id);

  return (
    <div className={styles.postCreate}>
            <img
              src={
                filterGroup.image
                  ? `http://localhost:4000/${filterGroup.image}`
                  : noimage
              }
              alt=""
            />
            <form>
              <input type="text" placeholder="Что у вас нового?" />
              <label htmlFor="file">
                <PhotoSvg />
              </label>
            </form>
          </div>
  )
}

export default GroupPoster