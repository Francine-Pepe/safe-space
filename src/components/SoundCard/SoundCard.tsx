"use client";

import { useEffect, useRef } from "react";
import SoundPlayer from "../SoundPlayer/SoundPlayer";
import styles from "./SoundCard.module.scss";
import type { SoundOption } from "@/types/types";

interface SoundCardProps {
  sound: SoundOption;
  isPlaying: boolean;
  onPlay: () => void;
}

export default function SoundCard({
  sound,
  isPlaying,
  onPlay,
}: SoundCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (isPlaying) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isPlaying]);

  return (
    <article className={styles.card}>
      {sound.video && (
        <video
          ref={videoRef}
          className={styles.video}
          src={sound.video}
          muted
          loop
          playsInline
        />
      )}

      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.text}>
          <h2>{sound.name}</h2>

          <p>{sound.description}</p>

          {isPlaying && <span className={styles.playing}>● Playing</span>}
        </div>

        <div className={styles.controls}>
          <SoundPlayer
            isPlaying={isPlaying}
            onPlay={onPlay}
            name={sound.name}
          />
        </div>
      </div>
    </article>
  );
}
