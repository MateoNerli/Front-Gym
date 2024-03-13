import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SideBarMenu } from "../../utils/sideBar";

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
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
