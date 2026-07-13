"use client";

import { useRef } from "react";
import styles from "./UploadSoundCard.module.scss";
import IconImage from "../IconImage/IconImage";
import type { UploadSoundCardProps } from "@/types/types";
import { uploadCardContent } from "@/data/data";

export default function UploadSoundCard({ onSelect }: UploadSoundCardProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function openPicker() {
    inputRef.current?.click();
  }

  async function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    await onSelect(file);

    event.target.value = "";
  }
  return (
    <>
      <button className={styles.card} onClick={openPicker}>
        <IconImage
          src={uploadCardContent.src}
          alt={uploadCardContent.alt}
          size={uploadCardContent.size}
        />
        <section className={styles.button_text}>
          <h2>{uploadCardContent.title}</h2>

          <p>{uploadCardContent.text}</p>
        </section>
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="audio/*"
        hidden
        onChange={handleChange}
      />
    </>
  );
}
