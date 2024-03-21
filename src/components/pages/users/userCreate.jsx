import { useState, useEffect } from "react";
import { Combo } from "../utils/combo";
import { useFetch } from "../../../hooks/useFetch";
import { Checkbox } from "../utils/checkBox";
import { TextInput } from "../utils/textInput";

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
  const [selectedGender, setSelectedGender] = useState(""); // Estado para el género
  const [selectedState, setSelectedState] = useState(0); // Estado para el estado

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
    setSelectedPlan(newPlan); // Actualizar estado del plan seleccionado
    handleInputChange("codigo_plan", newPlan); // Actualizar estado del formulario
  };

  const handlePromoChange = (newPromo) => {
    setSelectedPromo(newPromo); // Actualizar estado de la promoción seleccionada
    handleInputChange("codigo_promo", newPromo); // Actualizar estado del formulario
  };

  const handleGenderChange = (value) => {
    setSelectedGender(value); // Actualizar el estado del género seleccionado
    handleInputChange("sexo", value); // Actualizar el estado del formulario
  };

  const handleStateChange = (isChecked) => {
    const newState = isChecked ? 1 : 0; // Convertir isChecked a 1 o 0
    setSelectedState(newState); // Actualizar estado del estado seleccionado
    handleInputChange("estado", newState.toString()); // Actualizar estado del formulario como cadena
  };

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    telefono: "",
    correo: "",
    fecha_nacimiento: "",
    sexo: "",
    estado: "",
    ocupacion: "",
    telefono_emergencia: "",
    codigo_plan: "",
    codigo_promo: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("User created successfully");
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
            id="nombre"
            label="Nombre"
            placeholder="John"
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={(value) => handleInputChange("nombre", value)}
            required
          />
          <TextInput
            id="apellido"
            label="Apellido"
            placeholder="Doe"
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={(value) => handleInputChange("apellido", value)}
            required
          />
          <TextInput
            id="direccion"
            label="Dirección"
            placeholder="Mitre 1234"
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={(value) => handleInputChange("direccion", value)}
            required
          />
          <TextInput
            id="telefono"
            label="Teléfono"
            placeholder="3364-445-678"
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={(value) => handleInputChange("telefono", value)}
            required
          />
          <TextInput
            id="correo"
            label="Correo"
            placeholder="johnDoe@gmail.com"
            type="email"
            name="correo"
            value={formData.correo}
            onChange={(value) => handleInputChange("correo", value)}
            required
          />
          <TextInput
            id="fecha_nacimiento"
            label="Fecha de nacimiento"
            placeholder="1990-12-31"
            type="date"
            name="fecha_nacimiento"
            value={formData.fecha_nacimiento}
            onChange={(value) => handleInputChange("fecha_nacimiento", value)}
            required
          />

          <Combo
            id="sexo"
            label="Género"
            options={[
              { value: "", label: "Elegir género", disabled: true }, // Opción predeterminada
              { value: "M", label: "Masculino" },
              { value: "F", label: "Femenino" },
            ]}
            value={selectedGender}
            onChange={handleGenderChange}
          />

          <Checkbox
            id="estado"
            label="Estado"
            required={true}
            initialValue={false}
            onChange={handleStateChange} // Pasar función de cambio de estado
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
            required
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
            required
          />
          <Combo
            id="codigo_plan"
            label="Plan"
            options={[
              { value: "", label: "Elegir plan", disabled: true }, // Opción predeterminada
              ...planOptions,
            ]}
            value={selectedPlan}
            onChange={handlePlanChange}
          />
          <Combo
            id="codigo_promo"
            label="Promoción"
            options={[
              { value: "", label: "Elegir promoción", disabled: true }, // Opción predeterminada
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
            required
          />
          <TextInput
            id="altura"
            label="Altura"
            placeholder="Altura"
            type="number"
            name="altura"
            value={formData.altura}
            onChange={(value) => handleInputChange("altura", value)}
            required
          />
          <TextInput
            id="med_cintura"
            label="Medida de cintura"
            placeholder="Medida de cintura"
            type="number"
            name="med_cintura"
            value={formData.med_cintura}
            onChange={(value) => handleInputChange("med_cintura", value)}
            required
          />
          <TextInput
            id="med_cadera"
            label="Medida de cadera"
            placeholder="Medida de cadera"
            type="number"
            name="med_cadera"
            value={formData.med_cadera}
            onChange={(value) => handleInputChange("med_cadera", value)}
            required
          />
          <TextInput
            id="porcentaje_grasa"
            label="Porcentaje de grasa"
            placeholder="Porcentaje de grasa"
            type="number"
            name="porcentaje_grasa"
            value={formData.porcentaje_grasa}
            onChange={(value) => handleInputChange("porcentaje_grasa", value)}
            required
          />
          <TextInput
            id="objetivo"
            label="Objetivo"
            placeholder="Objetivo"
            type="text"
            name="objetivo"
            value={formData.objetivo}
            onChange={(value) => handleInputChange("objetivo", value)}
            required
          />

          <TextInput
            id="opreciones"
            label="Operaciones"
            placeholder="Operaciones"
            type="text"
            name="operaciones"
            value={formData.operaciones}
            onChange={(value) => handleInputChange("operaciones", value)}
            required
          />
          <TextInput
            id="enfermedades"
            label="Enfermedades"
            placeholder="Enfermedades"
            type="text"
            name="enfermedades"
            value={formData.enfermedades}
            onChange={(value) => handleInputChange("enfermedades", value)}
            required
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
