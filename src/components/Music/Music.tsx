import React, { useState, useRef, useEffect } from "react";
import { IMusic, songsData } from "./tracks";
import styles from "./Music.module.scss";
import OneSong from "./OneSong";
import play from "../../a/play.svg";
import pause from "../../a/pause.svg";
import back from "../../a/back.svg";
import next from "../../a/next.svg";
import repeat from '../../../public/repeat.png'

const Music: React.FC = () => {
  const [i, setI] = useState(0);
  const [songs, setSongs] = useState<IMusic[]>(songsData);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState<IMusic>(songsData[i]);
  const audioElem = useRef<HTMLAudioElement>(null);
  const clickRef = useRef(null);
  const [rep, setRep] = useState(false);

  useEffect(() => {
    setCurrentSong(songsData[i]);

    if (isPlaying) {
      audioElem.current?.play();
    } else {
      audioElem.current?.pause();
    }

    audioElem.current?.addEventListener("ended", handleSongEnd);

    return () => {
      audioElem.current?.pause();
      audioElem.current?.removeEventListener("ended", handleSongEnd);
    };
  }, [isPlaying, audioElem.current, i, rep]);

  const handleRepeatSong = () => {
    setI(i*1)
    audioElem.current?.play()
  };

  const handleSongEnd = () => {
    if (rep) {
      handleRepeatSong();
    } else {
      handleNextSong();
    }
  };

  const handleRepSong = () => {
    setRep(!rep);
  };

  const handlePlayAndPauseSong = () => {
    setIsPlaying(!isPlaying);
  };

  const handleOnPlaying = () => {
    const duration = audioElem.current?.duration;
    const ct = audioElem.current?.currentTime;
    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };

  const handleCheckWidth = (e) => {
    let width = clickRef.current?.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const progressDiv = (offset / width) * 100;
    audioElem.current.currentTime = (progressDiv / 100) * currentSong.length;
  };

  const handleBackSong = () => {
    if (i === 0) {
      setI(songs.length - 1);
    } else {
      setI(i - 1);
    }
  };

  const handleNextSong = () => {
    if (songs.length - 1 <= i) {
      setI(0);
    } else {
      setI(i + 1);
    }
  };

  const handleIndexSong = (index: number) => {
    setI(index);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.songsPlayer}>
          <div className={styles.buttons}>
            {isPlaying ? (
              <div
                className={styles.buttonPlayAndPause}
                onClick={handlePlayAndPauseSong}
              >
                {" "}
                <img src={pause} alt="" />
              </div>
              
            ) : (
              <div
                className={styles.buttonPlayAndPause}
                onClick={handlePlayAndPauseSong}
              >
                {" "}
                <img src={play} alt="" />{" "}
              </div>
            )}
            <div onClick={handleBackSong}>
              <img src={back} alt="" />
            </div>
            <div onClick={handleNextSong}>
              <img src={next} alt="" />
            </div>
            <img className={styles.songImage} src={currentSong.image} alt="" />
          </div>
          <div className={styles.songAndProgress}>
            <div className={styles.songName}>{currentSong.title}</div>
            <div className={styles.songAuthor}>{currentSong.author}</div>
            <div
              className={styles.trackNavigator}
              onClick={handleCheckWidth}
              ref={clickRef}
              >
              <div
                className={styles.progressBar}
                style={{ width: `${currentSong.progress}%` }}
                ></div>
            </div>
            <audio
              src={songs[i].src}
              ref={audioElem}
              onTimeUpdate={handleOnPlaying}
              />
          </div>
              <img onClick={handleRepSong} className={styles.repeatButton} src={repeat} alt="" />
        </div>
        <div className={styles.fullSongs}>
          {songs.map((song, i) => {
            return (
              <div onClick={() => handleIndexSong(i)}>
                <OneSong
                  key={i}
                  index={i}
                  songName={song.title}
                  songAuthor={song.author}
                  image={song.image}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Music;
