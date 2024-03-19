import { TableUser } from "./tableUser";
import { Link } from "react-router-dom";

export const ListUsers = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="justify-between md:flex items-center">
        <div className="max-w-lg flex justify-center items-center">
          <h3 className="text-gray-800 text-xl font-bold sm:text border-b-2 border-black">
            Clientes
          </h3>
        </div>
        <div className="mt-3 md:mt-0">
          <Link
            to="/users/create"
            className="p-2 w-full bg-slate-800 h-[60px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-800 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff] text-lg md:text-xl"
          >
            Agregar cliente
          </Link>
        </div>
      </div>
      <div className="mt-4 lg:border lg:rounded-lg overflow-x-auto">
        <TableUser />
      </div>
    </div>
  );
};
