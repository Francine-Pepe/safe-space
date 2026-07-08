import styles from "./Background.module.scss";

type BackgroundVariant =
  | "home"
  | "calm"
  | "breathing"
  | "thoughts"
  | "comfort"
  | "sounds";

type BackgroundProps = {
  variant?: BackgroundVariant;
};

export default function Background({ variant = "home" }: BackgroundProps) {
  return (
    <div
      className={`${styles.background} ${styles[variant]}`}
      aria-hidden="true"
    />
  );
}
