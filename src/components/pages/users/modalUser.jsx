// UserModal.js
import { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ModalMedicalInfo } from "./ModalMedicalInfo";
import { ModalUserInfo } from "./ModalUserInfo";
import { ModalPlanInfo } from "./ModalPlanInfo";

export const UserModal = ({ isOpen, onClose, userDni }) => {
  const { data, loading, error } = useFetch(
    `http://localhost:3000/users/clientes/${userDni}`
  );

  const [currentTab, setCurrentTab] = useState("client");

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
                  currentTab === "plan"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setCurrentTab("plan")}
              >
                Plan
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
                {currentTab === "client" && <ModalUserInfo data={data[0]} />}
                {currentTab === "medical" && (
                  <ModalMedicalInfo data={data[0]} />
                )}
                {currentTab === "plan" && <ModalPlanInfo data={data[0]} />}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
