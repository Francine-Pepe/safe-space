import { supabase } from "./supabase";

export async function uploadSound(file: File) {
  const safeName = file.name.replace(/\s+/g, "-").toLowerCase();

  const fileName = `${Date.now()}-${safeName}`;
  const { data, error } = await supabase.storage
    .from("sounds")
    .upload(fileName, file);

  console.log("UPLOAD RESULT:", {
    data,
    error,
  });

  if (error) {
    throw error;
  }

  const { data: urlData } = supabase.storage
    .from("sounds")
    .getPublicUrl(fileName);

  const { data: sound, error: dbError } = await supabase
    .from("sounds")
    .insert({
      name: file.name.replace(/\.[^/.]+$/, ""),
      description: "Your personal sound",
      audio_url: urlData.publicUrl,
    })
    .select()
    .single();

  if (dbError) {
    throw dbError;
  }

  return sound;
}

// GET UPLOADED SOUNDS

export async function getUploadedSounds() {
  const { data, error } = await supabase
    .from("sounds")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return data;
}

export async function deleteSound(id: string, audioUrl: string) {
  const filePath = audioUrl.split("/sounds/")[1];

  console.log("Deleting file:", filePath);

  if (filePath) {
    const { error: storageError } = await supabase.storage
      .from("sounds")
      .remove([filePath]);

    if (storageError) {
      console.error("Storage delete error:", storageError);

      throw storageError;
    }
  }

  const { error } = await supabase.from("sounds").delete().eq("id", id);

  console.log("Database delete:", {
    id,
    error,
  });

  if (error) {
    throw error;
  }
}
