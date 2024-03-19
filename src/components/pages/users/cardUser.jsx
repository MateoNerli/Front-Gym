import { Acctions } from "./acctions";

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
                alt={item.persona.nombre}
              />
              <div className="flex-1">
                <h3 className="text-gray-800 text-lg font-semibold">
                  {item.persona.nombre} {item.persona.apellido}
                </h3>
                <p className="text-gray-600">{item.persona.telefono}</p>

                <span
                  className={`px-3 py-2 rounded-full font-semibold text-xs ${
                    item.persona.estado === 1
                      ? "text-green-600 bg-green-50"
                      : "text-red-600 bg-red-50"
                  }`}
                >
                  {item.persona.estado === 1 ? "Activo" : "Inactivo"}
                </span>
              </div>
            </div>

            <div className="flex justify-between mt-2 pb-2 px-2">
              <Acctions dni={item.persona.dni} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
