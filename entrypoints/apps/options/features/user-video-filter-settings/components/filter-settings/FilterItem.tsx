import { VideoFilter } from "#/types";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
interface Props<T extends VideoFilter> {
  filter: T;
  onEdit: () => void;
  onCopy: () => void;
  onDelete: () => void;
}

function FilterItem<T extends VideoFilter>({
  filter,
  onEdit,
  onCopy,
  onDelete,
}: Props<T>) {
  return (
    <div className="flex items-center gap-1 bg-gray-400 rounded-md">
      <div className="p-2 w-full" onClick={onEdit}>
        <span>{filter.name}</span>
      </div>
      <div className="flex items-center gap-1 ml-auto p-2">
        <button onClick={onCopy}>
          <ContentCopyIcon
            fontSize="medium"
            className="text-white hover:text-gray-300"
          />
        </button>
        <button onClick={onDelete}>
          <DeleteForeverIcon
            fontSize="medium"
            className="text-white hover:text-gray-300"
          />
        </button>
      </div>
    </div>
  );
}

export default FilterItem;
