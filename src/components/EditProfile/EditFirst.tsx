import React, { useState } from "react";
import styles from "./Edit.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeUser, editImage } from "../../features/userSlice";
import noimage from "../../../public/noimage.png";
import { AppDispatch, RootState } from "../../app/store";
import { useNavigate } from "react-router-dom";

const EditFirst: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const user = useSelector((state: RootState) => state.user.user);
  const firstName = useSelector(
    (state: RootState) => state.user.user.firstName
  );
  const lastName = useSelector((state: RootState) => state.user.user.lastName);
  const number = useSelector((state: RootState) => state.user.user.number);
  const email = useSelector((state: RootState) => state.user.user.email);
  const age = useSelector((state: RootState) => state.user.user.age);
  const image = useSelector((state: RootState) => state.user.user.image);

  const [editName, setEditName] = useState<string>(firstName);
  const [editSurname, setEditSurname] = useState<string>(lastName);
  const [editNumber, setEditNumber] = useState<string>(number);
  const [editEmail, setEditEmail] = useState<string>(email);
  const [editAge, setEditAge] = useState<string>(age);
  const [img, setImg] = useState<string>("");

  const handleChangeFile = (e) => {
    setImg(e.target.files);
  };

  const hadnleChangeName = (e) => {
    setEditName(e.target.value);
  };
  const handleChangeSurname = (e) => {
    setEditSurname(e.target.value);
  };
  const handleChangeNumber = (e) => {
    setEditNumber(e.target.value);
  };
  const handleChangeAge = (e) => {
    setEditAge(e.target.value);
  };

  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(
      changeUser({ editName, editSurname, editNumber, editEmail, editAge })
    );
    dispatch(editImage(img));
    setTimeout(() => {
      navigate("/myfeed");
    }, 100);
  };

  return (
    <div className={styles.editFirst}>
      <div className={styles.avaName}>
        <label className={styles.label} htmlFor="label">
          <input onChange={handleChangeFile} id="label" type="file" />
          <img
            src={!image ? noimage : `http://localhost:4000/${image}`}
            alt=""
          />
        </label>
        <div>
          <h3>
            {user.firstName} {user.lastName}
          </h3>
          <h5> ID: {user._id}</h5>
        </div>
      </div>

      <div className={styles.editBlock}>
        <div className={styles.firstBlock}>
          <div>
            <p> Имя </p>
            <input
              onChange={hadnleChangeName}
              value={editName}
              type="textbox"
            />
          </div>
          <div>
            <p>Фамилия</p>
            <input
              value={editSurname}
              onChange={handleChangeSurname}
              type="text"
            />
          </div>
        </div>

        <div className={styles.firstBlock}>
          <div>
            <p> Email </p>
            <input
              value={user.email}
              className={styles.emailInput}
              type="textbox"
            />
          </div>
          <div>
            <p>Возраст</p>
            <input
              value={editAge}
              onChange={handleChangeAge}
              className={styles.ageInput}
              type="text"
            />
          </div>

          <div>
            <p>Телефон</p>
            <input
              value={editNumber}
              onChange={handleChangeNumber}
              className={styles.phoneInput}
              type="text"
            />
          </div>
        </div>
        <div className={styles.blockButton}>
          <button onClick={handleClick}>Cохранить</button>
        </div>
      </div>
    </div>
  );
};

export default EditFirst;
