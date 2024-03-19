import { useEffect, useState } from "react";
import { CardUser } from "./cardUser";
import { useFetch } from "../../../hooks/useFetch";
import { Acctions } from "./acctions";

export const TableUser = () => {
  const [tableItems, setTableItems] = useState([]);
  const { data: fetchedData, loading } = useFetch(
    "http://localhost:3000/users/clientes"
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
                    {item.persona.nombre} {item.persona.apellido}
                  </span>
                  <span className="block text-gray-700 text-xs">
                    {item.persona.correo}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                {item.persona.telefono}
              </td>
              <td className="pr-6 py-4 whitespace-nowrap text-center">
                <span
                  className={`px-3 py-2 rounded-full font-semibold text-xs ${
                    item.persona.estado === 1
                      ? "text-green-600 bg-green-50"
                      : "text-red-600 bg-red-50"
                  }`}
                >
                  {item.persona.estado === 1 ? "Active" : "Inactive"}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <Acctions dni={item.persona.dni} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <CardUser tableItems={tableItems} />
    </>
  );
};
