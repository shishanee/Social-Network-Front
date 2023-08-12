import React, { useState } from "react";
import styles from "./CommentPage.module.scss";
import PhotoSvg from "./PhotoSvg";
import { useDispatch } from "react-redux";
import { createComment, deleteComment } from "../../features/commentsSlice";

const InputForComments: React.FC = ({ user, postId }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [image, setImage] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleChangeFile = (e) => {
    setImage(e.target.files);
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(createComment({text, image, postId}))
    setText('')
  };


  return (
    <div className={styles.inputBlock}>
      <img src="https://i.ibb.co/qJBKH3D/Abdurrahman.jpg" alt="" />
      <div>
        <textarea
          onChange={handleChange}
          value={text}
          id="file"
          type="text"
          placeholder="Написать комментарий..."
        />
        {/* <input width={"1px"} id="file" type="text" /> */}
        <label  htmlFor="file">
          <PhotoSvg />
        </label>
      </div>
      <button 
      onClick={handleClick}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="send_24__Page-2"
            stroke="none"
            stroke-width="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="send_24__send_24">
              <path id="send_24__Rectangle-76" d="M0 0h24v24H0z"></path>
              <path
                d="M5.74 15.75a39.14 39.14 0 0 0-1.3 3.91c-.55 2.37-.95 2.9 1.11 1.78 2.07-1.13 12.05-6.69 14.28-7.92 2.9-1.61 2.94-1.49-.16-3.2C17.31 9.02 7.44 3.6 5.55 2.54c-1.89-1.07-1.66-.6-1.1 1.77.17.76.61 2.08 1.3 3.94a4 4 0 0 0 3 2.54l5.76 1.11a.1.1 0 0 1 0 .2L8.73 13.2a4 4 0 0 0-3 2.54Z"
                id="send_24__Mask"
                fill="#828282"
              ></path>
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default InputForComments;
