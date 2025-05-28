import React from "react";

const Pagination = ({ count }) => {
  return (
    <div>
      <p>
        نمایش <span>1</span> تا <span>10</span> از <span>{count}</span>
      </p>
      <button></button>
    </div>
  );
};

export default Pagination;
