import React from "react";
import { useSettings } from "./useSettings.js";
import { useForm } from "react-hook-form";
import { useUpdateSetting } from "./useUpdateSetting.js";
import FormRow from "../rooms/FormRow.jsx";
import Spinner from "../../ui/Spinner.jsx";

const UpdateSettingsForm = () => {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();

  const {
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      minBookingLength: minBookingLength || "",
      maxBookingLength: maxBookingLength || "",
      maxGuestsPerBooking: maxGuestsPerBooking || "",
      breakfastPrice: breakfastPrice || "",
    },
  });

  const { isUpdating, updateSetting } = useUpdateSetting();

  if (isLoading) return <Spinner />;

  function handleUpdate(e, field) {
    const { value } = e.target; // === e.target.value
    if (!value) return;
    updateSetting({ [field]: value });
  }

  const CustomFormRow = (props) => (
    <FormRow labelClassName="w-38 md:w-45" {...props} />
  );

  return (
    <div className="max-w-[800px] w-full mx-auto px-4 lg:px-8 py-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          تنظیمات رزرو
        </h2>
        <div className="space-y-6">
          <CustomFormRow
            label="حداقل شب‌های رزرو"
            id="minBookingLength"
            name="minBookingLength"
            type="number"
            register={register}
            defaultValue={minBookingLength}
            disabled={isUpdating}
            onBlur={(e) => handleUpdate(e, "minBookingLength")}
            validation={{
              required: "حداقل شب‌های رزرو الزامی است",
              min: { value: 1, message: "حداقل باید 1 شب باشد" },
            }}
            error={errors.minBookingLength?.message}
          />
          <CustomFormRow
            label="حداکثر شب‌های رزرو"
            id="maxBookingLength"
            name="maxBookingLength"
            type="number"
            register={register}
            defaultValue={maxBookingLength}
            disabled={isUpdating}
            onBlur={(e) => handleUpdate(e, "maxBookingLength")}
            validation={{
              required: "حداکثر شب‌های رزرو الزامی است",
              min: { value: 1, message: "حداکثر باید حداقل 1 شب باشد" },
            }}
            error={errors.maxBookingLength?.message}
          />
          <CustomFormRow
            label="حداکثر تعداد مهمان"
            id="maxGuestsPerBooking"
            name="maxGuestsPerBooking"
            type="number"
            register={register}
            defaultValue={maxGuestsPerBooking}
            disabled={isUpdating}
            onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
            validation={{
              required: "حداکثر تعداد مهمان الزامی است",
              min: { value: 1, message: "حداقل باید 1 مهمان باشد" },
            }}
            error={errors.maxGuestsPerBooking?.message}
          />
          <CustomFormRow
            label="قیمت صبحانه (تومان)"
            id="breakfastPrice"
            name="breakfastPrice"
            type="number"
            register={register}
            defaultValue={breakfastPrice}
            disabled={isUpdating}
            onBlur={(e) => handleUpdate(e, "breakfastPrice")}
            validation={{
              required: "قیمت صبحانه الزامی است",
              min: { value: 0, message: "قیمت نمی‌تواند منفی باشد" },
            }}
            error={errors.breakfastPrice?.message}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateSettingsForm;
