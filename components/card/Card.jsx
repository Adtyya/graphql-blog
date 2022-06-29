import React from "react";
import formatDate from "../../lib/dateFormatter";

export const Card = ({ img, imgAlt, title, author, date }) => {
  return (
    <div className="relative overflow-hidden shadow-xl w-full h- cursor-pointer rounded group">
      <img
        src={img}
        alt={imgAlt}
        className="w-full object-cover h-full max-w-full max-h-48 lg:max-h-72 rounded lg:group-hover:scale-125 transition-all duration-500"
      />
      <div className="absolute bg-black bottom-0 left-0 w-full h-auto lg:h-[15%] bg-opacity-60 rounded-b lg:group-hover:h-[30%] ease-in duration-300">
        <div className="flex flex-col w-full p-1 space-y-2">
          <h1 className="text-2xl text-white font-semibold p-1">{title}</h1>
          <div className="flex flex-row w-full justify-between p-1">
            <p className="text-sm text-white lg:text-transparent group-hover:text-white ease-out duration-500 font-normal">
              Penulis - {author}
            </p>
            <p className="text-sm text-white lg:text-transparent group-hover:text-white ease-out duration-500 font-normal">
              {formatDate(date)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
