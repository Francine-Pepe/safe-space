"use client";

import { useRef, useState } from "react";

export function useSoundPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [playingSound, setPlayingSound] = useState<string | null>(null);

  function play(soundId: string, src: string) {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const audio = new Audio(src);

    audio.loop = true;

    audio.play().catch(() => {});

    audioRef.current = audio;

    setPlayingSound(soundId);
  }

  function pause() {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setPlayingSound(null);
  }

  function toggle(soundId: string, src: string) {
    if (playingSound === soundId) {
      pause();
    } else {
      play(soundId, src);
    }
  }

  return {
    playingSound,
    toggle,
  };
}
