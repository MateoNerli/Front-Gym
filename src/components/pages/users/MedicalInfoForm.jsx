import { TextInput } from "../utils/textInput";

export const MedicalInfoForm = ({ formData, handleInputChange }) => {
  return (
    <>
      <h2 className="text-2xl font-bold text-center">
        <span className="border-b-2 border-slate-600">Ficha medica</span>
      </h2>
      <div className="mt-4 grid gap-6 mb-6 md:grid-cols-2">
        <TextInput
          id="peso"
          label="Peso"
          placeholder="Peso"
          type="number"
          value={formData.peso}
          onChange={(value) => handleInputChange("peso", value)}
        />
        <TextInput
          id="altura"
          label="Altura"
          placeholder="Altura"
          type="number"
          value={formData.altura}
          onChange={(value) => handleInputChange("altura", value)}
        />
        <TextInput
          id="med_cintura"
          label="Medida de cintura"
          placeholder="Medida de cintura"
          type="number"
          value={formData.med_cintura}
          onChange={(value) => handleInputChange("med_cintura", value)}
        />
        <TextInput
          id="med_cadera"
          label="Medida de cadera"
          placeholder="Medida de cadera"
          type="number"
          value={formData.med_cadera}
          onChange={(value) => handleInputChange("med_cadera", value)}
        />
        <TextInput
          id="porcentaje_grasa"
          label="Porcentaje de grasa"
          placeholder="Porcentaje de grasa"
          type="number"
          value={formData.porcentaje_grasa}
          onChange={(value) => handleInputChange("porcentaje_grasa", value)}
        />
        <TextInput
          id="objetivo"
          label="Objetivo"
          placeholder="Objetivo"
          type="text"
          value={formData.objetivo}
          onChange={(value) => handleInputChange("objetivo", value)}
        />
        <TextInput
          id="operaciones"
          label="Operaciones"
          placeholder="Operaciones"
          type="text"
          value={formData.operaciones}
          onChange={(value) => handleInputChange("operaciones", value)}
        />
        <TextInput
          id="enfermedades"
          label="Enfermedades"
          placeholder="Enfermedades"
          type="text"
          value={formData.enfermedades}
          onChange={(value) => handleInputChange("enfermedades", value)}
        />
      </div>
    </>
  );
};
