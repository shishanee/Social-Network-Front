import React, { useState } from "react";
import { videos } from "./videos.js";
import ModalVideo from "./ModalVideo.js";
import styles from "./Video.module.scss";
import loupe from "../../../public/loupe.png";

const AllVideos: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const handleClick = (url) => {
    setOpen(true);
    setText(url);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filtred = videos.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <div className={styles.inputBlock}>
        <img src={loupe} alt="" />
        <input
          value={search}
          onChange={handleChange}
          type="text"
          placeholder="Поиск видео"
        />
      </div>
      <div className={styles.videos}>
        {filtred.map((item) => (
          <div className={styles.oneVideo} key={item.url}>
            <video
              onClick={() => handleClick(item.url)}
              width={280}
              height={160}
              src={item.url}
            ></video>
            <p>{item.name}</p>
          </div>
        ))}
        {open && <ModalVideo text={text} setOpen={setOpen} />}
      </div>
    </div>
  );
};

export default AllVideos;
