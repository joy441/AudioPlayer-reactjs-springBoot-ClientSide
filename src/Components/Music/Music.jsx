import React from "react";
import styles from "./Music.module.css";
import icons8_musical from "../../assets/images/icons8-musical-96 (2).png";

const Music = ({ audio }) => {
  const { title, album, artist } = audio;

  return (
    <div class={styles.music}>
      <div class={styles.music_block}>
        <img src={icons8_musical} alt="musical icon" />
      </div>
      <div className={styles.details}>
        <p className={styles.title}>{title}</p>
        <p className={styles.artist}>{artist}</p>
      </div>
    </div>
  );
};

export default Music;
