import styles from "./ComfortCard.module.scss";
import type { ComfortCardProps } from "@/types/types";
import { comfortPageContent } from "@/data/data";
import IconImage from "../IconImage/IconImage";

export default function ComfortCard({
  message,
  onNew,
  onSave,
}: ComfortCardProps) {
  return (
    <main className={styles.card_container}>
      <section className={styles.card}>
        <span className={styles.icon}>
          <IconImage
            src={comfortPageContent.cardSpan}
            alt={comfortPageContent.saveButton}
            size={comfortPageContent.size}
          />
        </span>

        <p className={styles.message}>{message.message}</p>
        <div className={styles.actions}>
          <button className={styles.button} onClick={onNew}>
            <IconImage
              src={comfortPageContent.changeButton}
              alt={comfortPageContent.buttonAnother}
              size={comfortPageContent.size}
            />
            {comfortPageContent.buttonAnother}
          </button>

          <button
            className={`${styles.button} ${styles.primary}`}
            onClick={onSave}
          >
            <IconImage
              src={comfortPageContent.saveIcon}
              alt={comfortPageContent.saveButton}
              size={comfortPageContent.size}
            />
            {comfortPageContent.saveButton}
          </button>
        </div>
      </section>
    </main>
  );
}
