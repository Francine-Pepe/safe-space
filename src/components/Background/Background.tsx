import styles from "./Background.module.scss";
import type { BackgroundProps } from "@/types/types";

export default function Background({ variant = "home" }: BackgroundProps) {
  return (
    <div
      className={`${styles.background} ${styles[variant]}`}
      aria-hidden="true"
    />
  );
}
