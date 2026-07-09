import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Made with <span aria-label="love">♥</span> and care
      </p>

      <a
        href="https://www.francinemelopepe.de"
        target="_blank"
        rel="noopener noreferrer"
      >
        Francine Melo Pêpe
      </a>
    </footer>
  );
}
