import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { SideBarMenu } from "../utils/sideBar";

export const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const toggleSubMenu = (menuItem) => {
    if (activeMenuItem === menuItem) {
      setActiveMenuItem(null);
    } else {
      setActiveMenuItem(menuItem);
    }
  };

  return (
    <div className="flex bg-slate-800">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5 pt-8 relative duration-300`}
      >
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          className={`bg-white text-inevitable-blue text-3xl rounded-full absolute -right-3 top-9 border border-inevitable-blue cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />

        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            alt="Logo"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
        </div>

        <ul className="pt-6">
          {SideBarMenu.map((item, index) => (
            <li
              key={index}
              className={`flex flex-col p-2 cursor-pointer text-gray-300 text-sm items-start gap-x-4 hover:bg-slate-200 hover:text-black rounded-md transition duration-300`}
              onClick={() => toggleSubMenu(item)}
            >
              <div className="flex items-center gap-x-4">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="w-5 h-5 transition duration-300 text-gray-400 hover:text-black "
                />
                <span className={`${!open && "opacity-0"}`}>{item.title}</span>
                {item.submenu && open && (
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="ml-auto w-4 h-4 cursor-pointer"
                  />
                )}
              </div>
              {open && item.submenu && activeMenuItem === item && (
                <ul className="pl-6 mt-2">
                  {item.submenu.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="p-2 hover:bg-slate-400 hover:underline hover:text-black cursor-pointer rounded-md transition duration-300"
                    >
                      {subItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
