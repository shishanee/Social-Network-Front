import { useDispatch, useSelector } from "react-redux";
import styles from "./Group.module.scss";
import { Link, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../app/store";
import { useState } from "react"
import icon from "../../../public/letter-d.png"
import { postGroup } from "../../features/groupSlice";
import noimage from "../../../public/noimage.png"

const Group: React.FC = (): JSX.Element => {
  const group = useSelector((state: RootState) => state.group.group);
  const [createGroup, setCreateGroup] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState(""); 

  const dispatch = useDispatch<AppDispatch>();

  const handleCreateGroup = () => {
    dispatch(postGroup({ groupName, groupDescription, userId }))
  }
  
  const userId = useSelector((state) => state.user.user._id)
  
  
  
  const changeGroupName = (e) => {
    setGroupName(e.target.value)
  }

  const changeDescrition = (e) => {
    setGroupDescription(e.target.value)
    
  }
 
  const handleGroupModal = () => {
    setCreateGroup(true)
  }
  const handleCloseModal = () => {
    setCreateGroup(false)
  }

  return (
    <div className={styles.group}>
      {
        createGroup ? 
        <div className={styles.modal_main}>
          <div className={styles.createGroupModal}>
          <div className={styles.createGroup}>
             <img src={icon} alt="" />
             <span>DICAR GROUPS</span>
          </div>
          <div className={styles.groups_redactor}>
              <h3>Создай свое сообщество</h3>
              <input type="text" onChange={changeGroupName} value={groupName} placeholder="Название группы" /><br />
              <textarea placeholder="Описание группы" value={groupDescription} onChange={changeDescrition} cols="71" rows="10"></textarea>
              <button onClick={handleCreateGroup}>Продолжить</button>
          </div>
          <span className={styles.closeModal} onClick={handleCloseModal}>
          ✕
        </span>
        </div> 
        
          </div>
        : null
      }
      <div className={styles.buttons}>
        <div className={styles.firstLinks}>
          <button>
            Все сообщества <p>{group.length}</p>
          </button>
          <button>Управление</button>
        </div>
        <button className={styles.createBut} onClick={handleGroupModal}>Создать сообщество</button>
      </div>
      <div>
        <input type="text" placeholder="Поиск сообществ" />
      </div>
      <div className={styles.groupsMain}>
        {group.map((item) => {
          return (
            <div>
              <div className={styles.oneGroup}>
                <div className={styles.groupName}>
                  <img
                    src={item.image ?`http://localhost:4000/${item.image}` : noimage}
                    alt=""
                  />
                  <div>
                    <Link to={`/group/${item._id}`}>{item.name}</Link>
                    <h5>{item.followers.length} участников</h5>
                  </div>
                </div>
                <button className={styles.followButton}>Подписаться</button>
              </div>
              <div className={styles.hr}></div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Group;
