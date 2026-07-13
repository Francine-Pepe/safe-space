import styles from "./Background.module.scss";
import { backgrounds } from "@/data/data";
import type { BackgroundVariant } from "@/data/data";

type BackgroundProps = {
  variant: BackgroundVariant;
};

export default function Background({ variant }: BackgroundProps) {
  const backgroundImage = backgrounds[variant];

  return (
    <div
      className={styles.background}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    />
  );
}
