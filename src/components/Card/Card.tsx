import styles from "./Card.module.scss";
import type { CardProps } from "@/types/types";

export default function Card({ children }: CardProps) {
  return <section className={styles.card}>{children}</section>;
}
