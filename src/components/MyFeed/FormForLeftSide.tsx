import React from "react";
import styles from "./MyFeed.module.scss";
import PhotoSvg from "./PhotoSvg";
import noimage from "../../../public/noimage.png";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
const FormForLeftSide: React.FC = ({
  handleClick,
  text,
  handleChange,
  handleChangeFile,
}):JSX.Element => {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <form onSubmit={handleClick} className={styles.post}>
      <div>
        <img
          src={!user.image ? noimage : `http://localhost:4000/${user.image}`}
          alt=""
        />

        <input
          value={text}
          onChange={handleChange}
          type="text"
          placeholder="Что у вас нового?"
        />
      </div>
      <div>
        <input
          className={styles.inputM}
          id="file"
          onChange={handleChangeFile}
          type="file"
          multiple
        />
        <label htmlFor="file">
          <PhotoSvg />
        </label>
      </div>
    </form>
  );
};

export default FormForLeftSide;
