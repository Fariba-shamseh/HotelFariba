import React from "react";

const FormRow = ({
  label = "",
  id,
  type = "text",
  name,
  placeholder,
  disabled,
  validation = {},
  register,
  error,
  labelClassName = "",
  ...rest
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className={`${labelClassName}block text-sm font-medium text-gray-700 mb-1`}
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          {...register(name, validation)}
          placeholder={placeholder}
          disabled={disabled}
          {...rest}
          className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          {...register(name, validation)}
          placeholder={placeholder}
          disabled={disabled}
          {...rest}
          className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormRow;
