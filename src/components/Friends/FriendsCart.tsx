import styles from "./Friends.module.scss";

interface Props {
  image: string;
  firstName: string;
  lastName: string;
  buttonText: string;
}

const FriendsCart = (props: Props): JSX.Element => {
  const { image, firstName, lastName, buttonText } = props;

  return (
    <div className={styles.userCartContainer}>
        <div className={styles.avatarAndName} >
      <div className={styles.UserImageContainer}>
        <img src={image} alt="" />
      </div>
      <div className={styles.userName}>
        <span className={styles.userFirstName}>{firstName}</span>
        <span className={styles.userLastName}> {lastName}</span>
      </div>
      </div>
      <div>
        <button className={styles.buttonDelete}>{buttonText}</button>
      </div>
    </div>
  );
};

export default FriendsCart;
