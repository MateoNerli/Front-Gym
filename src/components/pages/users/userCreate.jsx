import { useEffect, useState } from "react";
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
  };

  const handlePromoChange = (newPromo) => {
    setSelectedPromo(newPromo);
  };

  return (
    <div className="p-4 sm:ml-72">
      <h2 className="text-2xl font-bold text-center">
        <span className="border-b-2 border-slate-600">Agregar cliente</span>
      </h2>
      <form>
        <div className="mt-4 grid gap-6 mb-6 md:grid-cols-2">
          <TextInput
            id="nombre"
            label="Nombre"
            placeholder="John"
            type="text"
            required
          />
          <TextInput
            id="apellido"
            label="Apellido"
            placeholder="Doe"
            type="text"
            required
          />
          <TextInput
            id="direccion"
            label="Dirección"
            placeholder="Mitre 1234"
            type="text"
            required
          />
          <TextInput
            id="telefono"
            label="Teléfono"
            placeholder="3364-445-678"
            type="tel"
            required
          />
          <TextInput
            id="correo"
            label="Correo"
            placeholder="johnDoe@gmail.com"
            type="url"
            required
          />
          <TextInput
            id="fecha_nacimiento"
            label="Fecha de nacimiento"
            placeholder="1990-12-31"
            type="date"
            required
          />

          <Combo
            id="genero"
            label="Género"
            options={[
              { value: "M", label: "Masculino" },
              { value: "F", label: "Femenino" },
            ]}
            required
          />
          <Checkbox id="estado" label="Estado" required />
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
            required
          />
          <TextInput
            id="telefono_emergencia"
            label="Teléfono de emergencia"
            placeholder="Teléfono de emergencia"
            type="tel"
            required
          />
          <Combo
            id="codigo_plan"
            label="Plan"
            options={planOptions}
            value={selectedPlan}
            onChange={handlePlanChange}
          />
          <Combo
            id="codigo_promo"
            label="Promoción"
            options={promoOptions}
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
            required
          />
          <TextInput
            id="altura"
            label="Altura"
            placeholder="Altura"
            type="number"
            required
          />
          <TextInput
            id="med_cintura"
            label="Medida de cintura"
            placeholder="Medida de cintura"
            type="number"
            required
          />
          <TextInput
            id="med_cadera"
            label="Medida de cadera"
            placeholder="Medida de cadera"
            type="number"
            required
          />
          <TextInput
            id="porcentaje_grasa"
            label="Porcentaje de grasa"
            placeholder="Porcentaje de grasa"
            type="number"
            required
          />
          <TextInput
            id="objetivo"
            label="Objetivo"
            placeholder="Objetivo"
            type="text"
            required
          />

          <TextInput
            id="opreciones"
            label="Operaciones"
            placeholder="Operaciones"
            type="text"
            required
          />
          <TextInput
            id="enfermedades"
            label="Enfermedades"
            placeholder="Enfermedades"
            type="text"
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
