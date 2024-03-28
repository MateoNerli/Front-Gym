import { TextInput } from "../utils/textInput";
import { Combo } from "../utils/combo";
import { Checkbox } from "../utils/checkBox";

export const PersonalInfoForm = ({
  formData,
  handleInputChange,
  selectedGender,
  handleGenderChange,
  selectedState,
  handleStateChange,
}) => {
  return (
    <>
      <div className="mt-4 grid gap-6 mb-6 md:grid-cols-2">
        <TextInput
          id="dni"
          label="DNI"
          placeholder="DNI"
          type="number"
          value={formData.dni}
          onChange={(value) => handleInputChange("dni", value)}
          disabled
        />

        <TextInput
          id="nombre"
          label="Nombre"
          placeholder="John"
          type="text"
          value={formData.nombre}
          onChange={(value) => handleInputChange("nombre", value)}
        />
        <TextInput
          id="apellido"
          label="Apellido"
          placeholder="Doe"
          type="text"
          value={formData.apellido}
          onChange={(value) => handleInputChange("apellido", value)}
        />
        <TextInput
          id="edad"
          label="Edad"
          placeholder="Edad"
          type="number"
          value={formData.edad}
          onChange={(value) => handleInputChange("edad", value)}
        />
        <TextInput
          id="direccion"
          label="Dirección"
          placeholder="Mitre 1234"
          type="text"
          value={formData.direccion}
          onChange={(value) => handleInputChange("direccion", value)}
        />
        <TextInput
          id="telefono"
          label="Teléfono"
          placeholder="3364-445-678"
          type="tel"
          value={formData.telefono}
          onChange={(value) => handleInputChange("telefono", value)}
        />
        <TextInput
          id="correo"
          label="Correo"
          placeholder="johnDoe@gmail.com"
          type="email"
          value={formData.correo}
          onChange={(value) => handleInputChange("correo", value)}
        />
        <TextInput
          id="fecha_nacimiento"
          label="Fecha de nacimiento"
          placeholder="1990-12-31"
          type="date"
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
    </>
  );
};
