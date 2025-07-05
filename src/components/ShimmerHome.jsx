import React from "react";

const ShimmerHome = () => {
  return (
    <div className="animate-pulse">
      <div className="h-[700px] bg-gray-300 w-full mb-4"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-6">
        {Array(6)
          .fill("")
          .map((_, i) => (
            <div key={i} className="h-60 bg-gray-300 rounded-md"></div>
          ))}
      </div>
      <div className="h-48 bg-gray-300 rounded-md mt-6 mx-6"></div>
      <div className="h-48 bg-gray-300 rounded-md mt-4 mx-6"></div>
    </div>
  );
};

export default ShimmerHome;
