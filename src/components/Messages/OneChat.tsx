import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  addMessage,
  deleteDialog,
  oneDialog,
} from "../../features/dialogSlice";
import { AppDispatch, RootState } from "../../app/store";
import styles from "./OneChat.module.scss";
import { parseJWT } from "../../helpers/parseJWT";
import noimage from "../../../public/noimage.png";
import arrow from "../../../public/left-arrow (1).png";
import enter from "../../../public/send-message.png";
import more from "../../../public/more.png";
import trash from "../../../public/trash.png";
import mute from "../../../public/mute.png";

const OneChat: React.FC = (): JSX.Element => {
  const chat = useSelector((state: RootState) => state.dialog.oneChat);
  const token = useSelector((state: RootState) => state.application.token);
  const [text, setText] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const tokenId = parseJWT(token).id;

  const handleMessage = (e) => {
    setText(e.target.value);
  };
  const addMes = () => {
    dispatch(addMessage({ id, text }));
    setText("");
  };
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(oneDialog(id));
  }, []);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/messages");
  };

  const handleDelete = (id) => {
    dispatch(deleteDialog(id));
    navigate("/messages");
    location.reload();
  };
  return (
    <div className={styles.chatMain}>
      <div className={styles.firstBlock}>
        {chat.map((item) => {
          return (
            <>
              <div onClick={handleBack} className={styles.back}>
                <img src={arrow} alt="" />
                <p to={"/messages"}> Назад</p>
              </div>
              <div className={styles.online}>
                <h4>
                  {tokenId === item.you._id
                    ? `${item.user.firstName} ${item.user.lastName}`
                    : `${item.you.firstName} ${item.you.lastName}`}
                </h4>

                <p>был в сети недавно</p>
              </div>
              <img
                onClick={() => setOpen(!open)}
                className={styles.moreButton}
                src={more}
                alt=""
              />
              {open && (
                <div className={styles.popUp}>
                  <div
                    onClick={() => handleDelete(item._id)}
                    className={styles.links}
                  >
                    <img src={trash} alt="" />
                    <p>Удалить чат у всех</p>
                  </div>
                  <div className={styles.links}>
                    <img src={mute} alt="" />
                    <p>Отключить уведомления</p>
                  </div>
                </div>
              )}
              <img
                className={styles.profileImage}
                src={
                  !item.you.image || !item.user.image
                    ? noimage
                    : tokenId === item.you._id
                    ? `http://localhost:4000/${item.user.image}`
                    : `http://localhost:4000/${item.you.image}`
                }
                alt=""
              />
            </>
          );
        })}
      </div>
      <div className={styles.hr}></div>
      <div className={styles.chatMessage}>
        {chat.map((item) => {
          return (
            <div>
              {item.messages.map((one) => {
                return (
                  <div className={styles.oneBlockMessage}>
                    <img
                      src={
                        !one.sender.image
                          ? noimage
                          : `http://localhost:4000/${one.sender.image}`
                      }
                      alt=""
                    />
                    <div>
                      <div className={styles.blockName}>
                        <h5>{one.sender.firstName}</h5>
                        <p>{one.date.slice(11, 16)}</p>
                      </div>
                      <p className={styles.textPar}>{one.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className={styles.inputBlock}>
        <input
          onChange={handleMessage}
          value={text}
          type="text"
          placeholder="Напишите сообщение..."
        />
        <img onClick={addMes} src={enter} alt="" />
      </div>
    </div>
  );
};

export default OneChat;
