import { ReactNode } from "react";
import { FieldError } from "react-hook-form";

interface Props {
  label?: string;
  child: ReactNode;
  error?: FieldError;
}

function FormFieldLayout({ label, child, error }: Props) {
  return (
    <>
      <div className="flex items-center">
        {label && (
          <label htmlFor={`${label}Field`}>
            <span>{label}</span>
          </label>
        )}
        {child}
      </div>
      {error ?? <div className="text-red-500 text-sm">{error}</div>}
    </>
  );
}

export default FormFieldLayout;
