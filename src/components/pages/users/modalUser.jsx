import { useFetch } from "../../../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const UserModal = ({ isOpen, onClose, userDni }) => {
  const { data, loading, error } = useFetch(
    `http://localhost:3000/users/${userDni}`
  );

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-800 bg-opacity-50"></div>
          <div className="bg-white p-8 max-w-lg rounded-lg relative">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            {loading ? (
              <p>Cargando...</p>
            ) : error ? (
              <p>Error al cargar los datos</p>
            ) : (
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Información del Usuario
                </h2>
                <p>
                  <strong>Nombre:</strong> {data.nombre}
                </p>
                <p>
                  <strong>Apellido:</strong> {data.apellido}
                </p>
                <p>
                  <strong>DNI:</strong> {data.dni}
                </p>
                <p>
                  <strong>Dirección:</strong> {data.direccion}
                </p>
                <p>
                  <strong>Teléfono:</strong> {data.telefono}
                </p>
                <p>
                  <strong>Correo:</strong> {data.correo}
                </p>
                <p>
                  <strong>Estado:</strong>{" "}
                  {data.estado === 1 ? "Activo" : "Inactivo"}
                </p>
                <p>
                  <strong>Fecha de nacimiento:</strong> {data.fecha_nacimiento}
                </p>
                <p>
                  <strong>Sexo:</strong> {data.sexo}
                </p>
                <p>
                  <strong>Código de gimnasio:</strong> {data.gimnasio_codigo}
                </p>
                {/* Agrega más campos según la estructura de tu objeto de datos */}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
