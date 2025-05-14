import supabase from "./supabase.js";

export async function getRooms() {
  let { data, error } = await supabase.from("rooms").select("*");
  if (error) {
    throw new Error("بارگذاری اتاق‌ها انجام نشد");
  }
  return data;
}

//-------------------------------------------------------------------------------
