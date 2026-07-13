"use client";

import { useEffect, useState } from "react";
import Background from "@/components/Background/Background";
import BackButton from "@/components/BackButton/BackButton";
import ComfortCard from "@/components/ComfortCard/ComfortCard";
import SavedComfortCard from "@/components/SavedComfortCards/SavedComfortCards";
import { comfortMessages } from "@/data/data";
import {
  getComfortMessages,
  saveComfortMessage,
  deleteComfortMessage,
} from "@/lib/comfort";
import type { ComfortMessage } from "@/types/types";
import styles from "./page.module.scss";

function randomMessage() {
  return comfortMessages[Math.floor(Math.random() * comfortMessages.length)];
}

export default function ComfortPage() {
  const [current, setCurrent] = useState(comfortMessages[0]);

  const [saved, setSaved] = useState<ComfortMessage[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const data = await getComfortMessages();
        setSaved(data);
      } catch (error) {
        console.error("Loading comfort box failed:", error);
      }
    }

    load();
  }, []);

  const isSaved = saved.some((item) => item.message === current.message);

  async function handleSave() {
    try {
      const newItem = await saveComfortMessage(current);

      setSaved((previous) => [newItem, ...previous]);
    } catch (error) {
      console.error("Saving comfort message failed:", error);
    }
  }

  async function handleDelete(id: string) {
    try {
      await deleteComfortMessage(id);

      setSaved((previous) => previous.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Deleting comfort message failed:", error);
    }
  }

  return (
    <main className={styles.container}>
      <Background variant="comfort" />

      <section className={styles.content}>
        <h1>My Comfort Box</h1>

        <p>Keep little things that make you feel better.</p>

        <ComfortCard
          message={current}
          isSaved={isSaved}
          onNew={() => setCurrent(randomMessage())}
          onSave={handleSave}
        />

        <h2>Saved reminders</h2>

        <section className={styles.saved}>
          {saved.length === 0 ? (
            <p>Your saved reminders will appear here.</p>
          ) : (
            saved.map((item) => (
              <SavedComfortCard
                key={item.id}
                message={item}
                onRemove={() => handleDelete(item.id)}
              />
            ))
          )}
        </section>

        <BackButton href="/" />
      </section>
    </main>
  );
}
