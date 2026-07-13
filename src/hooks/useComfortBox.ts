import { useEffect, useState } from "react";
import type { ComfortMessage } from "@/types/types";

const STORAGE_KEY = "safe-space-comfort";

export function useComfortBox() {
  const [saved, setSaved] = useState<ComfortMessage[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const stored = localStorage.getItem(STORAGE_KEY);

    return stored ? JSON.parse(stored) : [];
  });

  function saveMessage(message: ComfortMessage) {
    const exists = saved.some((item) => item.id === message.id);

    if (exists) return;

    const updated = [...saved, message];

    setSaved(updated);

    localStorage.setItem(
      STORAGE_KEY,

      JSON.stringify(updated),
    );
  }

  function removeMessage(id: string) {
    const updated = saved.filter((item) => item.id !== id);

    setSaved(updated);

    localStorage.setItem(
      STORAGE_KEY,

      JSON.stringify(updated),
    );
  }

  return {
    saved,
    saveMessage,
    removeMessage,
  };
}
