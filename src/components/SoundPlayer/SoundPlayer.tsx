"use client";

import IconImage from "../IconImage/IconImage";
import styles from "./SoundPlayer.module.scss";
import type { SoundPlayerProps } from "@/types/types";

export default function SoundPlayer({
  isPlaying,
  onPlay,
  name,
}: SoundPlayerProps) {
  return (
    <div className={styles.player}>
      <button
        className={styles.button}
        onClick={onPlay}
        aria-label={isPlaying ? `Pause ${name}` : `Play ${name}`}
      >
        <IconImage
          src={isPlaying ? "/images/icons/pause.png" : "/images/icons/play.png"}
          alt={isPlaying ? "Pause" : "Play"}
          size={35}
          /* name={isPlaying ? "Pause" : "Play"} */
        />
      </button>
    </div>
  );
}
