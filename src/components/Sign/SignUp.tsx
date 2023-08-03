import React, { useEffect, useState } from "react";
import styles from "./Sign.module.scss";
import logo from "../../../public/letter-d.png";
import people from "../../../public/people.svg";
import sigin from "../../../public/sigin.svg";
import lock from "../../../public/lock.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authSignUp } from "../../features/applicationSlice";
import { AppDispatch, RootState } from "../../app/store";

const SignUp: React.FC = ():JSX.Element => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSign, setIsSign] = useState<boolean>(false);
  const error = useSelector((state: RootState) => state.application.error);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const changeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const changeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    await dispatch(authSignUp({ firstName, lastName, email, password }));
    setIsSign(true);
  };

  useEffect(() => {
    if (isSign && !error) {
      navigate("/login");
    }
  }, [isSign, error, navigate]);
  return (
    <div className={styles.singIn_main}>
      <div className={styles.signIn_info}>
        <div className={styles.left_logo}>
          <img src={logo} alt="" />
          <span>DICAR</span>
        </div>
        <div className={styles.info_txt}>
          <p>Зарегистрируйтесь в DICAR чтобы продолжить</p>
          <div className={styles.span_block}>
            <span>
              <img src={people} alt="" />
              <p>Единый аккаунт для сервисов Dicar и партнёров</p>
            </span>
            <span>
              <img src={sigin} alt="" />
              <p>Быстрый вход в одно нажатие</p>
            </span>
            <span>
              <img src={lock} alt="" />
              <p>Надёжная защита с привязкой к телефону</p>
            </span>
            <a href="#">Подробнее о Dicar</a>
          </div>
        </div>
      </div>
      <div className={styles.signIn}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
          <h2>Регистрация в DICAR</h2>
        </div>
        <form>
          <input
            type="text"
            value={email}
            onChange={changeEmail}
            placeholder="Почта"
          />
          <input
            type="text"
            value={firstName}
            onChange={changeFirstName}
            placeholder="Имя"
          />
          <input
            type="text"
            value={lastName}
            onChange={changeLastName}
            placeholder="Фамилия"
          />
          <input
            type="password"
            value={password}
            onChange={changePassword}
            placeholder="Пароль"
          />
          <br />
          <button onClick={handleRegister}>Продолжить</button>
        </form>
        <p className={styles.ErrorMessage}>{error}</p>
        <hr />
        <div className={styles.qrBlock}>
          <Link to={"/login"} className={styles.link}>
            <button>Уже есть аккаунт</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
