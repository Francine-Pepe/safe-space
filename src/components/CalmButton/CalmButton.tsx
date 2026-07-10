import styles from "./CalmButton.module.scss";
import type { CalmButtonProps } from "@/types/types";

export default function CalmButton({ children }: CalmButtonProps) {
  return <button className={styles.button}>{children}</button>;
}
