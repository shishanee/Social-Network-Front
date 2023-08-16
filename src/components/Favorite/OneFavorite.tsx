import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { deleteFavorite } from '../../features/userSlice';
import icon from "../../../public/noimage.png";
import { AppDispatch } from '../../app/store';
import styles from "./Favorite.module.scss";
import LikesAndComments from '../Home/LikesAndComments';



const OneFavorite = (props) => {
    const [popUp, setPopUp] = useState(false);

  const dispatch = useDispatch<AppDispatch>()
  const handlePopOpen = () => {
    setPopUp(!popUp)
  }  

  const handleDelete = (id) =>{
    dispatch(deleteFavorite(id))
    location.reload()
  }
    return (
        <div className={styles.favorite}>
        <span>
          <img className={styles.imgUser} src={props.userImage ? `http://localhost:4000/${props.userImage}` : icon } alt="" />{" "}
          <p>
           {`${props.firstName} ${props.lastName}` }<span>{props.data}</span>
          </p>
          <span
            className={styles.popUp}
            onClick={handlePopOpen}
          >
            . . .{popUp ? (
          <div
            className={styles.Pop}
            onClick={handlePopOpen}
          >
            <span onClick={()=>handleDelete(props.id)} >Удалить из закладок</span>
          </div>
        ) : null}
          </span> 
        </span>
       
        <p>
          {/* ⚡ Нэйт Диаз и Джейк Поул провели стердаун перед боксерским поединком
          (5 августа) */}
          {props.text}
        </p>
        <img
          className={styles.postImg}
          src={`http://localhost:4000/${props.image}`}
          alt=""
        />
      </div>)
    
        }

export default OneFavorite
