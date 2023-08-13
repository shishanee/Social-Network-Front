import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import styles from "./Group.module.scss"
import noimage from "../../../public/noimage.png"

function GroupFollowers() {
    const groups = useSelector((state) => state.group.group);
    const { id } = useParams();
    const filterGroup = groups.find((i) => i._id === id);
    const followers = filterGroup.followers;

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
                          {item.firstName.split("").slice(0, 6).join("") +
                            "..."}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
  )
}

export default GroupFollowers