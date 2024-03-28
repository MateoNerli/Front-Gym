import { useState } from "react";

export const TextInput = ({
  id,
  label,
  placeholder,
  type,
  value,
  onChange,
}) => {
  const [touched, setTouched] = useState(false);

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  const handleBlur = () => {
    setTouched(true);
  };

  const shouldShowError =
    touched && (typeof value === "string" ? !value.trim() : false);

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
        className={`bg-gray-50 border ${
          shouldShowError ? "border-red-500" : "border-gray-300"
        } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {shouldShowError && (
        <p className="text-red-500 text-xs mt-1">
          Este campo no puede estar vacío
        </p>
      )}
    </div>
  );
};
