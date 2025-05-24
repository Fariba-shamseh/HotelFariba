import React from "react";

const Account = () => {
  const imageUrl =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/8d2e8edb3ff95e16c1d0f1f74409a589e2281162?placeholderIfAbsent=true";

  return (
    <div className="relative h-[600px] w-full bg-gray-900 flex flex-col items-center justify-start gap-8 py-4">
      {/* پس‌زمینه با افکت بلور */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>
      {/* تصاویر با سایه زرد فقط در راست و پایین */}
      <img
        src={imageUrl}
        alt="Image 1"
        className="relative h-48 w-64 object-cover rounded-lg shadow-[10px_10px_20px_rgba(255,215,0,0.5)]"
      />
      <img
        src={imageUrl}
        alt="Image 2"
        className="relative h-48 w-64 object-cover rounded-lg shadow-[10px_10px_20px_rgba(255,215,0,0.5)]"
      />
      <img
        src={imageUrl}
        alt="Image 3"
        className="relative h-48 w-64 object-cover rounded-lg shadow-[10px_10px_20px_rgba(255,215,0,0.5)]"
      />
      <img
        src={imageUrl}
        alt="Image 4"
        className="relative h-48 w-64 object-cover rounded-lg shadow-[10px_10px_20px_rgba(255,215,0,0.5)]"
      />
    </div>
  );
};

export default Account;
