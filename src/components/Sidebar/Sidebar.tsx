import myProfile from "../../../public/my_profile.svg";
import news from "../../../public/news.svg";
import message from "../../../public/message.svg";
import friends from "../../../public/friends.svg";
import group from "../../../public/group.svg";
import photos from "../../../public/photos.svg";
import musics from "../../../public/headphones_FILL0_wght400_GRAD0_opsz48.svg";
import clips from "../../../public/clips.svg";
import styles from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
import BtnScrollUp from "../BtnScrollUp/BtnScrollUp";

const Sidebar: React.FC = (): JSX.Element => {
  return (
    <div className={styles.siderbar}>
      <BtnScrollUp />
      <ol>
        <li>
          <Link to="/myfeed">
            <img src={myProfile} alt="" />
            <span>Моя страница</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            {" "}
            <img src={news} alt="" />
            Новости{" "}
          </Link>
        </li>
        <li>
          <Link to="/messages">
            {" "}
            <img src={message} alt="" />
            Мессенджер
          </Link>
        </li>
        <li>
          <Link to="/friends">
            {" "}
            <img src={friends} alt="" />
            Подписки
          </Link>
        </li>
        <li>
          <Link to="/group">
            {" "}
            <img src={group} alt="" />
            Сообщества
          </Link>
        </li>
        <li>
          <Link to="/image">
            {" "}
            <img src={photos} alt="" />
            Фотографии
          </Link>
        </li>
        <li>
          <Link to="/clips">
            {" "}
            <img src={clips} alt="" />
            Видео
          </Link>
        </li>
        <li>
          <Link to="#">
            {" "}
            <img src={musics} alt="" />
            Музыка
          </Link>
        </li>

        <li>
          <Link to="/favorite">
            {" "}
            <img src={clips} alt="" />
            Закладки
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default Sidebar;
