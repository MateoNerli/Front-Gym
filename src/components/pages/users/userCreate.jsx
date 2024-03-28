import { useState, useEffect } from "react";
import { useFetch } from "../../../hooks/useFetch";
import Swal from "sweetalert2";
import { PersonalInfoForm } from "./PersonalInfoForm";
import { ClientInfoForm } from "./ClientInfoForm";
import { MedicalInfoForm } from "./MedicalInfoForm";

export const UserCreate = () => {
  const { data: planData, loading: planLoading } = useFetch(
    "http://localhost:3000/plans/list"
  );
  const { data: promoData, loading: promoLoading } = useFetch(
    "http://localhost:3000/promotions/list"
  );

  const [selectedPlan, setSelectedPlan] = useState("");
  const [planOptions, setPlanOptions] = useState([]);
  const [selectedPromo, setSelectedPromo] = useState("");
  const [promoOptions, setPromoOptions] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedState, setSelectedState] = useState(0);

  useEffect(() => {
    if (!planLoading && planData) {
      const options = planData.data.map((plan) => ({
        value: plan.codigo,
        label: plan.nombre,
      }));
      setPlanOptions(options);
    }
  }, [planData, planLoading]);

  useEffect(() => {
    if (!promoLoading && promoData) {
      const options = promoData.data.map((promo) => ({
        value: promo.codigo,
        label: promo.nombre,
      }));
      setPromoOptions(options);
    }
  }, [promoData, promoLoading]);

  const [formData, setFormData] = useState({
    dni: "",
    nombre: "",
    apellido: "",
    direccion: "",
    edad: "",
    telefono: "",
    correo: "",
    fecha_nacimiento: "",
    sexo: "",
    estado: "",
    ocupacion: "",
    telefono_emergencia: "",
    codigo_plan: "",
    codigo_promocion: "",
    peso: "",
    altura: "",
    med_cintura: "",
    med_cadera: "",
    porcentaje_grasa: "",
    objetivo: "",
    operacion: "",
    enfermedad: "",
  });

  const handleInputChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleGenderChange = (value) => {
    setSelectedGender(value);
    handleInputChange("sexo", value);
  };

  const handleStateChange = (isChecked) => {
    const newState = isChecked ? 1 : 0;
    setSelectedState(newState);
    handleInputChange("estado", newState.toString());
  };

  const handlePlanChange = (newPlan) => {
    setSelectedPlan(newPlan);
    handleInputChange("codigo_plan", newPlan);
  };

  const handlePromoChange = (newPromo) => {
    setSelectedPromo(newPromo);
    handleInputChange("codigo_promocion", newPromo);
  };

  const validateForm = () => {
    const requiredFields = [
      "dni",
      "nombre",
      "apellido",
      "direccion",
      "edad",
      "telefono",
      "correo",
      "fecha_nacimiento",
      "sexo",
      //"estado",
      "ocupacion",
      "telefono_emergencia",
      "codigo_plan",
      "codigo_promocion",
      "peso",
      "altura",
      "med_cintura",
      "med_cadera",
      "porcentaje_grasa",
      "objetivo",
      "operacion",
      "enfermedad",
    ];

    let isValid = true;

    requiredFields.forEach((fieldName) => {
      const element = document.getElementById(fieldName);

      if (!formData[fieldName].trim()) {
        isValid = false;
        if (!element.classList.contains("border-red-500")) {
          element.classList.add("border-red-500");
        }
      } else {
        if (element.classList.contains("border-red-500")) {
          element.classList.remove("border-red-500");
        }
      }

      element.addEventListener("blur", () => {
        if (
          formData[fieldName].trim() &&
          element.classList.contains("border-red-500")
        ) {
          element.classList.remove("border-red-500");
        }
      });
    });

    if (!isValid) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, completa todos los campos.",
      });
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3000/users/clientes/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "¡Usuario creado exitosamente!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.href = "http://localhost:5173/users";
        });
      } else if (response.status === 409) {
        Swal.fire({
          icon: "error",
          title: "¡El DNI ya está registrado!",
          text: "Por favor, ingresa un DNI diferente.",
        });
      } else {
        console.error("Failed to create user");
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="p-4 sm:ml-72">
      <h2 className="text-2xl font-bold text-center">
        <span className="border-b-2 border-slate-600">Agregar cliente</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <PersonalInfoForm
          formData={formData}
          handleInputChange={handleInputChange}
          selectedGender={selectedGender}
          handleGenderChange={handleGenderChange}
          selectedState={selectedState}
          handleStateChange={handleStateChange}
        />
        <ClientInfoForm
          formData={formData}
          handleInputChange={handleInputChange}
          planOptions={planOptions}
          selectedPlan={selectedPlan}
          handlePlanChange={handlePlanChange}
          promoOptions={promoOptions}
          selectedPromo={selectedPromo}
          handlePromoChange={handlePromoChange}
        />
        <MedicalInfoForm
          formData={formData}
          handleInputChange={handleInputChange}
        />
        <div className="grid gap-6 mb-6">
          <button
            type="submit"
            className="mt-2 text-white bg-slate-800 hover:bg-slate-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};
