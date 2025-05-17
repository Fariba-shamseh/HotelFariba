import supabase from "./supabase.js";

export async function getRooms() {
  let { data, error } = await supabase.from("rooms").select("*");
  if (error) {
    throw new Error("بارگذاری اتاق‌ها انجام نشد");
  }
  return data;
}

//-------------------------------------------------------------------------------

export async function createRoom(newRoom) {
  const { data, error } = await supabase
    .from("rooms")
    .insert([newRoom])
    .select();

  if (error) {
    throw new Error("ثبت اتاق‌ انجام نشد");
  }
  return data;
}
