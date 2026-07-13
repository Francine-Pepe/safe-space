"use client";

import IconImage from "../IconImage/IconImage";
import styles from "./SoundPlayer.module.scss";
import type { SoundPlayerProps } from "@/types/types";
import { playPauseButton } from "@/data/data";

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
          src={isPlaying ? playPauseButton.pause.src : playPauseButton.play.src}
          alt={isPlaying ? playPauseButton.pause.alt : playPauseButton.play.alt}
          size={playPauseButton.play.size}
        />
      </button>
    </div>
  );
}
