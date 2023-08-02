import myProfile from "../../../public/my_profile.svg"
import news from "../../../public/news.svg"
import message from "../../../public/message.svg"
import call from "../../../public/callSidebar.svg"
import friends from "../../../public/friends.svg"
import group from "../../../public/group.svg"
import photos from "../../../public/photos.svg"
import musics from "../../../public/headphones_FILL0_wght400_GRAD0_opsz48.svg"
import videos from "../../../public/videos.svg"
import clips from "../../../public/clips.svg"
import styles from "./Sidebar.module.scss"
import { Link } from "react-router-dom"
import BtnScrollUp from "../BtnScrollUp/BtnScrollUp"


function Sidebar() {
  return (

    <div className={styles.siderbar}>
        <BtnScrollUp/>
        <ol>
            <li><Link to="#"><img src={myProfile} alt="" /><span>Моя страница</span></Link></li>
            <li><Link to="/"> <img src={news} alt="" />Новости </Link></li>
            <li><Link to="#"> <img src={message} alt="" />Мессенджер</Link></li>
            <li><Link to="#"> <img src={call} alt="" />Звонки</Link></li>
            <li><Link to="#"> <img src={friends} alt="" />Друзья</Link></li>
            <li><Link to="/group"> <img src={group} alt="" />Сообщества</Link></li>
            <li><Link to="#"> <img src={photos} alt="" />Фотографии</Link></li>
            <li><Link to="#"> <img src={musics} alt="" />Музыка</Link></li>
            <li><Link to="#"> <img src={videos} alt="" />Видео</Link></li>
            <li><Link to="#"> <img src={clips} alt="" />Закладки</Link></li>
        </ol>
    </div>
  )
}

export default Sidebar