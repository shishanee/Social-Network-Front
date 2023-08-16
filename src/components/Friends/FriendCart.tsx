import { useDispatch } from "react-redux";
import styles from "./Friends.module.scss";
import { unFollow } from "../../features/userSlice";
import { AppDispatch } from "../../app/store";

interface Props {
  image: string;
  firstName: string;
  lastName: string;
  buttonText: string;
  id: string,
}

const FriendCart = (props: Props): JSX.Element => {
  const { id, image, firstName, lastName, buttonText } = props;
  const dispatch = useDispatch<AppDispatch>()

  const handleUnFollow = (id) => {
    dispatch(unFollow(id))
    location.reload()
  }

  return (
    <div className={styles.userCartContainer}>
        <div className={styles.avatarAndName} >
      <div className={styles.UserImageContainer}>
        <img src={image} alt="" />
      </div>
      <div className={styles.userName}>
        <h3 className={styles.userFirstName}>{firstName}</h3>
        <h3 className={styles.userLastName}> {lastName}</h3>
      </div>
      </div>
      <div>
        <button onClick={() => handleUnFollow(id)} className={styles.buttonDelete}>{buttonText}</button>
      </div>
    </div>
  );
};

export default FriendCart;
