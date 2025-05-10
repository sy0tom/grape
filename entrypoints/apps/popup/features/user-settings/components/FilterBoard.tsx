import { Button } from "#/components/ui/button";
import { VideoFilter } from "#/types";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  Control,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { v4 as uuid } from "uuid";
import { Filter } from "./Filter";
import { UserSettingsFormData } from "./UserSettingsForm";

interface Props {
  watch: UseFormWatch<UserSettingsFormData>;
  setValue: UseFormSetValue<UserSettingsFormData>;
  register: UseFormRegister<UserSettingsFormData>;
  control: Control<UserSettingsFormData>;
}

function FilterBoard({ watch, setValue, register, control }: Props) {
  const filters = watch("filters");

  const onAddFilter = () => {
    const newFilters = [...(filters ?? []), createFilter()];
    setFilters(newFilters);
  };

  const onRemoveFilter = (id: string) => {
    const newFilters = removeFilter(id);
    setFilters(newFilters);
  };

  const createFilter = (): VideoFilter => {
    return {
      id: uuid(),
    } as VideoFilter;
  };

  const removeFilter = (id: string): VideoFilter[] => {
    return [...(filters ?? [])].filter((it) => it.id !== id);
  };

  const setFilters = (newFilters: VideoFilter[]) => {
    setValue("filters", newFilters, {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  return (
    <>
      <div className="p-2">
        <span className="text-base font-sans">フィルター設定</span>
      </div>
      <div className="p-2">
        {filters?.map((filter, index) => (
          <div key={filter.id}>
            <Filter index={index} register={register} control={control} />
            <DeleteForeverIcon
              fontSize="medium"
              className="text-white hover:text-gray-300"
              onClick={() => onRemoveFilter(filter.id)}
            />
          </div>
        ))}
      </div>
      <Button onClick={() => onAddFilter()}>追加</Button>
    </>
  );
}

export default FilterBoard;
