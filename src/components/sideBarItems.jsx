import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { SideBarMenu } from "../utils/sideBar";

export const SideBarItems = ({ open, setOpen }) => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const toggleSubMenu = (menuItem) => {
    if (activeMenuItem === menuItem) {
      setActiveMenuItem(null);
    } else {
      setActiveMenuItem(menuItem);
      if (!open) {
        setOpen(true);
      }
    }
  };

  return (
    <>
      <ul className="pt-8 ">
        {SideBarMenu.map((item, index) => (
          <li
            key={index}
            className={`flex flex-col p-2 cursor-pointer text-gray-300 text-sm items-start gap-x-4 hover:bg-slate-200 hover:text-black rounded-md transition duration-300`}
            onClick={() => toggleSubMenu(item)}
          >
            <Link
              to={item.link}
              className="flex items-center gap-x-4"
              title={item.title}
            >
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
            </Link>
            {open && item.submenu && activeMenuItem === item && (
              <ul className="pl-6 mt-2" style={{ listStyleType: "disc" }}>
                {item.submenu.map((subItem, subIndex) => (
                  <Link to={subItem.link} key={subIndex}>
                    <li
                      key={subIndex}
                      className="p-2 hover:bg-slate-400 hover:underline hover:text-black cursor-pointer rounded-md "
                    >
                      {subItem.title}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
