import supabase, { supabaseUrl } from "./supabase.js";
import { format } from "date-fns";

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });
  if (error) throw new Error(error.message);
  return data;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  console.log(data);
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;
  const { data, error } = await supabase.auth.getUser();
  console.log(data);
  if (error) throw new Error(error.message);
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  // 1. Update password OR fullName

  let updateData = {};
  // اگر پسورد وجود داره، به updateData اضافه کن
  if (password) updateData.password = password;
  // اگر fullName وجود داره، به data در updateData اضافه کن
  if (fullName) updateData.data = { ...updateData.data, fullName };

  console.log("updateData:", updateData);
  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);
  if (!avatar) return data;

  // 2. Upload the avatar image

  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);
  if (storageError) throw new Error(storageError.message);

  // 3.Update avatar in the user
  const { data: updatedUser, error: error2 } = supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  if (error2) throw new Error(error2.message);
  return updatedUser;
}

export async function getBookingsAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("created_at,totalPrice,extrasPrice")
    .gte("created_at", "2025-01-01T00:00:00.000Z") // بازه بزرگ
    .lt("created_at", "2025-12-31T23:59:59.999Z");
  if (error) {
    console.error("error:", error);
    throw new Error("Bookings could not be loaded");
  }

  return data;
}

export async function getStaysAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*,guests(fullName)")
    .gte("startDate", date)
    .lt("startDate", format.getToday());

  if (error) {
    console.error("error:", error);
    throw new Error("Bookings could not be loaded");
  }

  return data;
}
