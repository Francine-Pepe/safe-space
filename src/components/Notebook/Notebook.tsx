"use client";

import { useAutoSave } from "@/hooks/useAutoSave";

import styles from "./Notebook.module.scss";
import ExportPDF from "../ExportPDF/ExportPDF";
import BackButton from "../BackButton/BackButton";

export default function Notebook() {
  const { value, setValue, saved } = useAutoSave("safe-space-thoughts");

  return (
    <section className={styles.paper}>
      <textarea
        className={styles.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Write whatever is in your mind..."
      />

      {saved && <span className={styles.saved}>✓ Saved</span>}

      <div className={styles.notebook_actions}>
        <ExportPDF text={value} />
        <BackButton href="/calm" />
      </div>
    </section>
  );
}
