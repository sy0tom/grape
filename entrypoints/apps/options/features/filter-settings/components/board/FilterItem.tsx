import { VideoFilter } from "#/types";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

interface Props<T extends VideoFilter> {
  filter: T;
  onEdit: () => void;
  onDelete: () => void;
}

function FilterItem<T extends VideoFilter>({
  filter,
  onEdit,
  onDelete,
}: Props<T>) {
  return (
    <div className="flex items-center gap-1 bg-gray-400 rounded-md">
      <div className="p-2 w-full" onClick={onEdit}>
        <span>{filter.name}</span>
      </div>
      <button onClick={onDelete} className="p-2 ml-auto">
        <DeleteForeverIcon
          fontSize="medium"
          className="text-white hover:text-gray-300"
        />
      </button>
    </div>
  );
}

export default FilterItem;
