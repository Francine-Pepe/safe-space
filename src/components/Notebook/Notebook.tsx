"use client";

import { useAutoSave } from "@/hooks/useAutoSave";

import styles from "./Notebook.module.scss";
import ExportPDF from "../ExportPDF/ExportPDF";
import BackButton from "../BackButton/BackButton";

export default function Notebook() {
  const { value, setValue, saved } = useAutoSave("safe-space-thoughts");

  return (
    <div className={styles.wrapper}>
      <section className={styles.paper}>
        <textarea
          className={styles.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Write whatever is in your mind..."
        />

        {saved && <span className={styles.saved}>✓ Saved</span>}
      </section>

      <section className={styles.notebook_actions}>
        <BackButton href="/calm" />
        <ExportPDF text={value} />
      </section>
    </div>
  );
}
