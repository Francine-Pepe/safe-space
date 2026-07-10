import Link from "next/link";
import CalmButton from "@/components/CalmButton/CalmButton";
import Card from "@/components/Card/Card";
import IconImage from "@/components/IconImage/IconImage";
import Background from "@/components/Background/Background";
import { homeImage, homeCards, overwhelmedButton } from "@/data/data";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.container}>
      <Background variant="home" />

      <section className={styles.content}>
        <h1 className={styles.title}>
          <IconImage
            src={homeImage.src}
            alt={homeImage.alt}
            size={homeImage.size}
          />

          {homeImage.name}
        </h1>

        <p className={styles.subtitle}>
          A quiet place when things feel too much.
        </p>

        <Link href={overwhelmedButton.href}>
          <CalmButton>
            <IconImage
              src={overwhelmedButton.src}
              alt={overwhelmedButton.alt}
              size={overwhelmedButton.size}
            />
            {overwhelmedButton.label}
          </CalmButton>
        </Link>

        <section className={styles.cards}>
          {homeCards.map((item, index) => (
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
