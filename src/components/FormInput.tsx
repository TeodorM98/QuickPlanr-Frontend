import React from "react";

interface FormInputProps {
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  pattern?: string;
  minlength?: number;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  onChange,
  type,
  pattern,
  minlength,
}) => {
  return (
    <>
      <label htmlFor={name} className="text-orange-600 text-xl font-semibold">
        {label}
      </label>
      <input
        pattern={pattern}
        className="rounded-md bg-gray-700 text-white border-2 border-orange-600 focus:-translate-y-1"
        minLength={minlength}
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        required
      />
    </>
  );
};

export default FormInput;
