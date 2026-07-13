import Link from "next/link";
import styles from "./Card.module.scss";
import type { CardProps } from "@/types/types";

export default function Card({ children, href }: CardProps) {
  return (
    <Link href={href} className={styles.link}>
      <section className={styles.card}>{children}</section>
    </Link>
  );
}
