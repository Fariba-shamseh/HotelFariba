import React from "react";
import { useForm } from "react-hook-form";
import { useCreateRoom } from "./useCreateRoom.js";
import { useEditRoom } from "./useEditRoom.js";
import FormRow from "./FormRow.jsx";

const CreateRoomForm = ({ roomToEdit = {} }) => {
  const { id: editId, ...editValues } = roomToEdit;
  const isEditSession = Boolean(editId);
  // console.log("roomToEdit in CreateRoomForm:", roomToEdit);
  // console.log("editValues:", editValues);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { isCreating, createRoom } = useCreateRoom();
  const { isEditing, editRoom } = useEditRoom();
  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    console.log("data.image =", data.image);

    const image =
      typeof data.image === "string" ? data.image : data.image?.[0] || null;

    if (isEditSession)
      editRoom(
        { newRoomData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            console.log("editRoom", data);
            // reset();
          },
        },
      );
    else
      createRoom(
        { newRoomData: { ...data, image } },
        {
          onSuccess: (data) => {
            console.log("createRoom", data);
            reset();
          },
        },
      );
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        {isEditSession ? "ویرایش اتاق" : "افزودن اتاق جدید"}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* نام اتاق */}
        <FormRow
          label="نام اتاق"
          id="name"
          name="name"
          type="text"
          register={register}
          placeholder="مثال: اتاق دلوکس"
          disabled={isWorking}
          validation={{
            required: "نام اتاق الزامی است",
          }}
          error={errors.name?.message}
        />

        {/* ظرفیت */}
        <FormRow
          label="ظرفیت "
          id="maxCapacity"
          name="maxCapacity"
          type="number"
          register={register}
          placeholder="مثال: 2"
          disabled={isWorking}
          validation={{
            required: "ظرفیت الزامی است",
            min: { value: 1, message: "ظرفیت باید حداقل 1 باشد" },
          }}
          error={errors.maxCapacity?.message}
        />

        {/* قیمت */}
        <FormRow
          label="قیمت (تومان)"
          id="regularPrice"
          name="regularPrice"
          type="number"
          register={register}
          placeholder="مثال: 500000"
          disabled={isWorking}
          validation={{
            required: "قیمت الزامی است",
            min: { value: 0, message: "قیمت نمی‌تواند منفی باشد" },
          }}
          error={errors.regularPrice?.message}
        />

        {/* تخفیف */}
        <FormRow
          label="تخفیف (تومان)"
          id="discount"
          name="discount"
          type="number"
          register={register}
          placeholder="مثال: 50000"
          disabled={isWorking}
          validation={{
            required: "تخفیف الزامی است",
            min: { value: 0, message: "قیمت نمی‌تواند منفی باشد" },
          }}
          error={errors.discount?.message}
        />

        {/* توضیحات */}
        <FormRow
          label="توضیحات"
          id="description"
          name="description"
          type="textarea"
          register={register}
          placeholder="توضیحات اتاق را وارد کنید..."
          disabled={isWorking}
          rows="4"
          error={errors.discount?.message}
        />

        {/* تصویر */}
        <FormRow
          label="تصویر اتاق"
          id="image"
          type="file"
          name="image"
          accept="image/*"
          register={register}
          disabled={isWorking}
        />

        {/* دکمه ارسال */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isCreating}
            className="w-full bg-gradient-to-r from-[#7fc1cf] to-[#2c93a2] text-white p-3 rounded-lg hover:from-[#6ab1bf] hover:to-[#1c8392] transition-colors duration-200"
          >
            {isWorking
              ? "در حال پردازش..."
              : isEditSession
                ? "به‌روزرسانی"
                : "ثبت اتاق"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRoomForm;
