"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import IconImage from "@/components/IconImage/IconImage";
import styles from "./BreathingCircle.module.scss";
import { phases, playPauseButton } from "@/data/data";

export default function BreathingCircle() {
  const [phaseIndex, setPhaseIndex] = useState(0);

  const [secondsLeft, setSecondsLeft] = useState(phases[0].seconds);

  const [paused, setPaused] = useState(false);

  const phase = phases[phaseIndex];

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setSecondsLeft((current) => {
        if (current <= 1) {
          const next = (phaseIndex + 1) % phases.length;

          setPhaseIndex(next);

          return phases[next].seconds;
        }

        return current - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [phaseIndex, paused]);

  const button = paused ? playPauseButton.play : playPauseButton.pause;

  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.circle}
        animate={{
          scale: paused ? 1 : phase.scale,
        }}
        transition={{
          duration: paused ? 0 : phase.seconds,
          ease: "easeInOut",
        }}
      >
        <span>{paused ? "Paused" : phase.name}</span>

        <strong>{secondsLeft}</strong>
      </motion.div>

      <button className={styles.pause} onClick={() => setPaused(!paused)}>
        <IconImage
          src={button.src}
          alt={button.alt}
          size={button.size}
          name={button.name}
        />
      </button>
    </div>
  );
}
