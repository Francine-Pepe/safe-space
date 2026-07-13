import Card from "@/components/Card/Card";
import styles from "./page.module.scss";
import IconImage from "@/components/IconImage/IconImage";
import BackButton from "@/components/BackButton/BackButton";
import Background from "@/components/Background/Background";
import { feelingsContent } from "@/data/data";

export default function CalmPage() {
  return (
    <main className={styles.container}>
      <Background variant="calm" />
      <section className={styles.content}>
        <h1 className={styles.title}>What feels strongest right now?</h1>

        <p className={styles.subtitle}>
          Choose the closest one. There is no wrong answer.
        </p>

        <div className={styles.options}>
          {feelingsContent.map((item) => (
            <Card key={item.alt} href={item.href}>
              <IconImage src={item.icon} alt={item.alt} size={item.size} />

              <span>{item.alt}</span>
            </Card>
          ))}
          <BackButton href="/" />
        </div>
      </section>
    </main>
  );
}
