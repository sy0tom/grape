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
}: Props<T>) {
  // const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
    //onClick={() => inputRef.current?.focus()}
    >
      <FormFieldLayout
        label={label}
        child={
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <div className="border-input border rounded-md p-2 w-full focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px] transition-[color,box-shadow] outline-none shadow-xs">
                {/* TODO: タグを選択されたときにInputタグの末尾にフォーカスを当てる */}
                {/* TODO: 子要素に選択されたときに強調させる */}
                <TagInput
                  // ref={inputRef}
                  initialValues={field.value}
                  placeholder={placeholder}
                  onChange={field.onChange}
                />
              </div>
            )}
          />
        }
      />
    </div>
  );
}

export default FormTag;
