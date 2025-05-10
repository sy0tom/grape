import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { Input } from "../ui/input";
import FormFieldLayout from "./layout/FormFieldLayout";

interface Props<T extends FieldValues> {
  label?: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: FieldError;
  props?: React.ComponentProps<"input">;
  className?: string;
}

function FormInput<T extends FieldValues>({
  label,
  type,
  placeholder,
  name,
  register,
  error,
  className,
  props,
}: Props<T>) {
  return (
    <FormFieldLayout
      label={label}
      error={error}
      child={
        <Input
          type={type}
          placeholder={placeholder}
          {...register(name)}
          className={className}
          {...props}
        />
      }
    />
  );
}

export default FormInput;
