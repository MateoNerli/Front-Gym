import { useState, useEffect } from "react";

export const Checkbox = ({ id, label, required, initialValue, onChange }) => {
  const [checked, setChecked] = useState(initialValue);

  useEffect(() => {
    setChecked(initialValue);
  }, [initialValue]);

  const handleCheckboxChange = (event) => {
    const newValue = event.target.checked;
    setChecked(newValue);
    onChange(newValue);
  };

  return (
    <div className="mt-2 flex justify-center items-center text-center">
      <label htmlFor={id} className="mr-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        id={id}
        type="checkbox"
        className="text-blue-500 rounded focus:ring-blue-500 dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-10 h-10"
        required={required}
        checked={checked}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};
