import { useRef, useState } from "react";
import { SideBarMenu } from "../../utils/itemMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { SideBarUser } from "./sidebarUser";

export const NavBar = () => {
  const [state, setState] = useState(false);
  const navRef = useRef();

  return (
    <nav ref={navRef} className="bg-slate-800 w-full top-0 z-20 md:hidden">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:px-8 lg:flex">
        <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
          <a href="">
            <img
              src="../src/assets/logo.png"
              width={40}
              height={40}
              alt="Gym logo"
            />
          </a>
          <div className="lg:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <FontAwesomeIcon icon={faTimes} className="text-white" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="text-white" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {SideBarMenu.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-gray-400 hover:text-white flex items-center relative hover:border-b hover:border-white"
                >
                  <FontAwesomeIcon icon={item.icon} className="mr-2" />
                  <a
                    href={item.link}
                    className="block py-2 px-4 rounded-md transition-colors duration-300 ease-in-out relative"
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center border-t-2 justify-center">
            <SideBarUser />
          </div>
        </div>
      </div>
    </nav>
  );
};
