import Link from "next/link";
import Card from "@/components/Card/Card";
import styles from "./page.module.scss";
import IconImage from "@/components/IconImage/IconImage";

const feelingsContent = [
  {
    icon: "/images/icons/tired.png",
    alt: "Tired",
    size: 30,
    link: "/breathing",
  },
  {
    icon: "/images/icons/thoughts.png",
    alt: "Thoughts",
    size: 30,
    link: "/journal",
  },
  {
    icon: "/images/icons/tooMuch.png",
    alt: "Too Much",
    size: 30,
    link: "/too-much",
  },
];

export default function CalmPage() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>What feels strongest right now?</h1>

        <p className={styles.subtitle}>
          Choose the closest one. There is no wrong answer.
        </p>

        <div className={styles.options}>
          {feelingsContent.map((item, index) => (
            <Link href={item.link} key={index}>
              <Card>
                <IconImage src={item.icon} alt={item.alt} size={item.size} />
                {item.alt}
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
