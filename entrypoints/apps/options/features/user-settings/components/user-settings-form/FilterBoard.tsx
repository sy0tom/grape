import { Button } from "#/components/ui/button";
import { VideoFilter } from "#/types";
import { useState } from "react";
import {
  Control,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import FilterDialog from "../filter-dialog/FilterDialog";
import FilterItem from "./FilterItem";
import { UserSettingsFormData } from "./UserSettingsForm";

interface Props {
  watch: UseFormWatch<UserSettingsFormData>;
  setValue: UseFormSetValue<UserSettingsFormData>;
  register: UseFormRegister<UserSettingsFormData>;
  control: Control<UserSettingsFormData>;
}

function FilterBoard({ watch, setValue, register, control }: Props) {
  const filters = watch("filters");

  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<
    VideoFilter | null | undefined
  >(null);

  const onOpenDialog = (videoFilter?: VideoFilter | null) => {
    setSelectedFilter(videoFilter);
    setDialogIsOpen(true);
  };

  const onCloseDialog = () => {
    setDialogIsOpen(false);
  };

  const onSaveDialog = (data: VideoFilter) => {
    const newFilters = [...filters];
    const index = newFilters.findIndex((it) => it.id === data.id);
    if (index !== -1) {
      newFilters[index] = data;
    } else {
      newFilters.push(data);
    }
    setFilters(newFilters);
    onCloseDialog();
  };

  const onRemoveFilter = (id: string) => {
    const newFilters = removeFilter(id);
    setFilters(newFilters);
  };

  const removeFilter = (id: string): VideoFilter[] => {
    return [...filters].filter((it) => it.id !== id);
  };

  const setFilters = (newFilters: VideoFilter[]) => {
    setValue("filters", newFilters, {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  return (
    <div className="p-2">
      <>
        <span className="text-base font-sans">フィルター設定</span>
      </>
      <div className="p-2">
        {filters?.length === 0 ? (
          <span>フィルターの登録はありません</span>
        ) : (
          filters?.map((filter) => (
            <div key={filter.id}>
              <FilterItem
                filter={filter}
                onEdit={() => onOpenDialog(filter)}
                onRemove={onRemoveFilter}
              />
            </div>
          ))
        )}
      </div>
      <>
        <Button onClick={() => onOpenDialog()}>追加</Button>
      </>
      {dialogIsOpen && (
        <FilterDialog
          initialValues={selectedFilter}
          register={register}
          control={control}
          onSave={(data: VideoFilter) => onSaveDialog(data)}
          onCancel={() => onCloseDialog()}
        />
      )}
    </div>
  );
}

export default FilterBoard;
