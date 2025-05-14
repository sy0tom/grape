import ClearIcon from "@mui/icons-material/Clear";
import { ReactNode } from "react";

interface Props {
  title: string;
  form: ReactNode;
  handleClose: () => void;
}

function VideoFilterSettingsDialog({ title, form, handleClose }: Props) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div
        className="absolute top-0 left-0 w-full h-full bg-black/50"
        onClick={handleClose}
      />

      <div
        className="bg-white rounded-lg p-4 shadow-lg w-[740px] relative z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between w-full">
          <div className="text-base font-sans">{title}</div>
          <div className="ml-auto">
            <ClearIcon
              className="text-base text-gray-600 hover:text-gray-400"
              onClick={handleClose}
            />
          </div>
        </div>
        {form}
      </div>
    </div>
  );
}

export default VideoFilterSettingsDialog;
