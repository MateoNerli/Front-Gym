import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { PersonalInfoForm } from "./PersonalInfoForm";
import { ClientInfoForm } from "./ClientInfoForm";
import { MedicalInfoForm } from "./MedicalInfoForm";

export const UserEdit = () => {
  const { dni } = useParams();
  const { data, loading, error } = useFetch(
    `http://localhost:3000/users/clientes/${dni}`
  );
  const { data: planData, loading: planLoading } = useFetch(
    "http://localhost:3000/plans/list"
  );
  const { data: promoData, loading: promoLoading } = useFetch(
    "http://localhost:3000/promotions/list"
  );
  const [planOptions, setPlanOptions] = useState([]);
  const [promoOptions, setPromoOptions] = useState([]);
  const [form, setForm] = useState({
    dni: "",
    nombre: "",
    apellido: "",
    edad: "",
    direccion: "",
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
    porc_grasa_corporal: "",
    objetivo: "",
    operacion: "",
    enfermedad: "",
  });

  useEffect(() => {
    if (data) {
      const cliente = data[0];
      const fechaNacimientoFormateada = new Date(cliente.fecha_nacimiento)
        .toISOString()
        .split("T")[0];
      setForm({
        dni: cliente.dni,
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        edad: cliente.edad,
        direccion: cliente.direccion,
        telefono: cliente.telefono,
        correo: cliente.correo,
        fecha_nacimiento: fechaNacimientoFormateada,
        sexo: cliente.sexo,
        estado: cliente.estado,
        ocupacion: cliente.ocupacion,
        telefono_emergencia: cliente.telefono_emergencia,
        codigo_plan: cliente.codigo_plan,
        codigo_promocion: cliente.codigo_promocion,
        peso: cliente.peso,
        altura: cliente.altura,
        med_cintura: cliente.med_cintura,
        med_cadera: cliente.med_cadera,
        porc_grasa_corporal: cliente.porc_grasa_corporal,
        objetivo: cliente.objetivo,
        operacion: cliente.operacion,
        enfermedad: cliente.enfermedad,
      });
    }
  }, [data]);

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

  if (loading || planLoading || promoLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex-col gap-4 w-full flex items-center justify-center">
          <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleEstadoChange = (newValue) => {
    setForm((prevForm) => ({
      ...prevForm,
      estado: newValue ? 1 : 0,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/users/clientes/${dni}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
      if (!response.ok) {
        throw new Error("Error al actualizar el cliente");
      }
      Swal.fire({
        icon: "success",
        title: "¡Usuario actualizado exitosamente!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        window.location.href = "http://localhost:5173/users";
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleInputChange = (fieldName, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [fieldName]: value,
    }));
  };

  return (
    <div className="p-4 sm:ml-72">
      <h2 className="text-2xl font-bold text-center">
        <span className="border-b-2 border-slate-600">Editar cliente</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <PersonalInfoForm
          formData={form}
          handleInputChange={handleInputChange}
          selectedGender={form.sexo}
          handleGenderChange={(value) => handleInputChange("sexo", value)}
          selectedState={form.estado}
          handleStateChange={handleEstadoChange}
        />

        <ClientInfoForm
          formData={form}
          handleInputChange={handleInputChange}
          planOptions={planOptions}
          selectedPlan={form.codigo_plan}
          handlePlanChange={(value) => handleInputChange("codigo_plan", value)}
          promoOptions={promoOptions}
          selectedPromo={form.codigo_promocion}
          handlePromoChange={(value) =>
            handleInputChange("codigo_promocion", value)
          }
        />

        <MedicalInfoForm
          formData={form}
          handleInputChange={handleInputChange}
        />

        <div className="grid gap-6 mb-6">
          <button
            type="submit"
            className="mt-2 text-white bg-slate-800 hover:bg-slate-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Editar
          </button>
        </div>
      </form>
    </div>
  );
};
