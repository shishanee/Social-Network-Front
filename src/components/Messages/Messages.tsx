import React from "react";
import styles from "./Message.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { parseJWT } from "../../helpers/parseJWT";
import noimage from "../../../public/noimage.png";
import { mounthCheck } from "../../helpers/mounthCheck.js";
import { useNavigate } from "react-router-dom";

const Messages: React.FC = (): JSX.Element => {
  const dialog = useSelector((state: RootState) => state.dialog.dialog);
  const token = useSelector((state: RootState) => state.application.token);
  const tokenId = parseJWT(token).id;
  const filtred = dialog.filter((item) => {
    if (tokenId === item.you._id) {
      return item;
    }
  });

  const filtred1 = dialog.filter((item) => {
    if (tokenId === item.user._id) {
      return item;
    }
  });

  const navigate = useNavigate();
  const linkToChat = (id) => {
    navigate(id);
  };

  return (
    <div className={styles.messageMain}>
      <div className={styles.inputBlock}>
        <input type="text" placeholder="Поиск" />
        <div className={styles.hr}></div>
      </div>
      <div className={styles.dialogsBlock}>
        {filtred.map((item) => {
          return (
            <div>
              {item.messages.length !== 0 && (
                <div
                  onClick={() => linkToChat(item._id)}
                  className={styles.oneChat}
                >
                  <>
                    <div
                      className={styles.firstBlock}
                      onClick={() => linkToChat(item._id)}
                    >
                      <img
                        className={styles.oneChatImage}
                        src={
                          !item.user.image
                            ? noimage
                            : `http://localhost:4000/${item.user.image}`
                        }
                        alt=""
                      />
                      <div>
                        <h5>{`${item.user.firstName} ${item.user.lastName}`}</h5>

                        <p>{item.messages.at(-1).text}</p>
                      </div>
                    </div>

                    <p>
                      {item.messages.at(-1).date.slice(8, 10)}{" "}
                      {mounthCheck(item.messages.at(-1).date.slice(5, 7))}
                    </p>
                  </>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div>
        {filtred1.map((item) => {
          return (
            <div>
              {item.messages.length !== 0 && (
                <div
                  onClick={() => linkToChat(item._id)}
                  className={styles.oneChat}
                >
                  <>
                    <div className={styles.firstBlock}>
                      <img
                        src={
                          !item.you.image
                            ? noimage
                            : `http://localhost:4000/${item.you.image}`
                        }
                        alt=""
                      />
                      <div>
                        <h5>{`${item.you.firstName} ${item.you.lastName}`}</h5>
                        <p>{item.messages.at(-1).text}</p>
                      </div>
                    </div>
                    <p>
                      {item.messages.at(-1).date.slice(8, 10)}{" "}
                      {mounthCheck(item.messages.at(-1).date.slice(5, 7))}
                    </p>
                  </>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Messages;
