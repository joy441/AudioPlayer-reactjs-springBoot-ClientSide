import React from "react";
import styles from "./PlayerVolume.module.css";
import icons8_voice from "../../assets/images/icons8-voice-64.png";

const PlayerVolume = ({ updateVolume }) => {

  return (
    <div class={styles.volume_button}>
      <img src={icons8_voice} class="" alt="" />
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        onChange={(e) => updateVolume(e.target.value)}
        class={styles.audio_volume}
      />
    </div>
  );
};

export default PlayerVolume;
