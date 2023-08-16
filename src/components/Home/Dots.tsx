import React, { useState } from "react";
import styles from "./Home.module.scss";
import { useDispatch } from "react-redux";
import { GetUserFavorite, addFavorit } from "../../features/userSlice";
import { AppDispatch } from "../../app/store";

const Dots: React.FC = ({ postId }): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>()
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleAddFavorite = (id)=>{
    dispatch(addFavorit(id))
    location.reload()
  }


  const handleBlur = () => {
    setTimeout(() => {
      setOpen(false);
    }, 140);
  };

  return (
    <div>
      <button
        onBlur={handleBlur}
        onClick={handleOpen}
        className={styles.moreButton}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="more_horizontal_24__Page-2"
            stroke="none"
            stroke-width="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="more_horizontal_24__more_horizontal_24">
              <path id="more_horizontal_24__Bounds" d="M24 0H0v24h24z"></path>
              <path
                d="M18 10a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2Zm-6 4a2 2 0 0 1-2-2c0-1.1.9-2 2-2a2 2 0 0 1 2 2 2 2 0 0 1-2 2Zm-6 0a2 2 0 0 1-2-2c0-1.1.9-2 2-2a2 2 0 0 1 2 2 2 2 0 0 1-2 2Z"
                id="more_horizontal_24__Mask"
                fill="#929292"
              ></path>
            </g>
          </g>
        </svg>
      </button>
      {open ? (
        <div className={styles.popUp}>
          <button onClick={()=>handleAddFavorite(postId)} >Сохранить в закладках</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Dots;

