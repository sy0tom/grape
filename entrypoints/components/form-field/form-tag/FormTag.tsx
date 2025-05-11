import { useRef } from "react";
import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Merge,
  Path,
} from "react-hook-form";
import FormFieldLayout from "../layout/FormFieldLayout";
import TagInput from "./TagInput";

interface Props<T extends FieldValues> {
  label?: string;
  placeholder?: string;
  name: Path<T>;
  control: Control<T>;
  errors?: Merge<FieldError, (FieldError | undefined)[]>;
}

function FormTag<T extends FieldValues>({
  label,
  placeholder,
  name,
  control,
  //errors,
}: Props<T>) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div onClick={() => inputRef.current?.focus()}>
      <FormFieldLayout
        label={label}
        //error={errors}
        child={
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <TagInput
                ref={inputRef}
                initialValues={field.value}
                placeholder={placeholder}
                onChange={field.onChange}
              />
            )}
          />
        }
      />
    </div>
  );
}

export default FormTag;
