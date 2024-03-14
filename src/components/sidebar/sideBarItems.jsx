import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SideBarMenu } from "../../utils/itemMenu";

export const SideBarItems = () => {
  return (
    <>
      <ul className="pt-8 ">
        {SideBarMenu.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-x-4 p-2 duration-300 hover:bg-dark-purple text-gray-400 hover:text-white"
          >
            <Link
              to={item.link}
              className="flex items-center gap-x-4"
              title={item.title}
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="w-5 h-5 transition duration-300 text-gray-400 hover:text-white "
              />
              <span className={`!open && "opacity-0"}`}>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
