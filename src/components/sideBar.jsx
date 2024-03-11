import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { SideBarUser } from "./sidebarUser";
import { SideBarItems } from "./sideBarItems";

export const SideBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <aside className="h-screen">
      <div className="flex flex-col h-full bg-slate-800 border-r shadow-sm">
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-dark-purple h-screen p-5 relative duration-300`}
        >
          <div>
            <FontAwesomeIcon
              icon={faArrowAltCircleLeft}
              className={`bg-white text-inevitable-blue text-3xl rounded-full absolute -right-3 top-9 border border-inevitable-blue cursor-pointer ${
                !open && "rotate-180"
              }`}
              onClick={() => setOpen(!open)}
            />

            <div className="flex gap-x-4 items-center justify-center">
              <img
                src="./src/assets/logo.png"
                alt="Logo"
                className={`cursor-pointer duration-500 w-[200px]  ${
                  open && "rotate-[360deg]"
                }`}
              />
            </div>
            <div className=" ">
              <SideBarItems />
            </div>
          </div>
        </div>
        <SideBarUser />
      </div>
    </aside>
  );
};
