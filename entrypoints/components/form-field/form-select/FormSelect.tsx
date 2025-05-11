import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";
import FormFieldLayout from "../layout/FormFieldLayout";
import SelectOptions from "./SelectOptions";

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
            <SelectOptions
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
