import React, { useState } from "react";
import styles from "./rightSidebar.module.scss";
import { Link } from "react-router-dom";

const RightSidebar: React.FC = (): JSX.Element => {
  const [podMenu, setPodMenu] = useState(false);
  const [backlightNews, setBacklightNews] = useState(true);
  const [backlightImage, setBacklightImage] = useState(false);
  const [backlightVideo, setBacklightVideo] = useState(false);
  const [backlightPodcast, setBacklightPodcast] = useState(false);
  const [backlightPopulate, setBacklightPopulate] = useState(false);
  const [backlightSearch, setBacklightSearch] = useState(false);
  const [backlightReaction, setBacklightReacrion] = useState(false);
  const [backlightUpdate, setBacklightUpdate] = useState(false);
  const [backlightComment, setBacklightComment] = useState(false);

  const handleImageClick = () => {
    setBacklightNews(false);
    setBacklightImage(true);
    setBacklightVideo(false);
    setBacklightPodcast(false);
    setBacklightPopulate(false);
    setBacklightSearch(false);
    setBacklightReacrion(false);
    setBacklightUpdate(false);
    setBacklightComment(false);
  };

  const handleOpenPodMenu = () => {
    setPodMenu(true);
    setBacklightNews(true);
    setBacklightImage(false);
    setBacklightVideo(false);
    setBacklightPodcast(false);
    setBacklightPopulate(false);
    setBacklightSearch(false);
    setBacklightReacrion(false);
    setBacklightUpdate(false);
    setBacklightComment(false);
  };

  const handleVideoClick = () => {
    setBacklightNews(false);
    setBacklightImage(false);
    setBacklightVideo(true);
    setBacklightPodcast(false);
    setBacklightPopulate(false);
    setBacklightSearch(false);
    setBacklightReacrion(false);
    setBacklightUpdate(false);
    setBacklightComment(false);
  };

  const handlePodcastClick = () => {
    setBacklightNews(false);
    setBacklightImage(false);
    setBacklightVideo(false);
    setBacklightPodcast(true);
    setBacklightPopulate(false);
    setBacklightSearch(false);
    setBacklightReacrion(false);
    setBacklightUpdate(false);
    setBacklightComment(false);
  };

  const handlePopulateClick = () => {
    setPodMenu(false);
    setBacklightNews(false);
    setBacklightImage(false);
    setBacklightVideo(false);
    setBacklightPodcast(false);
    setBacklightPopulate(true);
    setBacklightSearch(false);
    setBacklightReacrion(false);
    setBacklightUpdate(false);
    setBacklightComment(false);
  };
  const handleSearchClick = () => {
    setPodMenu(false);
    setBacklightNews(false);
    setBacklightImage(false);
    setBacklightVideo(false);
    setBacklightPodcast(false);
    setBacklightPopulate(false);
    setBacklightSearch(true);
    setBacklightReacrion(false);
    setBacklightUpdate(false);
    setBacklightComment(false);
  };
  const handleReactionClick = () => {
    setPodMenu(false);
    setBacklightNews(false);
    setBacklightImage(false);
    setBacklightVideo(false);
    setBacklightPodcast(false);
    setBacklightPopulate(false);
    setBacklightSearch(false);
    setBacklightReacrion(true);
    setBacklightUpdate(false);
    setBacklightComment(false);
  };
  const handleUpdateClick = () => {
    setPodMenu(false);
    setBacklightNews(false);
    setBacklightImage(false);
    setBacklightVideo(false);
    setBacklightPodcast(false);
    setBacklightPopulate(false);
    setBacklightSearch(false);
    setBacklightReacrion(false);
    setBacklightUpdate(true);
    setBacklightComment(false);
  };
  const handleCommentClick = () => {
    setPodMenu(false);
    setBacklightNews(false);
    setBacklightImage(false);
    setBacklightVideo(false);
    setBacklightPodcast(false);
    setBacklightPopulate(false);
    setBacklightSearch(false);
    setBacklightReacrion(false);
    setBacklightUpdate(false);
    setBacklightComment(true);
  };
  return (
    <div className={styles.rightSidebarContainer}>
      <div className={styles.rightSidebar}>
        <Link className={styles.link} to={"#"}>
          <div
            className={
              backlightNews ? styles.backlightNews : styles.rightSidebarMenu
            }
            onClick={handleOpenPodMenu}
          >
            Новости
          </div>
        </Link>
        {podMenu && (
          <>
            <Link className={styles.link} to={"#"}>
              <div
                onClick={handleImageClick}
                className={
                  backlightImage
                    ? styles.backlightImage
                    : styles.rightSidebarPodMenu
                }
              >
                Фотографии
              </div>
            </Link>
            <Link className={styles.link} to={"#"}>
              <div
                onClick={handleVideoClick}
                className={
                  backlightVideo
                    ? styles.backlightVideo
                    : styles.rightSidebarPodMenu
                }
              >
                Видео
              </div>
            </Link>
            <Link className={styles.link} to={"#"}>
              <div
                onClick={handlePodcastClick}
                className={
                  backlightPodcast
                    ? styles.backlightPodcast
                    : styles.rightSidebarPodMenu
                }
              >
                Подкасты
              </div>
            </Link>
          </>
        )}
        <Link className={styles.link} to={"#"}>
          <div
            onClick={handlePopulateClick}
            className={
              backlightPopulate
                ? styles.backlightPopulate
                : styles.rightSidebarMenu
            }
          >
            Рекомендации
          </div>
        </Link>
        <Link className={styles.link} to={"#"}>
          <div
            onClick={handleSearchClick}
            className={
              backlightSearch ? styles.backlightSearch : styles.rightSidebarMenu
            }
          >
            Поиск
          </div>
        </Link>
        <div className={styles.rightSidebarSiz}></div>
        <Link className={styles.link} to={"#"}>
          <div
            onClick={handleReactionClick}
            className={
              backlightReaction
                ? styles.backlightReaction
                : styles.rightSidebarMenu
            }
          >
            Реакции
          </div>
        </Link>
        <Link className={styles.link} to={"#"}>
          <div
            onClick={handleUpdateClick}
            className={
              backlightUpdate ? styles.backlightUpdate : styles.rightSidebarMenu
            }
          >
            Обновления
          </div>
        </Link>
        <Link className={styles.link} to={"#"}>
          <div
            onClick={handleCommentClick}
            className={
              backlightComment
                ? styles.backlightComment
                : styles.rightSidebarMenu
            }
          >
            Комментарии
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RightSidebar;
