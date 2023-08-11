import React, { useRef } from 'react'
import styles from "./MyFeed.module.scss";
import PhotoSvg from './PhotoSvg';

const FormForLeftSide: React.FC = ({handleClick, text, handleChange, handleChangeFile}) => {
  return (
    <form onSubmit={handleClick} className={styles.post}>
      <div>
        <img src="https://i.ibb.co/qJBKH3D/Abdurrahman.jpg" alt="" />

        <input
          value={text}
          onChange={handleChange}
          type="text"
          placeholder="Что у вас нового?"
        />
        </div>
        <div>
          <input className={styles.inputM} id="file" onChange={handleChangeFile} type="file" multiple />
          <label  htmlFor="file">
            <PhotoSvg />
          </label>
        </div>
      </form>
  )
}

export default FormForLeftSide
