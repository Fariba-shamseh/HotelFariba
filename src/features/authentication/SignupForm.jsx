// SignupForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup.js";
import SpinnerMini from "../../ui/SpinnerMini.jsx";

const SignupForm = () => {
  const { signup, isLoading } = useSignup();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = ({ fullName, email, password }) => {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(), // بعد از ثبت‌نام (موفق یا ناموفق) فرم رو ریست می‌کنه
      },
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          ثبت‌نام
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 sm:space-y-6"
        >
          {/* فیلد نام کامل */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
            >
              نام کامل
            </label>
            <input
              id="fullName"
              placeholder="نام و نام خانوادگی"
              className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              }`}
              {...register("fullName", { required: "نام کامل اجباری است" })}
              disabled={isLoading}
            />
            {errors.fullName && (
              <p className="text-red-600 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* فیلد ایمیل */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
            >
              ایمیل
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@example.com"
              className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              {...register("email", {
                required: "ایمیل اجباری است",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "ایمیل نامعتبر است",
                },
              })}
              disabled={isLoading}
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* فیلد رمز عبور */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
            >
              رمز عبور
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              {...register("password", {
                required: "رمز عبور اجباری است",
                minLength: {
                  value: 6,
                  message: "رمز عبور باید حداقل ۶ کاراکتر باشد",
                },
              })}
              disabled={isLoading}
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* دکمه ثبت‌نام */}
          <button
            type="submit"
            className="w-full py-2 sm:py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base flex items-center justify-center min-h-[48px] sm:min-h-[60px]"
            disabled={isLoading}
          >
            {!isLoading ? "ثبت‌نام" : <SpinnerMini />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
