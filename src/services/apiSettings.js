import supabase from "./supabase.js";

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();
  if (error) {
    console.log(error);
    throw new Error("");
  }
  return data;
}

export async function updateSettings(newSetting) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    .eq("id", 1)
    .select();

  if (error) {
    console.error(error);
    throw new Error("نمیتواند تنظیمات را آپدیت کند");
  }

  return data;
}
