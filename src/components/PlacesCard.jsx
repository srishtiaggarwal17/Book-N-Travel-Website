import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";


const PlacesCard = ({ img, title, location, description, price, type, handleOrderPopup}) => {
  return (
    <div onClick={handleOrderPopup}
    className="shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer rounded-md overflow-hidden bg-white">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={img}
          alt={title}
          className="mx-auto h-[220px] w-full object-cover transition duration-700 
          hover:skew-x-2 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="space-y-2 p-4">
        <h1 className="line-clamp-1 font-bold text-xl">{title}</h1>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-600">
          {/* <IoLocateSharp className="text-lg text-red-600"/> */}
          <FaMapMarkerAlt />

          <span>{location}</span>
        </div>

        {/* Description */}
        <p className="line-clamp-2 text-gray-700">{description}</p>

        {/* Footer */}
        <div className="flex items-center justify-between border-t pt-3 mt-3 text-sm text-gray-600">
          <p>{type}</p>
          <p className="text-xl font-bold text-black">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default PlacesCard;









