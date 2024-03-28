import { TextInput } from "../utils/textInput";
import { Combo } from "../utils/combo";

export const ClientInfoForm = ({
  formData,
  handleInputChange,
  planOptions,
  selectedPlan,
  handlePlanChange,
  promoOptions,
  selectedPromo,
  handlePromoChange,
}) => {
  return (
    <>
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
          value={formData.ocupacion}
          onChange={(value) => handleInputChange("ocupacion", value)}
        />
        <TextInput
          id="telefono_emergencia"
          label="Teléfono de emergencia"
          placeholder="Teléfono de emergencia"
          type="tel"
          value={formData.telefono_emergencia}
          onChange={(value) => handleInputChange("telefono_emergencia", value)}
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
    </>
  );
};
