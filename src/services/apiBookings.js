import supabase from "./supabase.js";

export async function getBookings() {
  // const { data, error } = await supabase.from("bookings").select("*");

  const { data, error } = await supabase
    .from("bookings")
    .select(
      "id,created_at,startDate,endDate,numNights,numGuests,status,totalPrice,rooms(name),guests(fullName,email)",
    );
  if (error) {
    console.error(error);
    throw new Error("امکان بارگذاری رزرو وجود ندارد");
  }
  return data;
}
