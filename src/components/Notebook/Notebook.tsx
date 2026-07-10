"use client";

import { useAutoSave } from "@/hooks/useAutoSave";
import ExportPDF from "../ExportPDF/ExportPDF";
import BackButton from "../BackButton/BackButton";
import { notebookConfig } from "@/data/data";
import styles from "./Notebook.module.scss";

export default function Notebook() {
  const { value, setValue, saved } = useAutoSave(notebookConfig.storageKey);

  return (
    <div className={styles.wrapper}>
      <section className={styles.paper}>
        <textarea
          className={styles.input}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={notebookConfig.placeholder}
        />

        {saved && <span className={styles.saved}>✓ Saved</span>}
      </section>

      <section className={styles.notebook_actions}>
        <BackButton href="/calm" />

        <ExportPDF
          text={value}
          title={notebookConfig.pdfTitle}
          filename={notebookConfig.pdfFilename}
        />
      </section>
    </div>
  );
}
