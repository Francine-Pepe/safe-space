import styles from "./Footer.module.scss";
import { footerContent } from "@/data/data";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        {footerContent.text}{" "}
        <span aria-label="love">{footerContent.heart}</span>{" "}
        {footerContent.ending}
      </p>

      <a
        href={footerContent.portfolio}
        target="_blank"
        rel="noopener noreferrer"
      >
        {footerContent.author}
      </a>
    </footer>
  );
}
