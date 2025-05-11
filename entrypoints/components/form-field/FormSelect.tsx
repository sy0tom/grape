import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";
import CSelect from "./field/CSelect";
import FormFieldLayout from "./layout/FormFieldLayout";

interface Props<T extends FieldValues> {
  label?: string;
  options: { group: string; items: { label: string; value: string }[] }[];
  placeholder: string;
  name: Path<T>;
  control: Control<T>;
  error?: FieldError;
}

function FormSelect<T extends FieldValues>({
  label,
  options,
  placeholder,
  name,
  control,
  error,
}: Props<T>) {
  return (
    <FormFieldLayout
      label={label}
      error={error}
      child={
        <Controller
          name={name}
          control={control}
          rules={{ required: "選択してください" }}
          render={({ field }) => (
            <CSelect
              options={options}
              placeholder={placeholder}
              initialValue={field.value}
              onChange={field.onChange}
            />
          )}
        />
      }
    />
  );
}

export default FormSelect;
