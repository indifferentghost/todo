import React, { InputHTMLAttributes, forwardRef } from "react";
import { ValidationRules, FieldError } from "react-hook-form";

type Props = {
  label: string;
  registerProps?: ValidationRules;
  errors?: Record<string, FieldError>;
} & InputHTMLAttributes<HTMLInputElement>;

function Input({ label, ...props }: Props, ref: React.Ref<HTMLInputElement>) {
  return (
    <label>
      {label}
      <input ref={ref} name={label} {...props} />
    </label>
  );
}

export default forwardRef(Input);
