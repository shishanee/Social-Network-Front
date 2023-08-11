import React, { MouseEvent, useEffect, useState } from "react";
import styles from "./Sign.module.scss";
import logo from "../../../public/letter-i.png";
import qr from "../../../public/qr-code.png";
import people from "../../../public/people.svg";
import sigin from "../../../public/sigin.svg";
import lock from "../../../public/lock.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authSignIn } from "../../features/applicationSlice";
import { AppDispatch, RootState } from "../../app/store";

const SignIn: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSign, setIsSign] = useState<boolean>(false);
  const error = useSelector((state: RootState) => state.application.error);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const changeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(authSignIn({ email, password }));
    setIsSign(true);

    if (isSign && !error) {
      navigate("/");
      setTimeout(() => {
        location.reload();
      }, 200);
    }
  };

  useEffect(() => {
    if (isSign && !error) {
      // navigate("/");
    }
  }, [isSign, error, navigate]);

  return (
    <div className={styles.singIn_main}>
      <div className={styles.signIn_info}>
        <div className={styles.left_logo}>
          <img src={logo} alt="" />
          <span>Into</span>
        </div>
        <div className={styles.info_txt}>
          <p>Войдите Into чтобы продолжить</p>
          <div className={styles.span_block}>
            <span>
              <img src={people} alt="" />
              <p>Единый аккаунт для сервисов into и партнёров</p>
            </span>
            <span>
              <img src={sigin} alt="" />
              <p>Быстрый вход в одно нажатие</p>
            </span>
            <span>
              <img src={lock} alt="" />
              <p>Надёжная защита с привязкой к телефону</p>
            </span>
            <a href="#">Подробнее о Into</a>
          </div>
        </div>
      </div>
      <div className={styles.signIn}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
          <h2>Вход в INTO</h2>
        </div>
        <form>
          <input
            type="text"
            value={email}
            onChange={changeLogin}
            placeholder="Телефон или почта"
          />
          <input
            type="password"
            value={password}
            onChange={changePassword}
            placeholder="Пароль"
          />
          <br />
          <button onClick={handleSignIn}>Войти</button>
        </form>
        <p className={styles.ErrorMessage}>{error}</p>
        <hr />
        <div className={styles.qrBlock}>
          <div className={styles.qrImgBlock}>
            <img src={qr} alt="" />
          </div>
          <div className={styles.qr_txt}>
            <h4>Быстрый вход по QR-коду</h4>
            <span>наведите камеру телефона</span>
            <a href="#">
              <p>Подробнее</p>
            </a>
          </div>
        </div>
        <Link to={"/register"}>
          <button className={styles.authBtn}>Зарегистрироваться</button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
