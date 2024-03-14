import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

export const SideBarUser = () => {
  return (
    <div className=" flex pt-5  ">
      <img
        src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
        alt=""
        className="w-10 h-10 rounded-md"
      />
      <div
        className={`
      flex justify-between items-center
        overflow-hidden transition-all duration-300 
    `}
      >
        <div className="leading-4 ml-2">
          <h4 className="font-semibold text-slate-300">Nombre apellido</h4>
          <span className="text-xs text-gray-400">nombre@gmail.com</span>
        </div>
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          className="text-gray-200 ml-10"
        />
      </div>
    </div>
  );
};
