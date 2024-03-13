import { TableUser } from "./tableUser";

export const ListUsers = () => {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Socios
          </h3>
        </div>
        <div className="mt-3 md:mt-0">
          <a
            href=""
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            Agregar socio
          </a>
        </div>
      </div>
      <div className="mt-4 lg:border lg:rounded-lg overflow-x-auto">
        <TableUser />
      </div>
    </div>
  );
};
