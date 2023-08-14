import React, { useState } from "react";
import styles from "./ModalOnePeople.module.scss";
import close from "../../../public/close.png";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import noimage from "../../../public/noimage.png";
import { addMessage } from "../../features/dialogSlice";

const ModalOnePeople: React.FC = ({ open, setOpen }): JSX.Element => {
  const user = useSelector((state: RootState) => state.user.oneUser);
  const dialogId = useSelector((state: RootState) => state.dialog.dialogId);
  const [text, setText] = useState<string>("");
  const messageChange = (e) => {
    setText(e.target.value);
  };
  const dispatch = useDispatch<AppDispatch>();

  const id = dialogId._id
  const addMes = () => {
    dispatch(addMessage({ id, text }));
    setText("");
    setOpen(false);
    location.reload();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <div className={styles.send}>
          <p>Новое сообщение</p>
          <button onClick={() => setOpen(false)}>
            <img src={close} alt="" />
          </button>
        </div>
        <div className={styles.hr}></div>
        <div className={styles.people}>
          <img
            src={!user.image ? noimage : `http://localhost:4000/${user.image}`}
            alt=""
          />
          <div>
            <h5>{`${user.firstName} ${user.lastName}`}</h5>
            <h6>был в сети недавно</h6>
          </div>
        </div>
        <div className={styles.area}>
          <textarea onChange={messageChange} value={text}></textarea>
        </div>
        <div className={styles.buttonBlock}>
          <button onClick={addMes} className={styles.buttonMessage}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalOnePeople;
