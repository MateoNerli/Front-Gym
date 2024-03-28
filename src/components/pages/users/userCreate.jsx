import { useState, useEffect } from "react";
import { Combo } from "../utils/combo";
import { useFetch } from "../../../hooks/useFetch";
import { Checkbox } from "../utils/checkBox";
import { TextInput } from "../utils/textInput";
import Swal from "sweetalert2";

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
  const [promoOptions, setPromoOptions] = useState([]);
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

  const handlePlanChange = (newPlan) => {
    setSelectedPlan(newPlan);
    handleInputChange("codigo_plan", newPlan);
  };

  const handlePromoChange = (newPromo) => {
    setSelectedPromo(newPromo);
    handleInputChange("codigo_promocion", newPromo);
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
    operaciones: "",
    enfermedades: "",
  });

  const handleInputChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
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
      "operaciones",
      "enfermedades",
    ];

    let isValid = true;

    requiredFields.forEach((fieldName) => {
      const element = document.getElementById(fieldName);
      const errorMessageElement = element.nextElementSibling;

      if (!formData[fieldName].trim()) {
        isValid = false;
        if (!element.classList.contains("border-red-500")) {
          element.classList.add("border-red-500");
        }
      } else {
        if (element.classList.contains("border-red-500")) {
          element.classList.remove("border-red-500");
        }
        if (errorMessageElement) {
          errorMessageElement.remove();
        }
      }

      element.addEventListener("blur", () => {
        if (
          formData[fieldName].trim() &&
          element.classList.contains("border-red-500")
        ) {
          element.classList.remove("border-red-500");
          if (errorMessageElement) {
            errorMessageElement.remove();
          }
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
      console.error("Failed to create user:", error);
    }
  };

  return (
    <div className="p-4 sm:ml-72">
      <h2 className="text-2xl font-bold text-center">
        <span className="border-b-2 border-slate-600">Agregar cliente</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mt-4 grid gap-6 mb-6 md:grid-cols-2">
          <TextInput
            id="dni"
            label="DNI"
            placeholder="DNI"
            type="number"
            name="dni"
            value={formData.dni}
            onChange={(value) => handleInputChange("dni", value)}
            //no se puede editar
            disabled
          />

          <TextInput
            id="nombre"
            label="Nombre"
            placeholder="John"
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={(value) => handleInputChange("nombre", value)}
          />
          <TextInput
            id="apellido"
            label="Apellido"
            placeholder="Doe"
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={(value) => handleInputChange("apellido", value)}
          />
          <TextInput
            id="edad"
            label="Edad"
            placeholder="Edad"
            type="number"
            name="edad"
            value={formData.edad}
            onChange={(value) => handleInputChange("edad", value)}
          />
          <TextInput
            id="direccion"
            label="Dirección"
            placeholder="Mitre 1234"
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={(value) => handleInputChange("direccion", value)}
          />
          <TextInput
            id="telefono"
            label="Teléfono"
            placeholder="3364-445-678"
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={(value) => handleInputChange("telefono", value)}
          />
          <TextInput
            id="correo"
            label="Correo"
            placeholder="johnDoe@gmail.com"
            type="email"
            name="correo"
            value={formData.correo}
            onChange={(value) => handleInputChange("correo", value)}
          />
          <TextInput
            id="fecha_nacimiento"
            label="Fecha de nacimiento"
            placeholder="1990-12-31"
            type="date"
            name="fecha_nacimiento"
            value={formData.fecha_nacimiento}
            onChange={(value) => handleInputChange("fecha_nacimiento", value)}
          />

          <Combo
            id="sexo"
            label="Género"
            options={[
              { value: "", label: "Elegir género", disabled: true },
              { value: "M", label: "Masculino" },
              { value: "F", label: "Femenino" },
            ]}
            value={selectedGender}
            onChange={handleGenderChange}
          />

          <Checkbox
            id="estado"
            label="Estado"
            initialValue={selectedState}
            onChange={handleStateChange}
          />
        </div>

        <h2 className="text-2xl font-bold text-center">
          <span className="border-b-2 border-slate-600">
            Informacion del cliente
          </span>
        </h2>

        <div className="mt-4 grid gap-6 mb-6 md:grid-cols-2">
          <TextInput
            id="ocupacion"
            label="Ocupación"
            placeholder="Ocupación"
            type="text"
            name="ocupacion"
            value={formData.ocupacion}
            onChange={(value) => handleInputChange("ocupacion", value)}
          />
          <TextInput
            id="telefono_emergencia"
            label="Teléfono de emergencia"
            placeholder="Teléfono de emergencia"
            type="tel"
            name="telefono_emergencia"
            value={formData.telefono_emergencia}
            onChange={(value) =>
              handleInputChange("telefono_emergencia", value)
            }
          />
          <Combo
            id="codigo_plan"
            label="Plan"
            options={[
              { value: "", label: "Elegir plan", disabled: true },
              ...planOptions,
            ]}
            value={selectedPlan}
            onChange={handlePlanChange}
          />
          <Combo
            id="codigo_promocion"
            label="Promoción"
            options={[
              { value: "", label: "Elegir promoción", disabled: true },
              ...promoOptions,
            ]}
            value={selectedPromo}
            onChange={handlePromoChange}
          />
        </div>
        <h2 className="text-2xl font-bold text-center">
          <span className="border-b-2 border-slate-600">Ficha medica</span>
        </h2>
        <div className="mt-4 grid gap-6 mb-6 md:grid-cols-2">
          <TextInput
            id="peso"
            label="Peso"
            placeholder="Peso"
            type="number"
            name="peso"
            value={formData.peso}
            onChange={(value) => handleInputChange("peso", value)}
          />
          <TextInput
            id="altura"
            label="Altura"
            placeholder="Altura"
            type="number"
            name="altura"
            value={formData.altura}
            onChange={(value) => handleInputChange("altura", value)}
          />
          <TextInput
            id="med_cintura"
            label="Medida de cintura"
            placeholder="Medida de cintura"
            type="number"
            name="med_cintura"
            value={formData.med_cintura}
            onChange={(value) => handleInputChange("med_cintura", value)}
          />
          <TextInput
            id="med_cadera"
            label="Medida de cadera"
            placeholder="Medida de cadera"
            type="number"
            name="med_cadera"
            value={formData.med_cadera}
            onChange={(value) => handleInputChange("med_cadera", value)}
          />
          <TextInput
            id="porcentaje_grasa"
            label="Porcentaje de grasa"
            placeholder="Porcentaje de grasa"
            type="number"
            name="porcentaje_grasa"
            value={formData.porcentaje_grasa}
            onChange={(value) => handleInputChange("porcentaje_grasa", value)}
          />
          <TextInput
            id="objetivo"
            label="Objetivo"
            placeholder="Objetivo"
            type="text"
            name="objetivo"
            value={formData.objetivo}
            onChange={(value) => handleInputChange("objetivo", value)}
          />

          <TextInput
            id="operaciones"
            label="Operaciones"
            placeholder="Operaciones"
            type="text"
            name="operaciones"
            value={formData.operaciones}
            onChange={(value) => handleInputChange("operaciones", value)}
          />
          <TextInput
            id="enfermedades"
            label="Enfermedades"
            placeholder="Enfermedades"
            type="text"
            name="enfermedades"
            value={formData.enfermedades}
            onChange={(value) => handleInputChange("enfermedades", value)}
          />
        </div>

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
