import { SideBarUser } from "./sidebarUser";
import { SideBarItems } from "./sideBarItems";

export const SideBar = () => {
  return (
    <aside className="md:h-screen md:fixed md:z-40 md:border-gray-300">
      <div className="hidden sm:block md:flex flex-col h-full bg-slate-800 border-r shadow-sm ">
        <div className="w-72  h-screen p-5 pt-8 relative duration-300 flex flex-col">
          <div className="flex gap-x-4 items-center justify-center">
            <img
              src="../src/assets/logo.png"
              alt="Logo"
              className="cursor-pointer duration-500 w-[200px]"
            />
          </div>
          <div className="overflow-y-auto overflow-x-hidden flex-grow custom-scrollbar">
            <SideBarItems />
          </div>
          <div className="border-t-2">
            <SideBarUser />
          </div>
        </div>
      </div>
    </aside>
  );
};
