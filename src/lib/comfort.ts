import { supabase } from "./supabase";
import type { ComfortMessage } from "@/types/types";

export async function saveComfortMessage(message: ComfortMessage) {
  const { data, error } = await supabase
    .from("comfort_box")
    .insert({
      message: message.message,
      category: message.category,
    })
    .select()
    .single();

  if (error) {
    console.error("Supabase insert error:", {
      message: error.message,
      details: error.details,
      hint: error.hint,
      code: error.code,
    });

    throw error;
  }

  return data;
}

export async function getComfortMessages() {
  const { data, error } = await supabase
    .from("comfort_box")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) throw error;

  return data;
}

export async function deleteComfortMessage(id: string) {
  const { error } = await supabase.from("comfort_box").delete().eq("id", id);

  if (error) throw error;
}
