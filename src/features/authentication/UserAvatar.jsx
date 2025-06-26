import React from "react";
import { useUser } from "./UseUser.js";

const UserAvatar = () => {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;

  return (
    <div className="flex items-center gap-2">
      <img
        src={avatar || "Capture.png"}
        alt=""
        className="w-8 h-8 rounded-full object-cover border border-gray-300"
      />
      <div className="text-sm font-medium text-gray-700">{fullName}</div>
    </div>
  );
};

export default UserAvatar;
