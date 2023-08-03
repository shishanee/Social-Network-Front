import React from "react";
import styles from "./Sign.module.scss"
import logo from "../../../public/letter-d.png"
import qr from "../../../public/qr-code.png"
import people from "../../../public/people.svg"
import sigin from "../../../public/sigin.svg"
import lock from "../../../public/lock.svg"
import { Link } from "react-router-dom";

const SignUp: React.FC = ():JSX.Element => {
  return (
    <div className={styles.singIn_main}>
    <div className={styles.signIn_info}>
        <div className={styles.left_logo}><img src={logo} alt="" /><span>DICAR</span></div>
        <div className={styles.info_txt}>
          <p>Зарегистрируйтесь в DICAR  чтобы продолжить</p>
          <div className={styles.span_block}>
          <span><img src={people} alt="" /><p>Единый аккаунт для сервисов Dicar и партнёров</p></span>
          <span><img src={sigin} alt="" /><p>Быстрый вход в одно нажатие</p></span>
          <span><img src={lock} alt="" /><p>Надёжная защита с привязкой к телефону</p></span>
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
        <input type="text" placeholder="Почта"/>
        <input type="text" placeholder="Имя"/>
        <input type="text" placeholder="Фамилия"/>
        <input type="password" placeholder="Пароль"/>
        <br />
        <button>Продолжить</button>
      </form>
      <hr />
      <div className={styles.qrBlock}>
        <Link to={"/login"} className={styles.link}><button>Уже есть аккаунт</button></Link>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
