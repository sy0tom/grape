import { Button } from "#/components/ui/button";
import { AvFilter } from "#/types";
import ClearIcon from "@mui/icons-material/Clear";
import AVFilterSettingsForm from "./AVFilterSettingsForm";

interface Props {
  title: string;
  initialValues?: AvFilter;
  onSave: (data: AvFilter) => Promise<void>;
  onClose: () => void;
}

function AvFilterSettingsDialog({
  title,
  initialValues,
  onSave,
  onClose,
}: Props) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div
        className="absolute top-0 left-0 w-full h-full bg-black/50"
        onClick={onClose}
      />

      <div
        className="bg-white rounded-lg p-4 shadow-lg w-[740px] relative z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between w-full">
          <div className="text-base font-sans">{title}</div>
          <div className="ml-auto">
            <Button type="button" onClick={onClose}>
              <ClearIcon className="text-base hover:text-gray-400" />
            </Button>
          </div>
        </div>
        <AVFilterSettingsForm initialValues={initialValues} onSave={onSave} />
      </div>
    </div>
  );
}

export default AvFilterSettingsDialog;
