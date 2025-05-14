import React, { useEffect } from "react";
import { getRooms } from "../services/apiRooms.js";

const Rooms = () => {
  useEffect(() => {
    getRooms().then((data) => console.log(data));
  });
  return (
    <div>
      <h1>Rooms</h1>
    </div>
  );
};

export default Rooms;
