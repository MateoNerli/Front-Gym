import { useFetch } from "../../../hooks/useFetch";
import { Combo } from "../utils/combo";
import { Checkbox } from "../utils/checkBox";
import { TextInput } from "../utils/textInput";
import { useParams } from "react-router-dom";

export const UserEdit = () => {
  const { dni } = useParams();
  const { data, loading, error } = useFetch(
    `http://localhost:3000/users/clientes/${dni}`
  );
  const { data: planData, loading: planLoading } = useFetch(
    "http://localhost:3000/plans/list"
  );

  if (loading || planLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const convertSexo = (sexo) => {
    switch (sexo) {
      case "M":
        return "Masculino";
      case "F":
        return "Femenino";
      default:
        return "";
    }
  };
  // console.log(data);
  return (
    <div className="p-4 sm:ml-72">
      <h2 className="text-2xl font-bold text-center">
        <span className="border-b-2 border-slate-600">Editar cliente</span>
      </h2>
      <form>
        <div className="mt-4 grid gap-6 mb-6 md:grid-cols-2">
          <TextInput
            id="nombre"
            label="Nombre"
            placeholder="John"
            value={data.persona.nombre}
            required
          />

          <TextInput
            id="apellido"
            label="Apellido"
            placeholder="Doe"
            value={data.persona.apellido}
            type="text"
            required
          />
          <TextInput
            id="direccion"
            label="Dirección"
            placeholder="Mitre 1234"
            value={data.persona.direccion}
            type="text"
            required
          />
          <TextInput
            id="telefono"
            label="Teléfono"
            placeholder="3364-445-678"
            value={data.persona.telefono}
            type="tel"
            required
          />
          <TextInput
            id="correo"
            label="Correo"
            placeholder="johnDoe@gmail.com"
            value={data.persona.correo}
            type="email"
            required
          />
          <TextInput
            id="fecha_nacimiento"
            label="Fecha de nacimiento"
            placeholder="1990-12-31"
            value={data.persona.fecha_nacimiento}
            type="date"
            required
          />

          <Combo
            id="sexo"
            label="Sexo"
            required
            options={[
              { value: "M", label: "Masculino" },
              { value: "F", label: "Femenino" },
            ]}
            defaultValue={convertSexo(data.persona.sexo)}
          />

          <Checkbox
            id="estado"
            label="Estado"
            required
            initialValue={data.persona.estado}
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
            value={data.ocupacion}
            type="text"
            required
          />
          <TextInput
            id="telefono_emergencia"
            label="Teléfono de emergencia"
            placeholder="Teléfono de emergencia"
            value={data.telefono_emergencia}
            type="tel"
            required
          />
          <TextInput
            id="codigo_plan"
            label="Código de plan"
            placeholder="Código de plan"
            type="text"
            required
          />
          <Combo
            id="codigo_plan"
            label="Código de plan"
            required
            options={planData.map((plan) => ({
              value: plan.codigo,
              label: plan.nombre,
            }))}
            defaultValue={data.plan.codigo_plan}
          />
        </div>
        <h2 className="text-2xl font-bold text-center">
          <span className="border-b-2 border-slate-600">Ficha medica</span>
        </h2>
        {data.FichaMedica.map((ficha, index) => (
          <div key={index} className="mt-4 grid gap-6 md:grid-cols-2">
            <TextInput
              id={`peso_${index}`}
              label="Peso"
              placeholder="Peso"
              value={ficha.peso}
              type="number"
              required
            />
            <TextInput
              id={`altura_${index}`}
              label="Altura"
              placeholder="Altura"
              value={ficha.altura}
              type="number"
              required
            />
            <TextInput
              id={`med_cintura_${index}`}
              label="Medida de cintura"
              placeholder="Medida de cintura"
              value={ficha.med_cintura}
              type="number"
              required
            />
            <TextInput
              id={`med_cadera_${index}`}
              label="Medida de cadera"
              placeholder="Medida de cadera"
              value={ficha.med_cadera}
              type="number"
              required
            />
            <TextInput
              id={`porcentaje_grasa_${index}`}
              label="Porcentaje de grasa"
              placeholder="Porcentaje de grasa"
              value={ficha.porc_grasa_corporal}
              type="number"
              required
            />
            <TextInput
              id={`objetivo_${index}`}
              label="Objetivo"
              placeholder="Objetivo"
              value={ficha.objetivo}
              type="text"
              required
            />
            <TextInput
              id={`opreaciones${index}`}
              label="Opreaciones"
              placeholder="opreaciones"
              value={ficha.opreaciones}
              type="text"
              required
            />
            <TextInput
              id={`enfermedades_${index}`}
              label="Enfermedades"
              placeholder="Enfermedades"
              value={ficha.enfermedades}
              type="text"
              required
            />
          </div>
        ))}

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
