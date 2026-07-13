"use client";

import { openDB } from "idb";
import type { StoredSound } from "@/types/types";

const DB_NAME = "safe-space-db";
const STORE_NAME = "sounds";

const dbPromise =
  typeof window !== "undefined"
    ? openDB(DB_NAME, 1, {
        upgrade(db) {
          if (!db.objectStoreNames.contains(STORE_NAME)) {
            db.createObjectStore(STORE_NAME, {
              keyPath: "id",
            });
          }
        },
      })
    : null;

export async function saveSound(sound: StoredSound) {
  if (!dbPromise) return;

  const db = await dbPromise;

  await db.put(
    STORE_NAME,

    sound,
  );
}

export async function getSounds(): Promise<StoredSound[]> {
  if (!dbPromise) return [];

  const db = await dbPromise;

  return db.getAll(STORE_NAME);
}

export async function deleteSound(id: string) {
  if (!dbPromise) return;

  const db = await dbPromise;

  await db.delete(
    STORE_NAME,

    id,
  );
}
