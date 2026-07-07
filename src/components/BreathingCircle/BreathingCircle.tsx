"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from "./BreathingCircle.module.scss";

const phases = [
  {
    name: "Breathe in",
    seconds: 4,
    scale: 1.35,
  },
  {
    name: "Hold",
    seconds: 4,
    scale: 1.35,
  },
  {
    name: "Breathe out",
    seconds: 4,
    scale: 1,
  },
  {
    name: "Rest",
    seconds: 4,
    scale: 1,
  },
];

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
        {paused ? "▶ Continue" : "⏸ Pause"}
      </button>
    </div>
  );
}
