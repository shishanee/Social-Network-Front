import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from "./Group.module.scss"
import desc from "../../../public/descrip.svg";


function GroupDiscription() {
    const groups = useSelector((state) => state.group.group);
    const { id } = useParams();
    const filterGroup = groups.find((i) => i._id === id);

  return (
    <div className={styles.desc}>
            <span className={styles.blockName}>Описание</span>
            <div className={styles.desc_info}>
              <div>
                <img src={desc} alt="" />{" "}
              </div>
              <span>
                {filterGroup.discription
                  ? filterGroup.discription.split("").slice(0, 60).join("") +
                    (filterGroup.discription.length < 60 ? "" : "...")
                  : "Нет добавленного описания"}
              </span>
            </div>
          </div>
  )
}

export default GroupDiscription