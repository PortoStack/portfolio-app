import { supabase } from "@/lib/supabase";
import { uuidv7 } from "uuidv7";

export const uploadFileResume = async (file: File | null): Promise<string> => {
  if (!file) return "";

  if (file.size > 5 * 1024 * 1024) {
    throw new Error("File size too large (max 5MB)");
  }

  const fileExt = file.name.split(".").pop();
  const fileName = `${uuidv7()}.${fileExt}`;
  const filePath = `resumes/${fileName}`;

  const { data, error: uploadError } = await supabase.storage
    .from("portfolio-assets")
    .upload(filePath, file, {
      upsert: true,
      contentType: file.type,
    });

  if (uploadError) {
    console.error("Storage Error Details:", uploadError);
    throw uploadError;
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from("portfolio-assets").getPublicUrl(filePath);

  return publicUrl;
};

export const deleteFileResume = async (url: string) => {
  if (!url) return;

  try {
    const path = url.split("/").slice(-2).join("/");

    const { error } = await supabase.storage
      .from("portfolio-assets")
      .remove([path]);

    if (error) console.error("Delete error:", error.message);
  } catch (err) {
    console.error("Failed to delete old file:", err);
  }
};
