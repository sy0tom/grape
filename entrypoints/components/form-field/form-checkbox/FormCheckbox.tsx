import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import FormFieldLayout from "../layout/FormFieldLayout";
import Check from "./Check";

interface Props<T extends FieldValues> {
  label?: string;
  type: "checkbox" | "toggle";
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: FieldError;
  className?: string;
}

function FormCheckbox({
  label,
  type,
  name,
  register,
  error,
  className,
}: Props<FieldValues>) {
  return (
    <FormFieldLayout
      label={label}
      error={error}
      child={
        <Check
          type={type}
          name={name}
          register={register}
          className={className}
        />
      }
    />
  );
}

export default FormCheckbox;
