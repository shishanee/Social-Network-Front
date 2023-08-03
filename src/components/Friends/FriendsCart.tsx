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
        <h3 className={styles.userFirstName}>{firstName}</h3>
        <h3 className={styles.userLastName}> {lastName}</h3>
      </div>
      </div>
      <div>
        <button className={styles.buttonDelete}>{buttonText}</button>
      </div>
    </div>
  );
};

export default FriendsCart;
