import { Combo } from "../utils/combo";
import { Checkbox } from "../utils/checkBox";
import { TextInput } from "../utils/textInput";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { useEffect, useState } from "react";

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
  console.log(data[0]);
  return (
    <div className="p-4 sm:ml-72">
      <h2 className="text-2xl font-bold text-center">
        <span className="border-b-2 border-slate-600">Editar cliente</span>
      </h2>
      <form>
        <div className="mt-4 grid gap-6 mb-6 md:grid-cols-2">
          <TextInput
            id="dni"
            label="DNI"
            placeholder="12345678"
            value={data[0].dni}
            type="number"
            required
          />

          <TextInput
            id="nombre"
            label="Nombre"
            placeholder="John"
            value={data[0].nombre}
            required
          />

          <TextInput
            id="apellido"
            label="Apellido"
            placeholder="Doe"
            value={data[0].apellido}
            type="text"
            required
          />

          <TextInput
            id="edad"
            label="Edad"
            placeholder="Edad"
            value={data[0].edad}
            type="number"
            required
          />

          <TextInput
            id="direccion"
            label="Dirección"
            placeholder="Mitre 1234"
            value={data[0].direccion}
            type="text"
            required
          />
          <TextInput
            id="telefono"
            label="Teléfono"
            placeholder="3364-445-678"
            value={data[0].telefono}
            type="tel"
            required
          />
          <TextInput
            id="correo"
            label="Correo"
            placeholder="johnDoe@gmail.com"
            value={data[0].correo}
            type="email"
            required
          />
          <TextInput
            id="fecha_nacimiento"
            label="Fecha de nacimiento"
            placeholder="1990-12-31"
            value={data[0].fecha_nacimiento}
            type="date"
            required
          />

          <Combo
            id="sexo"
            label="Sexo"
            options={[
              { value: "M", label: "Masculino" },
              { value: "F", label: "Femenino" },
            ]}
            value={data[0].sexo}
            required
            onChange={(value) => data[0].sexo(value)}
          />

          <Checkbox
            id="estado"
            label="Estado"
            required
            initialValue={data[0].estado}
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
            value={data[0].ocupacion}
            type="text"
            required
          />
          <TextInput
            id="telefono_emergencia"
            label="Teléfono de emergencia"
            placeholder="Teléfono de emergencia"
            value={data[0].telefono_emergencia}
            type="tel"
            required
          />
          <Combo
            id="codigo_plan"
            label="Plan"
            options={[
              { value: "", label: "Elegir plan", disabled: true },
              ...planOptions,
            ]}
            value={data[0].codigo_plan}
            required
          />
          <Combo
            id="codigo_promocion"
            label="Promoción"
            options={[
              { value: "", label: "Elegir promoción", disabled: true },
              ...promoOptions,
            ]}
            value={data[0].codigo_promocion}
            required
          />
        </div>
        <h2 className="text-2xl font-bold text-center">
          <span className="border-b-2 border-slate-600">Ficha medica</span>
        </h2>

        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <TextInput
            id="peso"
            label="Peso"
            placeholder="Peso"
            value={data[0].peso}
            type="number"
            required
          />
          <TextInput
            id="altura"
            label="Altura"
            placeholder="Altura"
            value={data[0].altura}
            type="number"
            required
          />
          <TextInput
            id="med_cintura"
            label="Medida de cintura"
            placeholder="Medida de cintura"
            value={data[0].med_cintura}
            type="number"
            required
          />
          <TextInput
            id="med_cadera"
            label="Medida de cadera"
            placeholder="Medida de cadera"
            value={data[0].med_cadera}
            type="number"
            required
          />
          <TextInput
            id="porc_grasa_corporal"
            label="Porcentaje de grasa"
            placeholder="Porcentaje de grasa"
            value={data[0].porc_grasa_corporal}
            type="number"
            required
          />
          <TextInput
            id="objetivo"
            label="Objetivo"
            placeholder="Objetivo"
            value={data[0].objetivo}
            type="text"
            required
          />
          <TextInput
            id="operacion"
            label="Operaciones"
            placeholder="Operaciones"
            value={data[0].operacion}
            type="text"
            required
          />
          <TextInput
            id="enfermedad"
            label="Enfermedades"
            placeholder="Enfermedades"
            value={data[0].enfermedad}
            type="text"
            required
          />
        </div>

        <div className="grid gap-6 mb-6">
          <button
            type="submit"
            className="mt-4 text-white bg-slate-800 hover:bg-slate-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};
