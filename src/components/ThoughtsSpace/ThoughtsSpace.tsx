"use client";

import { useState } from "react";
import Notebook from "@/components/Notebook/Notebook";
import DrawingCanvas from "@/components/DrawingCanvas/DrawingCanvas";
import IconImage from "../IconImage/IconImage";
import styles from "./ThoughtsSpace.module.scss";

type Tab = "write" | "draw";

const buttonsContent: {
  action: Tab;
  icon: string;
  alt: string;
}[] = [
  {
    action: "write",
    icon: "/images/icons/writing.png",
    alt: "Write",
  },
  {
    action: "draw",
    icon: "/images/icons/drawing.png",
    alt: "Draw",
  },
];

export default function ThoughtsSpace() {
  const [activeTab, setActiveTab] = useState<Tab>("write");

  return (
    <section className={styles.container}>
      <div className={styles.tabs}>
        {buttonsContent.map((item) => (
          <button
            key={item.action}
            className={activeTab === item.action ? styles.active : ""}
            onClick={() => setActiveTab(item.action)}
          >
            <IconImage src={item.icon} alt={item.alt} size={30} />

            {item.alt}
          </button>
        ))}
      </div>

      <div className={styles.content}>
        {activeTab === "write" && <Notebook />}

        {activeTab === "draw" && <DrawingCanvas />}
      </div>
    </section>
  );
}
