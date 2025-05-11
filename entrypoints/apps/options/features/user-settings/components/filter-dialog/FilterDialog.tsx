import { Button } from "#/components/ui/button";
import { VideoFilter } from "#/types";
import ClearIcon from "@mui/icons-material/Clear";
import { Control, UseFormRegister } from "react-hook-form";
import { UserSettingsFormData } from "../user-settings-form/UserSettingsForm";
import FilterForm from "./FilterForm";

interface Props {
  initialValues?: VideoFilter | null;
  register: UseFormRegister<UserSettingsFormData>;
  control: Control<UserSettingsFormData>;
  onSave: (data: VideoFilter) => void;
  onCancel: () => void;
}

function FilterDialog({ initialValues, onSave, onCancel }: Props) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div
        className="absolute top-0 left-0 w-full h-full bg-black/50"
        onClick={onCancel}
      />
      <div
        className="bg-white rounded-lg p-4 shadow-lg w-[740px] relative z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between w-full">
          <div className="text-base font-sans">フィルター設定</div>
          <div className="ml-auto">
            <Button type="button" onClick={onCancel}>
              <ClearIcon className="text-base hover:text-gray-400" />
            </Button>
          </div>
        </div>
        <FilterForm initialValues={initialValues} onSave={onSave} />
      </div>
    </div>
  );
}

export default FilterDialog;
