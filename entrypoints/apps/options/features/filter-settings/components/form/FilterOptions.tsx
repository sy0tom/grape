import { FormSelect } from "#/components/form-field";
import { Filter } from "#/types/fanza";
import { Control, FieldError, FieldValues, Path } from "react-hook-form";

interface Props<T extends FieldValues> {
  filter: Filter;
  name: Path<T>;
  control: Control<T>;
  error?: FieldError;
}

function FilterOptions<T extends FieldValues>({
  filter,
  name,
  control,
  error,
}: Props<T>) {
  return (
    <FormSelect
      options={[
        {
          group: filter.label,
          items: filter.options,
        },
      ]}
      placeholder={filter.label}
      name={name}
      control={control}
      error={error}
    />
  );
}

export default FilterOptions;
