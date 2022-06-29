import React from "react";

export const Hamburger = ({ toggled }) => {
  return (
    <div className="relative block w-full h-full outline outline-1 rounded-md group p-1">
      <span
        className={`block line__1 rounded ease-in duration-200 w-7 h-[3px] bg-black ${
          toggled === true ? "w-0" : ""
        }`}
      ></span>
      <span
        className={`block line__2 rounded ease-in my-1 duration-200 w-7 delay-75 h-[3px] bg-black ${
          toggled === true ? "w-0" : ""
        }`}
      ></span>
      <span
        className={`block line__3 rounded ease-in duration-200 w-7 delay-150 h-[3px] bg-black ${
          toggled === true ? "w-0" : ""
        }`}
      ></span>
      <span
        className={`block ${
          toggled === true ? "visible w-7" : "invisible w-0"
        } ease-out duration-200 delay-150 h-[3px] rounded absolute top-[42%] left-1 rotate-45 bg-black`}
      ></span>
      <span
        className={`block ${
          toggled === true ? "visible w-7" : "invisible w-0"
        } ease-out duration-200 delay-200 h-[3px] rounded absolute top-[42%] right-1 rotate-[-45deg] bg-black`}
      ></span>
    </div>
  );
};
