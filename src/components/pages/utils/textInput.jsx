export const TextInput = ({
  id,
  label,
  placeholder,
  type,
  required,
  value,
  onChange, // Agrega onChange como una prop
}) => {
  // Define la función handleChange para manejar los cambios en el input
  const handleChange = (event) => {
    onChange(event.target.value); // Llama a la función onChange con el nuevo valor del input
  };

  return (
    <div className="">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        value={value}
        onChange={handleChange} // Asigna handleChange al evento onChange del input
        required={required}
      />
    </div>
  );
};
