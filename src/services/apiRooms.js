import supabase from "./supabase.js";

export async function getRooms() {
  let { data, error } = await supabase.from("rooms").select("*");
  if (error) {
    throw new Error("بارگذاری اتاق‌ها انجام نشد");
  }
  return data;
}

//-------------------------------------------------------------------------------

// export async function createRoom(newRoom) {
//   try {
//     // 1. ایجاد اتاق با مسیر موقت تصویر
//     const fileExt = newRoom.image.name.split(".").pop();
//     const filePath = `${Date.now()}-${Math.floor(Math.random() * 1000)}.${fileExt}`; // حذف fileName
//
//     const { data, error } = await supabase
//       .from("rooms")
//       .insert([{ ...newRoom, image: filePath }])
//       .select()
//       .single();
//
//     if (error) {
//       throw new Error("ثبت اتاق انجام نشد: " + error.message);
//     }
//
//     // بررسی وجود id (برای رفع خطای Unresolved variable id)
//     if (!data.id) {
//       throw new Error("شناسه اتاق معتبر نیست");
//     }
//
//     // 2. آپلود تصویر
//     const { error: storageError } = await supabase.storage
//       .from("rooms")
//       .upload(filePath, newRoom.image);
//
//     if (storageError) {
//       await supabase.from("rooms").delete().eq("id", data.id);
//       throw new Error("خطا در آپلود تصویر: " + storageError.message);
//     }
//
//     // 3. به‌روزرسانی URL واقعی تصویر
//     const { data: publicUrlData } = await supabase.storage
//       .from("rooms")
//       .getPublicUrl(filePath);
//     const imageUrl = publicUrlData.publicUrl;
//
//     const { error: updateError } = await supabase
//       .from("rooms")
//       .update({ image: imageUrl })
//       .eq("id", data.id);
//
//     if (updateError) {
//       await supabase.from("rooms").delete().eq("id", data.id);
//       throw new Error("خطا در به‌روزرسانی URL تصویر: " + updateError.message);
//     }
//
//     return data;
//   } catch (error) {
//     console.error("خطا:", error.message);
//   }
// }

//-------------------------------------------------------------------------------

export async function createEditRoom(newRoom, id) {
  let imageUrl = newRoom.image;

  // Check if a new image file has been uploaded
  const isFileObject = newRoom.image instanceof File;

  if (isFileObject) {
    // Generate a unique image name
    const fileName = newRoom.image.name.split("/").pop();
    const imageName = `${Math.random()}-${fileName}`.replaceAll("/", "");

    // Upload image to Supabase storage
    const { error: uploadError } = await supabase.storage
      .from("rooms")
      .upload(imageName, newRoom.image);

    if (uploadError) {
      console.error(uploadError);
      throw new Error("آپلود عکس با خطا مواجه شد");
    }

    // Retrieve the public URL of the uploaded image
    const {
      data: { publicUrl },
      error: urlError,
    } = await supabase.storage.from("rooms").getPublicUrl(imageName);

    if (urlError) {
      throw new Error("دریافت URL شکست خورد: " + urlError.message);
    }

    imageUrl = publicUrl;
  }

  // Prepare the final room data with the image URL
  const roomData = { ...newRoom, image: imageUrl };

  let query = supabase.from("rooms");
  let dbResponse;

  // Insert a new room if no ID is provided, otherwise update existing room
  if (!id) {
    dbResponse = await query.insert([roomData]).select().single();
  } else {
    dbResponse = await query.update(roomData).eq("id", id).select().single();
  }

  const { data, error } = dbResponse;

  if (error) {
    console.error(error);
    throw new Error(
      id ? "ویرایش اتاق ناموفق بود" : "افزودن اتاق با خطا مواجه شد",
    );
  }

  return data;
}
