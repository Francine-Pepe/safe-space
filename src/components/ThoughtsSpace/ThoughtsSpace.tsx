"use client";

import { useState } from "react";

import Notebook from "@/components/Notebook/Notebook";
import DrawingCanvas from "@/components/DrawingCanvas/DrawingCanvas";
import IconImage from "../IconImage/IconImage";
import { thoughtsTabs } from "@/data/data";
import type { ThoughtsTab } from "@/types/types";
import styles from "./ThoughtsSpace.module.scss";

export default function ThoughtsSpace() {
  const [activeTab, setActiveTab] = useState<ThoughtsTab>("write");

  return (
    <section className={styles.container}>
      <div className={styles.tabs}>
        {thoughtsTabs.map((tab) => (
          <button
            key={tab.action}
            className={activeTab === tab.action ? styles.active : ""}
            onClick={() => setActiveTab(tab.action)}
          >
            <IconImage src={tab.icon} alt={tab.alt} size={30} />

            {tab.alt}
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
