import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import logo from "../../../public/letter-i.png";
import search from "../../../public/loupe.png";
import down from "../../../public/down-arrow (2).png";
import bell from "../../../public/bell.png";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { Link } from "react-router-dom";
import addUser from "../../../public/add-user (1).png";
import unFollow from "../../../public/add-friend (1).png";
import noimage from "../../../public/noimage.png";
import setting from "../../../public/setting.svg";
import signOut from "../../../public/sigOut.svg";
import tema from "../../../public/tema.svg";
import { authSignOut } from "../../features/applicationSlice";
import { deleteUser, followUser, oneUser } from "../../features/userSlice";
import { parseJWT } from "../../helpers/parseJWT";
import { onePeopleImages } from "../../features/imageSlice";

const Header: React.FC = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user.user);
  const token = useSelector((state: RootState) => state.application.token);
  const users = useSelector((state: RootState) => state.user.users);
  const group = useSelector((state: RootState) => state.group.group);
  const [open, setOpen] = useState<boolean>(false);
  const [modal, setModal] = useState(false);

  const tokenId = parseJWT(token).id;

  const dispatch = useDispatch<AppDispatch>();

  const [searchUser, setSearchUser] = useState<string>("");

  const findUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUser(e.target.value);
  };
  const handleClick = () => {
    setOpen(true);
  };

  const newUsersOne = users.filter((item) => item._id !== tokenId);

  const newUsers = newUsersOne.filter((item) => {
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
    setModal(!modal);
  };

  const signout = () => {
    dispatch(authSignOut());
  };

  const handleFollow = (id) => {
    dispatch(followUser(id));
    location.reload();
  };

  const handleCheck = (id) => {
    dispatch(oneUser(id));
    setOpen(false);
    dispatch(onePeopleImages(id));
  };

  const deleteFollow = (id) => {
    dispatch(deleteUser(id));
    location.reload();
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoAndSearch}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
            <Link to="/">
              <h3>INTO.com</h3>
            </Link>
          </div>
          <img className={styles.bell} src={bell} alt="" />
          <div className={styles.search}>
            <input
              onMouseMove={() => setOpen(true)}
              onChange={findUser}
              onClick={handleClick}
              value={searchUser}
              type="text"
              placeholder="Поиск"
            />
            <img src={search} alt="" />
          </div>
          {open && (
            <div
              onMouseLeave={() => setOpen(false)}
              className={styles.modalUsers}
            >
              <h5>Люди</h5>
              {newUsers.slice(0, 3).map((item) => {
                return (
                  <div className={styles.oneUser}>
                    <div className={styles.userFirstBlock}>
                      <img
                        src={
                          !item.image
                            ? noimage
                            : `http://localhost:4000/${item.image}`
                        }
                        alt=""
                      />
                      <div>
                        <Link
                          onClick={() => handleCheck(item._id)}
                          to={`/people/${item._id}`}
                        >{`${item.firstName} ${item.lastName}`}</Link>
                        <p>{item.followers.length} followers</p>
                      </div>
                    </div>
                    <div>
                      {item.followers == tokenId ? (
                        <button className={styles.buttonFollow}>
                          <img
                            onClick={() => deleteFollow(item._id)}
                            src={unFollow}
                          />
                        </button>
                      ) : (
                        <button className={styles.buttonFollow}>
                          <img
                            onClick={() => handleFollow(item._id)}
                            src={addUser}
                          />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
              <div>
                <h5>Группы</h5>
                {groups.slice(0, 3).map((item) => {
                  return (
                    <div className={styles.oneUser}>
                      <div className={styles.userFirstBlock}>
                        <img
                          src={
                            !item.image
                              ? noimage
                              : `http://localhost:4000/${item.image}`
                          }
                          alt=""
                        />
                        <div>
                          <Link onClick={() => setOpen(false)} to={item._id}>
                            {item.name}
                          </Link>
                          <p>{item.followers.length} followers</p>
                        </div>
                      </div>
                      <button className={styles.buttonFollow}>
                        <img src={addUser} />
                      </button>
                    </div>
                  );
                })}
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
          {modal ? (
        <div className={styles.modal_window}>
          <Link to={"/myFeed"}>
            <div className={styles.modal_profile}>
              <img
                className={styles.imgProfil}
                src={
                  user.image ? `http://localhost:4000/${user.image}` : noimage
                }
                alt=""
              />
              {`${user.firstName} ${user.lastName}`}
            </div>
          </Link>
          <Link to={"/edit"}>
            <div className={styles.div}>
              <img src={setting} alt="" />
              <span>Редактировать профиль</span>
            </div>
          </Link>
          <div className={styles.div}>
            <img src={tema} alt="" />
            <span>Тема</span>
          </div>
          <div className={styles.div} onClick={signout}>
            <img src={signOut} alt="" />
            <Link to={"/login"}>Выйти</Link>
          </div>
        </div>
      ) : null}
        </div>
        
      </header>
      
    </>
  );
};

export default Header;
