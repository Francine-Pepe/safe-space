import Link from "next/link";
import Card from "@/components/Card/Card";
import styles from "./page.module.scss";
import IconImage from "@/components/IconImage/IconImage";
import BackButton from "@/components/BackButton/BackButton";
import Background from "@/components/Background/Background";

const feelingsContent = [
  {
    icon: "/images/icons/tired.png",
    alt: "I feel tired. I need to breathe",
    size: 30,
    link: "/breathing",
  },
  {
    icon: "/images/icons/thoughts.png",
    alt: "My mind is full. I need to write or draw",
    size: 30,
    link: "/journal",
  },
  {
    icon: "/images/icons/tooMuch.png",
    alt: "I need to calm down",
    size: 30,
    link: "/too-much",
  },
];

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
          {feelingsContent.map((item, index) => (
            <Link href={item.link} key={index}>
              <Card>
                <IconImage src={item.icon} alt={item.alt} size={item.size} />
                <span>{item.alt}</span>
              </Card>
            </Link>
          ))}
          <BackButton href="/" />
        </div>
      </section>
    </main>
  );
}
