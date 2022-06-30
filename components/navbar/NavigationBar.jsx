import React, { useEffect, useState } from "react";
import { Hamburger } from "../Hamburger";
import Link from "next/link";

export const NavigationBar = () => {
  const [visible, setVisible] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [list, setList] = useState("");

  const myStyle = `nav-list text-black pl-1 max-h-0 lg:max-h-full lg:visible mt-2 lg:mt-0 lg:space-x-3 overflow-hidden lg:overflow-visible transition-all duration-300 ${
    visible ? "visible" : "invisible"
  }`;

  let navList;

  const closeNav = () => {
    if (visible) {
      setVisible(false);
      list.removeAttribute("style");
    }
  };

  const navResponsive = () => {
    if (navList.classList.contains("visible")) {
      setVisible(false);
      navList.removeAttribute("style");
    } else {
      setVisible(true);
      navList.style.maxHeight = navList.scrollHeight + "px";
    }
  };

  const navScroll = () => {
    if (scrollY > 20) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  useEffect(() => {
    const togler = document.querySelector(".nav-togler");
    navList = document.querySelector(".nav-list");
    if (!togler || !navList) return;
    setList(navList);
    togler.addEventListener("click", navResponsive);
    window.addEventListener("scroll", navScroll);
  }, [navList]);
  return (
    <nav
      className={`fixed top-0 z-30 w-full bg-white ${
        shadow ? "shadow-md" : "shadow-none"
      } transition-all duration-300`}
    >
      <div className="relative w-full h-auto max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center py-3 px-2">
        <button className="nav-togler cursor-pointer absolute top-5 right-3 block text-2xl w-9 h-auto lg:hidden">
          <Hamburger toggled={visible} />
        </button>
        <Link href={"/"}>
          <h1
            className="text-blue-300 text-3xl font-semibold font-cs-sans cursor-pointer"
            onClick={closeNav}
          >
            Cuy <span className="text-black font-cs-alegreya">Blog</span>
          </h1>
        </Link>
        <ul className={myStyle}>
          <Link href={"/"}>
            <li className="block cursor-pointer lg:inline-block">Read</li>
          </Link>
          <Link href={"/about"}>
            <li className="block cursor-pointer lg:inline-block">About</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
