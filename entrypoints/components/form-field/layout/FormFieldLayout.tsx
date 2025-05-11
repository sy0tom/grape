import { ReactNode } from "react";
import { FieldError } from "react-hook-form";

interface Props {
  label?: string;
  child: ReactNode;
  error?: FieldError;
}

function FormFieldLayout({ label, child, error }: Props) {
  return (
    <div>
      <div className="flex items-center">
        {label && (
          <label htmlFor={`${label}Field`}>
            <span>{label}</span>
          </label>
        )}
        {child}
      </div>
      <div className="p-1 text-red-500">{error && error.message}</div>
    </div>
  );
}

export default FormFieldLayout;
