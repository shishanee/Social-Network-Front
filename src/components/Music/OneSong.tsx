import styles from "./Music.module.scss";

interface Props {
  index: number;
  songName: string;
  songAuthor: string;
}

const OneSong = (props: Props): JSX.Element => {
  const { index, songAuthor, songName, image } = props;

  return (
    <div key={index} className={styles.songContainer}>
        <img className={styles.songImage} src={image} alt="" />
        <div>

      <div className={styles.songName}>{songName}</div>
      <div className={styles.songAuthor}>{songAuthor}</div>
        </div>
    </div>
  );
};

export default OneSong;
