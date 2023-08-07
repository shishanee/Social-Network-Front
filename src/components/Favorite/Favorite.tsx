import styles from "./Favorite.module.scss"
import icon from "../../../public/noimage.png"
import { useState } from "react"

function Favorite() {
const [popUp, setPopUp] = useState(false);

const handlePopOpen = () => {
  setPopUp(true)
}  
const handlePopClose = () => {
  setPopUp(false)
}

  return (
    <div className={styles.favorite_main}>
     <h3>Все закладки</h3>
     <div className={styles.favorite}>
        <span><img src={icon} alt="" /> <p>REDFURYMMA<span>27.05.23</span></p> <span className={styles.popUp} onMouseMove={handlePopOpen} onMouseOut={handlePopClose}>.  .  .</span></span>{
          popUp ? <div className={styles.Pop} onMouseMove={handlePopOpen} onMouseOut={handlePopClose}> <span>Удалить из закладок</span></div> : null
        }
          <p>⚡ Нэйт Диаз и Джейк Поул провели стердаун перед боксерским поединком (5 августа)</p>
          <img className={styles.postImg} src="https://sun61-1.userapi.com/impg/Qt_a7pYakmos38Bv3GhQPBWi1JDM07IsZvYHoA/QVUin7qYg_s.jpg?size=829x841&quality=95&sign=3fac12426cb1e9a2fd5387e222ba37fe&type=album" alt="" />
          
     </div>
    </div>
  )
}

export default Favorite