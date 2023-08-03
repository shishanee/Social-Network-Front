import React from "react";
import styles from "./Sign.module.scss";
import logo from "../../../public/letter-d.png";
import qr from "../../../public/qr-code.png";
import people from "../../../public/people.svg";
import sigin from "../../../public/sigin.svg";
import lock from "../../../public/lock.svg";
import { Link } from "react-router-dom";

const SignIn: React.FC = (): JSX.Element => {
  return (
    <div className={styles.singIn_main}>
      <div className={styles.signIn_info}>
        <div className={styles.left_logo}>
          <img src={logo} alt="" />
          <span>DICAR</span>
        </div>
        <div className={styles.info_txt}>
          <p>Войдите DICAR чтобы продолжить</p>
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
          <h2>Вход в DICAR</h2>
        </div>
        <form>
          <input type="text" placeholder="Телефон или почта" />
          <input type="password" placeholder="Пароль" />
          <br />
          <button>Войти</button>
        </form>
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
