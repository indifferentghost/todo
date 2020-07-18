import React from "react";
import { useFormContext, ValidationRules } from "react-hook-form";

type Props = {
  label: string;
  registerProps?: ValidationRules
};

export default function Input({ label, registerProps }: Props) {
  const { register } = useFormContext();

  return (
    <label className="flex flex-col max-w-md">{label}
      <input name={label} ref={registerProps ? register(registerProps) : register} />
    </label>
  );
}