import { Combo } from "../utils/combo";
import { Checkbox } from "../utils/checkBox";
import { TextInput } from "../utils/textInput";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

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

      // const responseData = await response.json();
      // console.log(responseData);

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
    const newValue = fieldName === "edad" ? parseInt(value) : value;

    setForm({
      ...form,
      [fieldName]: newValue,
    });
  };

  return (
    <div className="p-4 sm:ml-72">
      <h2 className="text-2xl font-bold text-center">
        <span className="border-b-2 border-slate-600">Editar cliente</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mt-4 grid gap-6 mb-6 md:grid-cols-2">
          <TextInput
            id="dni"
            label="DNI"
            placeholder="12345678"
            value={form.dni}
            onChange={(value) => handleInputChange("dni", value)}
            type="number"
            required
          />

          <TextInput
            id="nombre"
            label="Nombre"
            placeholder="John"
            value={form.nombre}
            type="text"
            onChange={(value) => handleInputChange("nombre", value)}
            required
          />

          <TextInput
            id="apellido"
            label="Apellido"
            placeholder="Doe"
            value={form.apellido}
            type="text"
            onChange={(value) => handleInputChange("apellido", value)}
            required
          />
          <TextInput
            id="edad"
            label="Edad"
            placeholder="25"
            value={form.edad}
            type="number"
            onChange={(value) => handleInputChange("edad", value)}
            required
          />
          <TextInput
            id="direccion"
            label="Dirección"
            placeholder="Calle 123"
            value={form.direccion}
            type="text"
            onChange={(value) => handleInputChange("direccion", value)}
            required
          />
          <TextInput
            id="telefono"
            label="Teléfono"
            placeholder="123456789"
            value={form.telefono}
            type="number"
            onChange={(value) => handleInputChange("telefono", value)}
            required
          />
          <TextInput
            id="correo"
            label="Correo"
            placeholder="jonhDoe@gmail.com"
            value={form.correo}
            type="email"
            onChange={(value) => handleInputChange("correo", value)}
            required
          />
          <TextInput
            id="fecha_nacimiento"
            label="Fecha de nacimiento"
            value={form.fecha_nacimiento}
            type="date"
            onChange={(value) => handleInputChange("fecha_nacimiento", value)}
            required
          />
          <Combo
            id="sexo"
            label="Sexo"
            value={form.sexo}
            options={[
              { value: "M", label: "Masculino" },
              { value: "F", label: "Femenino" },
            ]}
            onChange={(value) => handleInputChange("sexo", value)}
            required
          />
          <Checkbox
            id="estado"
            label="Estado"
            initialValue={form.estado === 1}
            onChange={handleEstadoChange}
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
            value={form.ocupacion}
            onChange={(value) => handleInputChange("ocupacion", value)}
            required
          />
          <TextInput
            id="telefono_emergencia"
            label="Teléfono de emergencia"
            placeholder="123456789"
            type="number"
            name="telefono_emergencia"
            value={form.telefono_emergencia}
            onChange={(value) =>
              handleInputChange("telefono_emergencia", value)
            }
            required
          />
          <Combo
            id="codigo_plan"
            label="Plan"
            value={form.codigo_plan}
            options={planOptions}
            onChange={(value) => handleInputChange("codigo_plan", value)}
            required
          />
          <Combo
            id="codigo_promocion"
            label="Promoción"
            value={form.codigo_promocion}
            options={promoOptions}
            onChange={(value) => handleInputChange("codigo_promocion", value)}
            required
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
            value={form.peso}
            onChange={(value) => handleInputChange("peso", value)}
            required
          />
          <TextInput
            id="altura"
            label="Altura"
            placeholder="Altura"
            type="number"
            name="altura"
            value={form.altura}
            onChange={(value) => handleInputChange("altura", value)}
            required
          />
          <TextInput
            id="med_cintura"
            label="Medida de cintura"
            placeholder="Medida de cintura"
            type="number"
            name="med_cintura"
            value={form.med_cintura}
            onChange={(value) => handleInputChange("med_cintura", value)}
            required
          />
          <TextInput
            id="med_cadera"
            label="Medida de cadera"
            placeholder="Medida de cadera"
            type="number"
            name="med_cadera"
            value={form.med_cadera}
            onChange={(value) => handleInputChange("med_cadera", value)}
            required
          />
          <TextInput
            id="porc_grasa_corporal"
            label="Porcentaje de grasa corporal"
            placeholder="Porcentaje de grasa corporal"
            type="number"
            name="porc_grasa_corporal"
            value={form.porc_grasa_corporal}
            onChange={(value) =>
              handleInputChange("porc_grasa_corporal", value)
            }
            required
          />
          <TextInput
            id="objetivo"
            label="Objetivo"
            placeholder="Objetivo"
            type="text"
            name="objetivo"
            value={form.objetivo}
            onChange={(value) => handleInputChange("objetivo", value)}
            required
          />
          <TextInput
            id="operacion"
            label="Operación"
            placeholder="Operación"
            type="text"
            name="operacion"
            value={form.operacion}
            onChange={(value) => handleInputChange("operacion", value)}
            required
          />
          <TextInput
            id="enfermedad"
            label="Enfermedad"
            placeholder="Enfermedad"
            type="text"
            name="enfermedad"
            value={form.enfermedad}
            onChange={(value) => handleInputChange("enfermedad", value)}
            required
          />
        </div>

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
