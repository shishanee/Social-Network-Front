import React, { useEffect, useState } from "react";
import styles from "./Edit.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../../features/userSlice";

const EditFirst: React.FC = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  const firstName = useSelector((state) => state.user.user.firstName);
  const lastName = useSelector((state) => state.user.user.lastName);
  const number = useSelector((state) => state.user.user.number);
  const email = useSelector((state) => state.user.user.email);
  const age = useSelector((state) => state.user.user.age);;
  

  const [editName, setEditName] = useState(firstName);
  const [editSurname, setEditSurname] = useState(lastName);
  const [editNumber, setEditNumber] = useState(number);
  const [editEmail, setEditEmail] = useState(email);
  const [editAge, setEditAge] = useState(age);

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
  // const handleChangeEmail = (e) => {
  //   setEditEmail(e.target.value);
  // };


  const handleClick = (e) => {
    e.preventDefault();
    dispatch(changeUser({editName, editSurname, editNumber, editEmail, editAge}))
  }


  return (
    <div className={styles.editFirst}>
      <div className={styles.avaName}>
        <img src="https://i.ibb.co/qJBKH3D/Abdurrahman.jpg" alt="" />
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
            <input value={editSurname} onChange={handleChangeSurname} type="text" />
          </div>
        </div>

        <div className={styles.firstBlock}>
          <div>
            <p> Email </p>
            <input
            value={user.email}
            className={styles.emailInput} type="textbox" />
          </div>
          <div>
            <p>Возраст</p>
            <input
            value={editAge}
            onChange={handleChangeAge} className={styles.ageInput} type="text" />
          </div>

          <div>
            <p>Телефон</p>
            <input
            value={editNumber}
            onChange={handleChangeNumber} className={styles.phoneInput} type="text" />
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
