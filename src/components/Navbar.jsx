import React, { useState } from "react";
// import menu from '../assets/menu.png';
import logo from '../assets/logo.svg';

const menu = (
  <svg width="24" height="24">
    <path
      d="M5 6h14M5 12h14M5 18h14"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    ></path>
  </svg>
);

const cross = (
  <svg viewBox="0 0 10 10" class="w-2.5 h-2.5 overflow-visible">
    <path
      d="M0 0L10 10M10 0L0 10"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    ></path>
  </svg>
);

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const darkIcon = document.getElementById("theme-toggle-dark-icon");
  const lightIcon = document.getElementById("theme-toggle-light-icon");

  const handleToggle = () => {
    setDarkTheme(!darkTheme);

    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
    }
    console.log(localStorage.getItem("color-theme"));
  };

  if (darkTheme === true) {
    lightIcon?.classList.add("hidden");
    darkIcon?.classList.remove("hidden");
  } else if (darkTheme === false) {
    darkIcon?.classList.add("hidden");
    lightIcon?.classList.remove("hidden");
  }

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between py-3 px-5 items-center border-b">
      <div className="font-medium uppercase cursor-pointer"><img src={logo} alt='logo' className="h-7"/></div>
      <div className="hidden md:block">
        <ul className="flex gap-10">
          <li className="cursor-pointer py-1 px-2 hover:border-b dark:border-white border-slate-400">
            Home
          </li>
          <li className="cursor-pointer py-1 px-2 hover:border-b dark:border-white border-slate-400">
            Product
          </li>
          <li className="cursor-pointer py-1 px-2 hover:border-b dark:border-white border-slate-400">
            Testimonials
          </li>
          <li className="cursor-pointer py-1 px-2 hover:border-b dark:border-white border-slate-400">
            Contact
          </li>
          <li className="cursor-pointer py-1 px-2 hover:border-b dark:border-white border-slate-400">
            Footer
          </li>
          <li>
            <button
              id="theme-toggle"
              onClick={handleToggle}
              type="button"
              className="text-cyan-500 dark:text-cyan-500 focus:outline-none text-sm p-2"
            >
              <svg
                id="theme-toggle-light-icon"
                className="hidden w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              <svg
                id="theme-toggle-dark-icon"
                className="hidden w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </div>
      <div className="block md:hidden">
        <div className="flex justify-end">
          <button onClick={handleOpen} className="dark:text-white  text-black">
            {isOpen ? cross : menu}
          </button>
          <div className={`${isOpen ? 'flex' : 'hidden'} dark:bg-slate-600 bg-slate-50 absolute top-14 right-0 w-6/12 h-[300px]`}>
          <ul className="flex flex-col mx-auto text-center gap-5">
          <li className="cursor-pointer py-1 px-2 hover:border-b dark:border-white border-slate-400">
            Home
          </li>
          <li className="cursor-pointer py-1 px-2 hover:border-b dark:border-white border-slate-400">
            Product
          </li>
          <li className="cursor-pointer py-1 px-2 hover:border-b dark:border-white border-slate-400">
            Testimonials
          </li>
          <li className="cursor-pointer py-1 px-2 hover:border-b dark:border-white border-slate-400">
            Contact
          </li>
          <li className="cursor-pointer py-1 px-2 hover:border-b dark:border-white border-slate-400">
            Footer
          </li>
          <li>
            <button
              id="theme-toggle"
              onClick={handleToggle}
              type="button"
              className="text-cyan-500 dark:text-cyan-500 focus:outline-none text-sm p-2"
            >
              <svg
                id="theme-toggle-light-icon"
                className="hidden w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              <svg
                id="theme-toggle-dark-icon"
                className="hidden w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
