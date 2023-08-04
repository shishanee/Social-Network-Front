import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { oneDialog } from "../../features/dialogSlice";
import { RootState } from "../../app/store";
import styles from "./OneChat.module.scss";
import { parseJWT } from "../../helpers/parseJWT";
import noimage from "../../../public/noimage.png";
import arrow from "../../../public/left-arrow (1).png";
import enter from "../../../public/send-message.png";

const OneChat: React.FC = (): JSX.Element => {
  const chat = useSelector((state: RootState) => state.dialog.oneChat);
  const loading = useSelector((state: RootState) => state.dialog.loading);
  const token = useSelector((state: RootState) => state.application.token);
  const [text, setText] = useState<string>("");
  const tokenId = parseJWT(token).id;

  const handleMessage = (e) => {
    setText(e.target.value);
  };

  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(oneDialog(id));
  }, []);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/messages");
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
                console.log(one);
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
        <img src={enter} alt="" />
      </div>
    </div>
  );
};

export default OneChat;
