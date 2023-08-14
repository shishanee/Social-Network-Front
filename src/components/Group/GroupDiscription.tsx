import { useSelector } from "react-redux";
import styles from "./Group.module.scss";
import desc from "../../../public/descrip.svg";
import { RootState } from "../../app/store";

const GroupDiscription: React.FC = (): JSX.Element => {
  const groups = useSelector((state: RootState) => state.group.oneGroup);

  return (
    <div className={styles.desc}>
      <span className={styles.blockName}>Описание</span>
      <div className={styles.desc_info}>
        <div>
          <img src={desc} alt="" />{" "}
        </div>
        <span>
          {groups.discription
            ? groups.discription.split("").slice(0, 60).join("") +
              (groups.discription.length < 60 ? "" : "...")
            : "Нет добавленного описания"}
        </span>
      </div>
    </div>
  );
};

export default GroupDiscription;
