import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

export const SideBarUser = () => {
  return (
    <div className="border-t flex p-5 pt-8">
      <img
        src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
        alt=""
        className="w-10 h-10 rounded-md"
      />
      <div
        className={`
      flex justify-between items-center
        overflow-hidden transition-all ${open ? "w-52 ml-3" : "w-0"}
    `}
      >
        <div className="leading-4">
          <h4 className="font-semibold text-slate-300">Nombre apellido</h4>
          <span className="text-xs text-gray-400">nombre@gmail.com</span>
        </div>
        <FontAwesomeIcon icon={faEllipsisVertical} className="text-gray-200" />
      </div>
    </div>
  );
};
