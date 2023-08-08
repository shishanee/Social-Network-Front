import { useDispatch, useSelector } from "react-redux";
import styles from "./Group.module.scss";
import { AppDispatch, RootState } from "../../app/store";
import { useState } from "react";
import icon from "../../../public/letter-d.png";
import { postGroup } from "../../features/groupSlice";
import noimage from "../../../public/noimage.png";
import GroupCard from "./GroupCard";

const Group: React.FC = (): JSX.Element => {
  const group = useSelector((state: RootState) => state.group.group);
  const [createGroup, setCreateGroup] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");

  const userId = useSelector((state) => state.user.user._id);

  const dispatch = useDispatch<AppDispatch>();

  const handleCreateGroup = () => {
    dispatch(postGroup({ groupName, groupDescription, userId }));
    setCreateGroup(false);
  };

  const changeGroupName = (e) => {
    setGroupName(e.target.value);
  };

  const changeDescrition = (e) => {
    setGroupDescription(e.target.value);
  };

  const handleGroupModal = () => {
    setCreateGroup(true);
  };
  const handleCloseModal = () => {
    setCreateGroup(false);
  };

  return (
    <div className={styles.group}>
      {createGroup ? (
        <div className={styles.modal_main}>
          <div className={styles.createGroupModal}>
            <div className={styles.createGroup}>
              <img src={icon} alt="" />
            </div>
            <div className={styles.groups_redactor}>
              <h3>Создай свое сообщество</h3>
              <input
                type="text"
                onChange={changeGroupName}
                value={groupName}
                placeholder="Название группы"
              />
              <br />
              <textarea
                placeholder="Описание группы"
                value={groupDescription}
                onChange={changeDescrition}
                cols="70"
                rows="10"
              ></textarea>
              <button onClick={handleCreateGroup}>Продолжить</button>
            </div>
            <span className={styles.closeModal} onClick={handleCloseModal}>
              ✕
            </span>
          </div>
        </div>
      ) : null}
      <div className={styles.buttons}>
        <div className={styles.firstLinks}>
          <button>
            Все сообщества <p>{group.length}</p>
          </button>
          <button>Управление</button>
        </div>
        <button className={styles.createBut} onClick={handleGroupModal}>
          Создать сообщество
        </button>
      </div>
      <div>
        <input type="text" placeholder="Поиск сообществ" />
      </div>
      <div className={styles.groupsMain}>
        {group.map((item) => {
          return (
            <GroupCard
              image={
                !item.image ? noimage : `http://localhost:4000/${item.image}`
              }
              id={item._id}
              name={item.name}
              followers={item.followers}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Group;
