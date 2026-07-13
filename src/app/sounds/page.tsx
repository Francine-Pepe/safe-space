"use client";

import { useEffect, useState } from "react";
import SoundCard from "@/components/SoundCard/SoundCard";
import BackButton from "@/components/BackButton/BackButton";
import Background from "@/components/Background/Background";
import UploadSoundCard from "@/components/UploadSoundCard/UploadSoundCard";
import { soundsContent } from "@/data/data";
import { useSoundPlayer } from "@/hooks/useSoundPlayer";
import type { SoundOption } from "@/types/types";
import styles from "./page.module.scss";
import { uploadSound, getUploadedSounds, deleteSound } from "@/lib/sounds";

export default function SoundsPage() {
  const [sounds, setSounds] = useState<SoundOption[]>(soundsContent);
  const { playingSound, toggle } = useSoundPlayer();

  async function handleUpload(file: File) {
    try {
      const sound = await uploadSound(file);

      setSounds((previous) => [
        ...previous,

        {
          id: sound.id,
          name: sound.name,
          description: sound.description,
          audio: sound.audio_url,
          custom: true,
        },
      ]);
    } catch (error) {
      console.error("Upload failed:", JSON.stringify(error, null, 2));
    }
  }

  async function handleDelete(id: string, audioUrl: string) {
    try {
      await deleteSound(id, audioUrl);

      setSounds((previous) => previous.filter((sound) => sound.id !== id));
    } catch (error) {
      console.error("Delete failed:", error);
    }
  }

  useEffect(() => {
    async function loadUploadedSounds() {
      try {
        const uploadedSounds = await getUploadedSounds();

        const customSounds = uploadedSounds.map((sound) => ({
          id: sound.id,
          name: sound.name,
          description: sound.description,
          audio: sound.audio_url,
          custom: true,
        }));

        setSounds((previous) => [...previous, ...customSounds]);
      } catch (error) {
        console.error("Failed to load sounds:", error);
      }
    }

    loadUploadedSounds();
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
              onDelete={
                sound.custom
                  ? () => handleDelete(sound.id, sound.audio)
                  : undefined
              }
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
