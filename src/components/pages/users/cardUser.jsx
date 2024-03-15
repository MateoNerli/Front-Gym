import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";

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
                src="../../../src/assets/perfil.jpg"
                alt={item.nombre}
              />
              <div className="flex-1">
                <h3 className="text-gray-800 text-lg font-semibold">
                  {item.nombre} {item.apellido}
                </h3>
                <p className="text-gray-600">{item.telefono}</p>
                <p className="text-gray-600">{item.direccion}</p>
                <span
                  className={`px-3 py-2 rounded-full font-semibold text-xs ${
                    item.estado === 1
                      ? "text-green-600 bg-green-50"
                      : "text-red-600 bg-red-50"
                  }`}
                >
                  {item.estado === 1 ? "Activo" : "Inactivo"}
                </span>
              </div>
            </div>
            <div className="p-2">
              <p className="text-gray-600">{item.correo}</p>
            </div>
            <div className="flex justify-between mt-2 pb-2 px-2">
              <button className="flex items-center px-3 py-2 bg-yellow-300 text-gray-800 rounded-lg mr-2">
                <FontAwesomeIcon icon={faEye} className="mr-1" />
                Ver
              </button>
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
