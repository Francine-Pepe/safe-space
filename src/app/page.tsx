import Link from "next/link";
import CalmButton from "@/components/CalmButton/CalmButton";
import Card from "@/components/Card/Card";
import styles from "./page.module.scss";
import IconImage from "@/components/IconImage/IconImage";
import Background from "@/components/Background/Background";

const cardsContent = [
  {
    icon: "/images/icons/breathe.png",
    alt: "Breathe",
    size: 30,
  },
  {
    icon: "/images/icons/brainDump.png",
    alt: "Brain Dump",
    size: 30,
  },
  {
    icon: "/images/icons/sounds.png",
    alt: "Sounds",
    size: 30,
  },
  {
    icon: "/images/icons/comfort.png",
    alt: "Comfort",
    size: 30,
  },
];

export default function Home() {
  return (
    <main className={styles.container}>
      <Background variant="home" />
      <section className={styles.content}>
        <h1 className={styles.title}>
          <IconImage
            src="/images/icons/safeSpace.png"
            alt="Safe Space"
            size={56}
          />{" "}
          safe space
        </h1>

        <p className={styles.subtitle}>
          A quiet place when things feel too much.
        </p>

        <Link href="/calm">
          <CalmButton>
            <IconImage
              src="/images/icons/overwhelmed.png"
              alt="Overwhelmed"
              size={40}
            />
            I feel overwhelmed
          </CalmButton>
        </Link>

        <section className={styles.cards}>
          {cardsContent.map((item, index) => (
            <Card key={index}>
              <IconImage src={item.icon} alt={item.alt} size={item.size} />
              {item.alt}
            </Card>
          ))}
        </section>
      </section>
    </main>
  );
}
