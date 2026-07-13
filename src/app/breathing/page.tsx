import BreathingCircle from "@/components/BreathingCircle/BreathingCircle";
import styles from "./page.module.scss";
import BackButton from "@/components/BackButton/BackButton";
import Background from "@/components/Background/Background";

export default function BreathingPage() {
  return (
    <main className={styles.container}>
      <Background variant="breathing" />
      <div className={styles.content}>
        <h1 className={styles.title}>Lets breathe together</h1>

        <p className={styles.subtitle}>
          Follow the circle. Nothing else is needed.
        </p>

        <BreathingCircle />

        <BackButton href="/" />
      </div>
    </main>
  );
}
