import React, { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../../public/letter-d (1).png";
import search from "../../../public/loupe.png";
import down from "../../../public/down-arrow (2).png";
import bell from "../../../public/bell.png";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { Link } from "react-router-dom";
import addUser from "../../../public/add-user (1).png";
import noimage from "../../../public/noimage.png"
import setting from "../../../public/setting.svg"
import signOut from "../../../public/sigOut.svg"
import tema from "../../../public/tema.svg"
import { authSignOut } from "../../features/applicationSlice";

const Header: React.FC = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user.user);
  const token = useSelector((state: RootState) => state.application.token);
  const users = useSelector((state: RootState) => state.user.users);
  const group = useSelector((state: RootState) => state.group.group);
  const [open, setOpen] = useState<boolean>(false);
  const [modal, setModal] = useState(false)

  const dispatch = useDispatch<AppDispatch>();

  const [searchUser, setSearchUser] = useState<string>("");

  const findUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUser(e.target.value);
  };
  const handleClick = () => {
    setOpen(true);
  };

  const newUsers = users.filter((item) => {
    if (item.firstName.toLowerCase().includes(searchUser.toLowerCase())) {
      return item;
    }
  });

  const groups = group.filter((item) => {
    if (item.name.toLowerCase().includes(searchUser.toLowerCase())) {
      return item;
    }
  });

  const handleModal = () => {
    setModal(!modal)
  }
  
  const signout = () => {
    dispatch(authSignOut())
  }
  return (
    <>
    <header className={styles.header}>
      <div className={styles.logoAndSearch}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
          <Link to="/">
            <h3>DICAR</h3>
          </Link>
        </div>
        <img className={styles.bell} src={bell} alt="" />
        <div className={styles.search}>
          <input
            onChange={findUser}
            onClick={handleClick}
            value={searchUser}
            type="text"
            placeholder="Поиск"
            />
          <img src={search} alt="" />
        </div>
        {open && (
          <div className={styles.modalUsers}>
            <h5>Люди</h5>
            {newUsers.slice(0, 3).map((item) => {
              return (
                <div className={styles.oneUser}>
                  <div className={styles.userFirstBlock}>
                    <img src={!item.image ? noimage :`http://localhost:4000/${item.image}`} alt="" />
                    <div>
                      <Link
                        to={item._id}
                        >{`${item.firstName} ${item.lastName}`}</Link>
                      <p>{item.friends.length} followers</p>
                    </div>
                  </div>
                  <button className={styles.buttonFollow}>
                    <img src={addUser} />
                  </button>
                </div>
              );
            })}
            <div className={styles.hr}></div>
            <div>
              <h5>Группы</h5>
              {groups.slice(0, 3).map((item) => {
                return (
                  <div className={styles.oneUser}>
                    <div className={styles.userFirstBlock}>
                      <img src={!item.image ? noimage:`http://localhost:4000/${item.image}`} alt="" />
                      <div>
                        <Link to={item._id}>{item.name}</Link>
                        <p>{item.followers.length} followers</p>
                      </div>
                    </div>
                    <button className={styles.buttonFollow}>
                      <img src={addUser} />
                    </button>
                  </div>
                );
              })}
              <div className={styles.hr}></div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.profile} onClick={handleModal}>
        {token && (
          <img
          src={user.image ? `http://localhost:4000/${user.image}` : noimage}
          alt=""
          />
          )}
        <img className={styles.down} src={down} alt="" />
      </div>
    </header>
      {modal ? (
        <div className={styles.modal_window}>
          <Link to={"/myFeed"}>
            <div className={styles.modal_profile}>
              <img className={styles.imgProfil}
                src={
                  user.image ? `http://localhost:4000/${user.image}` : noimage
                }
                alt=""
              />
              {`${user.firstName} ${user.lastName}`}
            </div>
          </Link>
          <div className={styles.div}>
            <img src={setting} alt="" />
            <span>Настройки</span>
          </div>
          <div className={styles.div}>
            <img src={tema} alt="" />
            <span>Тема</span>
          </div>
          <div className={styles.div} onClick={signout}>
            <img src={signOut} alt="" />
            <span>Выйти</span>
          </div>
        </div>
      ) : null}
          </>
  );
};

export default Header;
