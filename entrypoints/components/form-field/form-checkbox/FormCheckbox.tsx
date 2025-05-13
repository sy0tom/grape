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
  checked: boolean;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: FieldError;
  className?: string;
}

function FormCheckbox<T extends FieldValues>({
  label,
  type,
  checked,
  name,
  register,
  error,
  className,
}: Props<T>) {
  return (
    <FormFieldLayout
      label={label}
      error={error}
      child={
        <Check
          type={type}
          checked={checked}
          name={name}
          register={register}
          className={className}
        />
      }
    />
  );
}

export default FormCheckbox;
