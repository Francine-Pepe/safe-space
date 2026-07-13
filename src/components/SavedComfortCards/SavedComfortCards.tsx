import styles from "./SavedComfortCards.module.scss";
import type { SavedComfortCardProps } from "@/types/types";
import { trashIcon } from "@/data/data";
import IconImage from "@/components/IconImage/IconImage";

export default function SavedComfortCard({
  message,
  onRemove,
}: SavedComfortCardProps) {
  return (
    <article className={styles.card}>
      <p className={styles.message}>{message.message}</p>

      <button
        className={styles.remove}
        onClick={onRemove}
        aria-label="Remove reminder"
      >
        <IconImage
          src={trashIcon.src}
          alt={trashIcon.alt}
          size={trashIcon.size}
        />
      </button>
    </article>
  );
}
