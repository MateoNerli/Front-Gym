import { useEffect, useState } from "react";
import { CardUser } from "./cardUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";
import { useFetch } from "../../../hooks/useFetch";

export const TableUser = () => {
  const [tableItems, setTableItems] = useState([]);
  const { data: fetchedData, loading } = useFetch(
    "http://localhost:3000/users/list"
  );

  useEffect(() => {
    if (!loading && fetchedData) {
      setTableItems(fetchedData.data);
    }
  }, [loading, fetchedData]);

  return (
    <>
      <table className="w-full table-auto text-sm text-left hidden lg:table">
        <thead className="bg-gray-50 text-gray-600 font-medium border-b text-center">
          <tr>
            <th className="py-3 px-6 text-left">Usuario</th>
            <th className="py-3 px-6">Telefono</th>
            <th className="py-3 px-6">Estado</th>
            <th className="py-3 px-6">Acciones</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 divide-y">
          {tableItems.map((item, index) => (
            <tr key={index}>
              <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap text-left">
                <img
                  src="../../../src/assets/perfil.jpg"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <span className="block text-gray-700 text-sm font-medium">
                    {item.nombre} {item.apellido}
                  </span>
                  <span className="block text-gray-700 text-xs">
                    {item.correo}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                {item.telefono}
              </td>

              <td className="pr-6 py-4 whitespace-nowrap text-center">
                <span
                  className={`px-3 py-2 rounded-full font-semibold text-xs ${
                    item.estado === 1
                      ? "text-green-600 bg-green-50"
                      : "text-red-600 bg-red-50"
                  }`}
                >
                  {item.estado === 1 ? "Active" : "Inactive"}
                </span>
              </td>
              <td className="text-right px-6 whitespace-nowrap">
                <div className="flex justify-center">
                  <button className="bg-yellow-200 flex items-center p-2 text-gray-800 rounded-lg mr-2  ">
                    <FontAwesomeIcon icon={faEye} className="mr-1" />
                  </button>
                  <button className="flex items-center p-2  bg-gray-200 text-gray-800 rounded-lg mr-2">
                    <FontAwesomeIcon icon={faEdit} className="mr-1" />
                  </button>
                  <button className="flex items-center p-2 bg-red-200 text-red-800 rounded-lg">
                    <FontAwesomeIcon icon={faTrash} className="mr-1" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <CardUser tableItems={tableItems} />
    </>
  );
};
