"use client";

import { useEffect, useState } from "react";
import { getSounds } from "@/lib/soundStorage";
import SoundCard from "@/components/SoundCard/SoundCard";
import BackButton from "@/components/BackButton/BackButton";
import Background from "@/components/Background/Background";
import UploadSoundCard from "@/components/UploadSoundCard/UploadSoundCard";
import { soundsContent } from "@/data/data";
import { useSoundPlayer } from "@/hooks/useSoundPlayer";
import type { SoundOption } from "@/types/types";
import styles from "./page.module.scss";

export default function SoundsPage() {
  const [sounds, setSounds] = useState<SoundOption[]>(soundsContent);
  const { playingSound, toggle } = useSoundPlayer();

  async function handleUpload(file: File) {
    const newSound: SoundOption = {
      id: crypto.randomUUID(),
      name: file.name.replace(/\.[^/.]+$/, ""),
      description: "Your personal sound",
      video: "",
      audio: URL.createObjectURL(file),
    };
    setSounds((previous) => [...previous, newSound]);
  }

  useEffect(() => {
    async function loadSounds() {
      const stored = await getSounds();

      const customSounds = stored.map((sound) => ({
        id: sound.id,
        name: sound.name,
        description: sound.description,
        audio: URL.createObjectURL(sound.audio),
        custom: true,
      }));

      setSounds([...soundsContent, ...customSounds]);
    }

    loadSounds();
  }, []);

  return (
    <main className={styles.container}>
      <Background variant="sounds" />

      <section className={styles.content}>
        <h1>Find a sound that feels calming</h1>

        <p>Choose the sound that feels right for you.</p>

        <section className={styles.cards}>
          {sounds.map((sound) => (
            <SoundCard
              key={sound.id}
              sound={sound}
              isPlaying={playingSound === sound.id}
              onPlay={() => toggle(sound.id, sound.audio)}
            />
          ))}
        </section>

        <section>
          <UploadSoundCard onSelect={handleUpload} />
        </section>

        <BackButton href="/" />
      </section>
    </main>
  );
}
