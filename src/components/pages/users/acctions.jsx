import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";
import { UserModal } from "./modalUser";
import Swal from "sweetalert2";

export const Acctions = ({ dni }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleVerInfo = () => {
    setIsOpen(true);
  };

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminarlo!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/clientes/delete/${dni}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (response.ok) {
              Swal.fire(
                "¡Eliminado!",
                "El usuario ha sido eliminado.",
                "success"
              ).then(() => {
                window.location.reload(); // Recarga la página después de que el usuario confirme la eliminación
              });
            } else {
              console.error("Error al eliminar el usuario");
              Swal.fire(
                "Error",
                "Hubo un problema al eliminar el usuario.",
                "error"
              );
            }
          })
          .catch((error) => {
            console.error("Error de red:", error);
            Swal.fire(
              "Error",
              "Hubo un problema de conexión al eliminar el usuario.",
              "error"
            );
          });
      }
    });
  };

  return (
    <>
      <div className="flex justify-center">
        <button
          className="bg-yellow-200 flex items-center p-2 text-gray-800 rounded-lg mr-2"
          onClick={() => handleVerInfo()}
        >
          <FontAwesomeIcon icon={faEye} />
        </button>
        <Link
          to={`/user/edit/${dni}`}
          className="flex items-center p-2 bg-gray-200 text-gray-800 rounded-lg mr-2"
        >
          <FontAwesomeIcon icon={faEdit} />
        </Link>

        <button
          className="flex items-center p-2 bg-red-200 text-red-800 rounded-lg"
          onClick={() => handleDelete()} // Agregamos el manejador de evento aquí
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      <UserModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        userDni={dni}
      />
    </>
  );
};
