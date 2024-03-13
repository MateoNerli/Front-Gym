import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export const CardUser = ({ tableItems }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center md:justify-center lg:hidden">
        {tableItems.map((item, idx) => (
          <div
            key={idx}
            className="max-w-sm w-full mb-4 bg-white border rounded-lg"
          >
            <div className="flex">
              <img
                className="w-1/4 h-auto mr-4 rounded-lg"
                src={item.avatar}
                alt={item.name}
              />
              <div className="flex-1">
                <h3 className="text-gray-800 text-lg font-semibold">
                  {item.name}
                </h3>
                <p className="text-gray-600">{item.phone_nimber}</p>
                <p className="text-gray-600">{item.position}</p>
                <p className="text-gray-600">{item.salary}</p>
                <span
                  className={`px-3 py-2 rounded-full font-semibold text-xs ${
                    item.status == "Active"
                      ? "text-green-600 bg-green-50"
                      : "text-red-600 bg-red-50"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>
            <div className="p-2">
              <p className="text-gray-600">{item.email}</p>
            </div>
            <div className="flex justify-between mt-2 pb-2 px-2">
              <button className="flex items-center px-3 py-2 bg-gray-200 text-gray-800 rounded-lg mr-2">
                <FontAwesomeIcon icon={faEdit} className="mr-1" />
                Editar
              </button>
              <button className="flex items-center px-3 py-2 bg-red-200 text-red-800 rounded-lg">
                <FontAwesomeIcon icon={faTrash} className="mr-1" />
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
