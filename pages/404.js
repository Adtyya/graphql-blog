import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.replace("/");
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <h1 className="text-2xl lg:text-4xl text-black">
        Halaman tidak tersedia cuy 😅
      </h1>
      <h1 className="text-sm lg:text-lg text-black">
        Akan kembali di arahkan ke home
      </h1>
    </div>
  );
};

export default NotFound;
