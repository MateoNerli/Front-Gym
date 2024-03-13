import { CardUser } from "./cardUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
export const TableUser = () => {
  const tableItems = [
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      email: "liamjames@example.com",
      phone_nimber: "+1 (555) 000-000",
      position: "Software engineer",
      status: "Active",
      salary: "$100K",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Olivia Emma",
      email: "oliviaemma@example.com",
      phone_nimber: "+1 (555) 000-000",
      position: "Product designer",
      status: "Active",
      salary: "$90K",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "William Benjamin",
      email: "william.benjamin@example.com",
      phone_nimber: "+1 (555) 000-000",
      position: "Front-end developer",
      status: "Desactive",
      salary: "$80K",
    },
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Henry Theodore",
      email: "henrytheodore@example.com",
      phone_nimber: "+1 (555) 000-000",
      position: "Laravel engineer",
      status: "Active",
      salary: "$120K",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Amelia Elijah",
      email: "amelia.elijah@example.com",
      phone_nimber: "+1 (555) 000-000",
      position: "Open source manager",
      salary: "$75K",
      status: "Desactive",
    },
  ];
  return (
    <>
      <table className="w-full table-auto text-sm text-left hidden lg:table">
        <thead className="bg-gray-50 text-gray-600 font-medium border-b text-center">
          <tr>
            <th className="py-3 px-6">Usuario</th>
            <th className="py-3 px-6">Telefono</th>
            <th className="py-3 px-6">Membresia</th>
            <th className="py-3 px-6">Estado</th>
            <th className="py-3 px-6">Acciones</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 divide-y">
          {tableItems.map((item, index) => (
            <tr key={index}>
              <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap text-left">
                <img src={item.avatar} className="w-10 h-10 rounded-full" />
                <div>
                  <span className="block text-gray-700 text-sm font-medium">
                    {item.name}
                  </span>
                  <span className="block text-gray-700 text-xs">
                    {item.email}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                {item.phone_nimber}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                {item.position}
              </td>
              <td className="pr-6 py-4 whitespace-nowrap">
                <span
                  className={`px-3 py-2 rounded-full font-semibold text-xs ${
                    item.status == "Active"
                      ? "text-green-600 bg-green-50"
                      : "text-red-600 bg-red-50"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="text-right px-6 whitespace-nowrap">
                <div className="flex justify-center">
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
