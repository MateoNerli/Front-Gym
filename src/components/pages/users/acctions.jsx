import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";
import { UserModal } from "./modalUser";

export const Acctions = ({ dni }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleVerInfo = () => {
    setIsOpen(true);
  };

  return (
    <td className="text-right px-6 whitespace-nowrap">
      <div className="flex justify-center">
        <button
          className="bg-yellow-200 flex items-center p-2 text-gray-800 rounded-lg mr-2"
          onClick={() => handleVerInfo()}
        >
          <FontAwesomeIcon icon={faEye} className="mr-1" />
        </button>
        <Link
          to={`/user/edit/${dni}`}
          className="flex items-center p-2 bg-gray-200 text-gray-800 rounded-lg mr-2"
        >
          <FontAwesomeIcon icon={faEdit} className="mr-1" />
        </Link>

        <button className="flex items-center p-2 bg-red-200 text-red-800 rounded-lg">
          <FontAwesomeIcon icon={faTrash} className="mr-1" />
        </button>
      </div>
      <UserModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        userDni={dni}
      />
    </td>
  );
};
