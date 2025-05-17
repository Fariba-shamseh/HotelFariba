import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createRoom } from "../../services/apiRooms.js";

const CreateRoomForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate } = useMutation({
    mutationFn: createRoom,
    onSuccess: () => {
      toast.success("اتاق جدید با موفقیت اضافه شد");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  const onSubmit = (data) => {
    console.log("Submitted data:", data);
    // mutate(data);
    // آماده‌سازی داده‌ها قبل از ارسال
    const preparedData = {
      name: data.name,
      maxCapacity: parseInt(data.maxCapacity), // تبدیل به عدد
      regularPrice: parseInt(data.regularPrice), // تبدیل به عدد
      discount: parseInt(data.discount), // تبدیل به عدد
      description: data.description || "", // مدیریت مقدار خالی
      image: data.image && data.image.length > 0 ? data.image[0] : null, // گرفتن اولین فایل
    };

    console.log("Prepared data:", preparedData);
    mutate(preparedData);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        افزودن اتاق جدید
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* نام اتاق */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            نام اتاق
          </label>
          <input
            id="name"
            type="text"
            {...register("name", { required: "نام اتاق الزامی است" })}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="مثال: اتاق دلوکس"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* ظرفیت */}
        <div>
          <label
            htmlFor="maxCapacity"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            ظرفیت (نفر)
          </label>
          <input
            id="maxCapacity"
            type="number"
            {...register("maxCapacity", {
              required: "ظرفیت الزامی است",
              min: { value: 1, message: "ظرفیت باید حداقل 1 باشد" },
            })}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.maxCapacity ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="مثال: 2"
          />
          {errors.maxCapacity && (
            <p className="text-red-500 text-sm mt-1">
              {errors.maxCapacity.message}
            </p>
          )}
        </div>

        {/* قیمت */}
        <div>
          <label
            htmlFor="regularPrice"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            قیمت (تومان)
          </label>
          <input
            id="regularPrice"
            type="number"
            {...register("regularPrice", {
              required: "قیمت الزامی است",
              min: { value: 0, message: "قیمت نمی‌تواند منفی باشد" },
            })}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.regularPrice ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="مثال: 500000"
          />
          {errors.regularPrice && (
            <p className="text-red-500 text-sm mt-1">
              {errors.regularPrice.message}
            </p>
          )}
        </div>

        {/* تخفیف */}
        <div>
          <label
            htmlFor="discount"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            تخفیف (تومان)
          </label>
          <input
            id="discount"
            type="number"
            {...register("discount", {
              required: "تخفیف الزامی است",
              min: { value: 0, message: "تخفیف نمی‌تواند منفی باشد" },
            })}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.discount ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="مثال: 50000"
          />
          {errors.discount && (
            <p className="text-red-500 text-sm mt-1">
              {errors.discount.message}
            </p>
          )}
        </div>

        {/* توضیحات */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            توضیحات
          </label>
          <textarea
            id="description"
            {...register("description")}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
            rows="4"
            placeholder="توضیحات اتاق را وارد کنید..."
          />
        </div>

        {/* تصویر */}
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            تصویر اتاق
          </label>
          <input
            id="image"
            type="file"
            {...register("image")}
            accept="image/*"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
          />
        </div>

        {/* دکمه ارسال */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isCreating}
            className="w-full bg-gradient-to-r from-[#7fc1cf] to-[#2c93a2] text-white p-3 rounded-lg hover:from-[#6ab1bf] hover:to-[#1c8392] transition-colors duration-200"
          >
            ثبت اتاق
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRoomForm;
