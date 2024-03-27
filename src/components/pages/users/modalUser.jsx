import { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const UserModal = ({ isOpen, onClose, userDni }) => {
  const { data, loading, error } = useFetch(
    `http://localhost:3000/users/clientes/${userDni}`
  );

  const [currentTab, setCurrentTab] = useState("client");

  function getSexo(sexo) {
    switch (sexo) {
      case "M":
        return "Masculino";
      case "F":
        return "Femenino";
      default:
        return "No especificado";
    }
  }
  // console.log(data);
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
          <div className="bg-white p-8 max-w-lg rounded-lg relative">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="mb-4 flex justify-between items-center">
              <button
                className={`px-4 py-2  ${
                  currentTab === "client"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setCurrentTab("client")}
              >
                Información del cliente
              </button>
              <button
                className={`px-4 py-2  ${
                  currentTab === "medical"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setCurrentTab("medical")}
              >
                Ficha médica
              </button>
            </div>
            {loading ? (
              <div className="flex items-center justify-center">
                <strong>Cargando..</strong>
              </div>
            ) : error ? (
              <p>Error al cargar los datos</p>
            ) : (
              <div>
                {currentTab === "client" && (
                  <>
                    <h2 className="text-xl font-semibold mb-4">
                      Información del cliente
                    </h2>
                    <div className="text-left">
                      <p>
                        <strong>DNI:</strong> {data[0].dni}
                      </p>
                      <p>
                        <strong>Nombre:</strong> {data[0].nombre}
                      </p>
                      <p>
                        <strong>Apellido:</strong> {data[0].apellido}
                      </p>
                      <p>
                        <strong>Edad:</strong> {data[0].edad}
                      </p>
                      <p>
                        <strong>Dirección:</strong> {data[0].direccion}
                      </p>
                      <p>
                        <strong>Teléfono:</strong> {data[0].telefono}
                      </p>
                      <p>
                        <strong>Correo:</strong> {data[0].correo}
                      </p>
                      <p>
                        <strong>Estado:</strong>{" "}
                        {data[0].estado === 0 ? "Inactivo" : "Activo"}
                      </p>
                      <p>
                        <strong>Fecha de nacimiento:</strong>{" "}
                        {data[0].fecha_nacimiento.split("T")[0]}
                      </p>
                      <p>
                        <strong>Sexo:</strong> {getSexo(data[0].sexo)}
                      </p>
                    </div>
                  </>
                )}
                {currentTab === "medical" && (
                  <>
                    <h2 className="text-xl font-semibold mb-4">Ficha médica</h2>
                    <div className="text-left">
                      <p>
                        <strong>Altura:</strong> {data[0].altura} cm
                      </p>
                      <p>
                        <strong>Peso:</strong> {data[0].peso} kg
                      </p>
                      <p>
                        <strong>Cintura:</strong> {data[0].med_cintura} cm
                      </p>
                      <p>
                        <strong>Cadera:</strong> {data[0].med_cadera} cm
                      </p>
                      <p>
                        <strong>Grasa corporal:</strong>{" "}
                        {data[0].porc_grasa_corporal}%
                      </p>
                      <p>
                        <strong>Objetivo:</strong> {data[0].objetivo}
                      </p>

                      <p>
                        <strong>Operación:</strong> {data[0].operacion}
                      </p>

                      <p>
                        <strong>Enfermedad:</strong> {data[0].enfermedad}
                      </p>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
