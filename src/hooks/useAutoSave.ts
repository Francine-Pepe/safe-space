import { useEffect, useState } from "react";

export function useAutoSave(key: string, initialValue = "") {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    return localStorage.getItem(key) ?? initialValue;
  });

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem(key, value);

      setSaved(true);

      const savedTimer = setTimeout(() => {
        setSaved(false);
      }, 2000);

      return () => clearTimeout(savedTimer);
    }, 1000);

    return () => clearTimeout(timer);
  }, [key, value]);

  return {
    value,
    setValue,
    saved,
  };
}
