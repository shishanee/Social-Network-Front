import styles from "./BtnScrollUp.module.scss";
import React, { useState } from "react";
import topBtn from "../../../public/expand_less_FILL0_wght400_GRAD0_opsz48.svg";

const BtnScrollUp: React.FC = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = ():void => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = ():void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Подписывайтесь на прокрутку страницы
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div>
        {isVisible && (
          <button className={styles.buttonToTop} onClick={scrollToTop}>
            <img src={topBtn} alt="" />
            <span>Наверх</span>
          </button>
        )}
      </div>
    </>
  );
};

export default BtnScrollUp;
