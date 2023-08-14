import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Group.module.scss";
import noimage from "../../../public/noimage.png";
import { RootState } from "../../app/store";

const GroupFollowers: React.FC = (): JSX.Element => {
  const followers = useSelector((state: RootState) => state.group.followers);

  return (
    <div className={styles.followers}>
      <div>
        <span className={styles.blockName}>
          Подписчики{" "}
          <span className={styles.itemLength}> {followers.length}</span>
        </span>
      </div>
      <div className={styles.users}>
        {followers.map((item) => {
          return (
            <Link to={`/people/${item._id}`}>
              <div>
                <div className={styles.follower_info}>
                  <img
                    src={
                      item.image
                        ? `http://localhost:4000/${item.image}`
                        : noimage
                    }
                    alt=""
                  />{" "}
                  <span>
                    {item.firstName.split("").slice(0, 6).join("") + "..."}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default GroupFollowers;
