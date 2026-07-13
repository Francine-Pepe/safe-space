"use client";

import { useRef } from "react";
import styles from "./UploadSoundCard.module.scss";
import IconImage from "../IconImage/IconImage";
import type { UploadSoundCardProps } from "@/types/types";

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
        <IconImage src="/images/icons/add.png" alt="Add sound" size={60} />

        <h2>Add your own sound</h2>

        <p>+ A sound that brings you comfort</p>
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
