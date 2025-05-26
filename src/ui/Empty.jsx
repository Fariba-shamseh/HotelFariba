import React from "react";

const Empty = ({ resourceName }) => {
  return (
    <div>
      <p> {resourceName} یافت نشد ☹ </p>
    </div>
  );
};

export default Empty;
