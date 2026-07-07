import Link from "next/link";
import BreathingCircle from "@/components/BreathingCircle/BreathingCircle";
import styles from "./page.module.scss";

export default function BreathingPage() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Lets breathe together</h1>

        <p className={styles.subtitle}>
          Follow the circle. Nothing else is needed.
        </p>

        <BreathingCircle />

        <Link href="/" className={styles.back}>
          ← Back
        </Link>
      </div>
    </main>
  );
}
